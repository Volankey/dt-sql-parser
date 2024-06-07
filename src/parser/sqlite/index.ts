import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SQLiteLexer } from '../../lib/sqlite/SQLiteLexer';
import { SQLiteParser, ProgramContext } from '../../lib/sqlite/SQLiteParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { SQLiteSplitListener } from './sqliteSplitListener';
import { SQLiteEntityCollector } from './sqliteEntityCollector';

export { SQLiteEntityCollector, SQLiteSplitListener };

export class SQLite extends BasicSQL<SQLiteLexer, ProgramContext, SQLiteParser> {
    protected createLexerFromCharStream(charStreams: CharStream): SQLiteLexer {
        return new SQLiteLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream): SQLiteParser {
        return new SQLiteParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        SQLiteParser.RULE_table_name,
        SQLiteParser.RULE_view_name,
        SQLiteParser.RULE_function_name,
        SQLiteParser.RULE_column_name,
    ]);

    protected get splitListener() {
        return new SQLiteSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new SQLiteEntityCollector(input, caretTokenIndex);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                // case SQLiteParser.RULE_databaseName: {
                //     syntaxContextType = EntityContextType.DATABASE;
                //     break;
                // }
                // case SQLiteParser.RULE_databaseNameCreate: {
                //     syntaxContextType = EntityContextType.DATABASE_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_table_name: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                // case SQLiteParser.RULE_tableNameCreate: {
                //     syntaxContextType = EntityContextType.TABLE_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_view_name: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                // case SQLiteParser.RULE_viewNameCreate: {
                //     syntaxContextType = EntityContextType.VIEW_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_function_name: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                // case SQLiteParser.RULE_functionNameCreate: {
                //     syntaxContextType = EntityContextType.FUNCTION_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_column_name: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                // case SQLiteParser.RULE_columnNameCreate: {
                //     syntaxContextType = EntityContextType.COLUMN_CREATE;
                //     break;
                // }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.endsWith('_')) {
                const keyword =
                    displayName.startsWith("'") && displayName.endsWith("'")
                        ? displayName.slice(1, -1)
                        : displayName;
                keywords.push(keyword);
            }
        }

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
