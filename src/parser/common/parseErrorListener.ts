import { Token, Recognizer, ANTLRErrorListener, RecognitionException } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator';

/**
 * Converted from {@link SyntaxError}.
 */
export interface ParseError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

/**
 * The type of error resulting from lexical parsing and parsing.
 */
export interface SyntaxError<T> {
    recognizer: Recognizer<T, ATNSimulator>;
    offendingSymbol: Token;
    line: number;
    charPositionInLine: number;
    msg: string;
    e: RecognitionException;
}

/**
 * ErrorHandler will be invoked when it encounters a parsing error.
 * Includes lexical errors and parsing errors.
 */
export type ErrorHandler<T> = (parseError: ParseError, originalError: SyntaxError<T>) => void;

export default class ParseErrorListener implements ANTLRErrorListener<Token> {
    private _errorHandler;

    constructor(errorListener: ErrorHandler<Token>) {
        this._errorHandler = errorListener;
    }

    syntaxError(
        recognizer: Recognizer<Token, ATNSimulator>,
        offendingSymbol,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol && offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        if (this._errorHandler) {
            this._errorHandler(
                {
                    startLine: line,
                    endLine: line,
                    startCol: charPositionInLine,
                    endCol: endCol,
                    message: msg,
                },
                {
                    e,
                    line,
                    msg,
                    recognizer,
                    offendingSymbol,
                    charPositionInLine,
                }
            );
        }
    }
}