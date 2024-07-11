
// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

grammar mongo;

program
    : mongoCommands
    ;

mongoCommands
    : commands EOF
    ;

commands
    : (command | emptyCommand | comment)+
    ;

// command: DB DOT (functionCall | (collection DOT functionCall)) SEMICOLON?;

command
    : DB DOT (functionCall) SEMICOLON?                # dbFunctionCall
    | DB DOT (collection DOT functionCall) SEMICOLON? # dbCollectionFunctionCall
    ;

emptyCommand
    : SEMICOLON
    ;

collection
    : collectionName
    ;

functionCall
    : functionName arguments
    ;

functionName
    : STRING_LITERAL
    ;

collectionName
    : STRING_LITERAL
    ;

arguments
    : '(' (argumentList (',' argumentList)* ','?)? ')'
    ;

argumentList
    : literal
    | objectLiteral
    | arrayLiteral
    ;

objectLiteral
    : '{' propertyNameAndValueList? ','? '}'
    ;

arrayLiteral
    : (OPEN_BRACKET WhiteSpaces* elementList WhiteSpaces* CLOSED_BRACKET)
    ;

elementList
    : ','* propertyValue? (','+ propertyValue)* ','*
    ;

propertyNameAndValueList
    : propertyAssignment (',' propertyAssignment)*
    ;

propertyAssignment
    : propertyName ':' propertyValue
    ;

propertyValue
    : literal
    | arrayLiteral
    | objectLiteral
    | functionCall
    ;

literal
    : NullLiteral
    | BooleanLiteral
    | StringLiteral
    | NumericLiteral
    ;

propertyName
    : STRING_LITERAL
    | StringLiteral
    | NumericLiteral
    ;

comment
    : SingleLineComment
    | MultiLineComment
    ;

SingleLineComment
    : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN)
    ;

MultiLineComment
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

StringLiteral
    : ('"' DoubleStringCharacter* '"' | '\'' SingleStringCharacter* '\'')
    ;

NullLiteral
    : 'null'
    ;

BooleanLiteral
    : 'true'
    | 'false'
    ;

NumericLiteral
    : DecimalLiteral
    | HexIntegerLiteral
    | OctalIntegerLiteral
    | OctalIntegerLiteral2
    | BinaryIntegerLiteral
    ;

DecimalLiteral
    : DecimalIntegerLiteral '.' [0-9] [0-9_]* ExponentPart?
    | '.' [0-9] [0-9_]* ExponentPart?
    | DecimalIntegerLiteral ExponentPart?
    ;

/// Numeric Literals

HexIntegerLiteral
    : '0' [xX] [0-9a-fA-F] HexDigit*
    ;

OctalIntegerLiteral
    : '0' [0-7]+ {!this.IsStrictMode()}?
    ;

OctalIntegerLiteral2
    : '0' [oO] [0-7] [_0-7]*
    ;

BinaryIntegerLiteral
    : '0' [bB] [01] [_01]*
    ;

BigHexIntegerLiteral
    : '0' [xX] [0-9a-fA-F] HexDigit* 'n'
    ;

BigOctalIntegerLiteral
    : '0' [oO] [0-7] [_0-7]* 'n'
    ;

BigBinaryIntegerLiteral
    : '0' [bB] [01] [_01]* 'n'
    ;

BigDecimalIntegerLiteral
    : DecimalIntegerLiteral 'n'
    ;

LineTerminator
    : [\r\n\u2028\u2029] -> channel(HIDDEN)
    ;

SEMICOLON
    : ';'
    ;

DOT
    : '.'
    ;

DB
    : 'db'
    ;

LF
    : '\n'
    ;

CRLF
    : '\r\n'
    ;

OPEN_BRACKET
    : '['
    ;

CLOSED_BRACKET
    : ']'
    ;

STRING_LITERAL
    : ((~[[\]",\\ \t\n:.;(){}\-]) | SingleEscapeCharacter)+
    ;

// fragment STRING_ESCAPE: '\\' [\\"\\'];

fragment DecimalIntegerLiteral
    : '0'
    | [1-9] [0-9_]*
    ;

fragment ExponentPart
    : [eE] [+-]? [0-9_]+
    ;

fragment DecimalDigit
    : [0-9]
    ;

fragment HexDigit
    : [_0-9a-fA-F]
    ;

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;

fragment CharacterEscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;

fragment HexEscapeSequence
    : 'x' HexDigit HexDigit
    ;

fragment UnicodeEscapeSequence
    : 'u' HexDigit HexDigit HexDigit HexDigit
    | 'u' '{' HexDigit HexDigit+ '}'
    ;

fragment ExtendedUnicodeEscapeSequence
    : 'u' '{' HexDigit+ '}'
    ;

fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment EscapeSequence
    : CharacterEscapeSequence
    | '0' // no digit ahead! TODO
    | HexEscapeSequence
    | UnicodeEscapeSequence
    | ExtendedUnicodeEscapeSequence
    ;

fragment LineContinuation
    : '\\' [\r\n\u2028\u2029]+
    ;

fragment DoubleStringCharacter
    : ~["\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment SingleStringCharacter
    : ~['\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

WhiteSpaces
    : [\t\u000B\u000C\u0020\u00A0]+ -> skip
    ;