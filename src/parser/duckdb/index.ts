import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';

import { DuckDBLexer } from '../../lib/duckdb/DuckDBLexer';
import { DuckDBParser, ProgramContext } from '../../lib/duckdb/DuckDBParser';
import { EntityContextType, Suggestions, SyntaxSuggestion } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { StmtContextType } from '../common/entityCollector';
import { DuckDBEntityCollector } from './DuckDBEntityCollector';
import { DuckDBSplitListener } from './DuckDBSplitListener';

export { DuckDBEntityCollector, DuckDBSplitListener };

export class DuckDB extends BasicSQL<DuckDBLexer, ProgramContext, DuckDBParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new DuckDBLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new DuckDBParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        DuckDBParser.RULE_table_name_create, // table name
        DuckDBParser.RULE_table_name, // table name that will be created
        DuckDBParser.RULE_function_name, // function name
        DuckDBParser.RULE_function_name_create, // function name that will be created
        DuckDBParser.RULE_schema_name_create, // schema name that will be created
        DuckDBParser.RULE_schema_name, // schema name
        DuckDBParser.RULE_view_name_create, // view name that will be created
        DuckDBParser.RULE_view_name, // view name
        DuckDBParser.RULE_database_name_create, // database name that will be created
        DuckDBParser.RULE_database_name, // database name
        DuckDBParser.RULE_procedure_name_create, // procedure name that will be created
        DuckDBParser.RULE_procedure_name, // procedure name
        DuckDBParser.RULE_column_name_create, // column name that will be created
        DuckDBParser.RULE_column_name, // column name
    ]);

    protected get splitListener() {
        return new DuckDBSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new DuckDBEntityCollector(input, caretTokenIndex);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];
        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case DuckDBParser.RULE_table_name_create: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_table_name: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case DuckDBParser.RULE_function_name_create: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case DuckDBParser.RULE_function_name: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case DuckDBParser.RULE_schema_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_schema_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case DuckDBParser.RULE_view_name_create: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case DuckDBParser.RULE_view_name: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case DuckDBParser.RULE_database_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_database_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case DuckDBParser.RULE_procedure_name_create: {
                    syntaxContextType = EntityContextType.PROCEDURE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_procedure_name: {
                    syntaxContextType = EntityContextType.PROCEDURE;
                    break;
                }
                case DuckDBParser.RULE_column_name_create: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case DuckDBParser.RULE_column_name: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
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

        for (let candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
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
