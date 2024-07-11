import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { mongoLexer as MongoLexer } from '../../lib/mongo/mongoLexer';
import { mongoParser as MongoParser, MongoCommandsContext } from '../../lib/mongo/mongoParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { MongoSplitListener } from './mongoSplitListener';
import { MongoEntityCollector } from './mongoEntityCollector';

export { MongoEntityCollector, MongoSplitListener };

// @ts-ignore
export class Mongo extends BasicSQL<MongoLexer, MongoCommandsContext, MongoParser> {
    protected createLexerFromCharStream(charStreams: CharStream): MongoLexer {
        return new MongoLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream): MongoParser {
        return new MongoParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        MongoParser.RULE_propertyValue,
        MongoParser.RULE_propertyName,
        MongoParser.RULE_collectionName,
        MongoParser.RULE_propertyName,
        MongoParser.RULE_functionName,
    ]);

    protected get splitListener() {
        return new MongoSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new MongoEntityCollector(input, caretTokenIndex);
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
                case MongoParser.RULE_functionCall: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MongoParser.RULE_collection: {
                    syntaxContextType = EntityContextType.COLLECTION;
                    break;
                }
                case MongoParser.RULE_propertyName: {
                    syntaxContextType = EntityContextType.PROPERTY_NAME;
                    break;
                }
                case MongoParser.RULE_propertyValue: {
                    syntaxContextType = EntityContextType.PROPERTY_VAL;
                    break;
                }
                case MongoParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MongoParser.RULE_collectionName: {
                    syntaxContextType = EntityContextType.COLLECTION;
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
