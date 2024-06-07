// Generated from dt-sql-parser/src/grammar/sqlite/SQLiteParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SQLiteParserListener } from "./SQLiteParserListener.js";
import { SQLiteParserVisitor } from "./SQLiteParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


import { SQLParserBase } from '../SQLParserBase';


export class SQLiteParser extends SQLParserBase {
    public static readonly SCOL = 1;
    public static readonly DOT = 2;
    public static readonly OPEN_PAR = 3;
    public static readonly CLOSE_PAR = 4;
    public static readonly COMMA = 5;
    public static readonly ASSIGN = 6;
    public static readonly STAR = 7;
    public static readonly PLUS = 8;
    public static readonly MINUS = 9;
    public static readonly TILDE = 10;
    public static readonly PIPE2 = 11;
    public static readonly DIV = 12;
    public static readonly MOD = 13;
    public static readonly LT2 = 14;
    public static readonly GT2 = 15;
    public static readonly AMP = 16;
    public static readonly PIPE = 17;
    public static readonly LT = 18;
    public static readonly LT_EQ = 19;
    public static readonly GT = 20;
    public static readonly GT_EQ = 21;
    public static readonly EQ = 22;
    public static readonly NOT_EQ1 = 23;
    public static readonly NOT_EQ2 = 24;
    public static readonly ABORT_ = 25;
    public static readonly ACTION_ = 26;
    public static readonly ADD_ = 27;
    public static readonly AFTER_ = 28;
    public static readonly ALL_ = 29;
    public static readonly ALTER_ = 30;
    public static readonly ANALYZE_ = 31;
    public static readonly AND_ = 32;
    public static readonly AS_ = 33;
    public static readonly ASC_ = 34;
    public static readonly ATTACH_ = 35;
    public static readonly AUTOINCREMENT_ = 36;
    public static readonly BEFORE_ = 37;
    public static readonly BEGIN_ = 38;
    public static readonly BETWEEN_ = 39;
    public static readonly BY_ = 40;
    public static readonly CASCADE_ = 41;
    public static readonly CASE_ = 42;
    public static readonly CAST_ = 43;
    public static readonly CHECK_ = 44;
    public static readonly COLLATE_ = 45;
    public static readonly COLUMN_ = 46;
    public static readonly COMMIT_ = 47;
    public static readonly CONFLICT_ = 48;
    public static readonly CONSTRAINT_ = 49;
    public static readonly CREATE_ = 50;
    public static readonly CROSS_ = 51;
    public static readonly CURRENT_DATE_ = 52;
    public static readonly CURRENT_TIME_ = 53;
    public static readonly CURRENT_TIMESTAMP_ = 54;
    public static readonly DATABASE_ = 55;
    public static readonly DEFAULT_ = 56;
    public static readonly DEFERRABLE_ = 57;
    public static readonly DEFERRED_ = 58;
    public static readonly DELETE_ = 59;
    public static readonly DESC_ = 60;
    public static readonly DETACH_ = 61;
    public static readonly DISTINCT_ = 62;
    public static readonly DROP_ = 63;
    public static readonly EACH_ = 64;
    public static readonly ELSE_ = 65;
    public static readonly END_ = 66;
    public static readonly ESCAPE_ = 67;
    public static readonly EXCEPT_ = 68;
    public static readonly EXCLUSIVE_ = 69;
    public static readonly EXISTS_ = 70;
    public static readonly EXPLAIN_ = 71;
    public static readonly FAIL_ = 72;
    public static readonly FOR_ = 73;
    public static readonly FOREIGN_ = 74;
    public static readonly FROM_ = 75;
    public static readonly FULL_ = 76;
    public static readonly GLOB_ = 77;
    public static readonly GROUP_ = 78;
    public static readonly HAVING_ = 79;
    public static readonly IF_ = 80;
    public static readonly IGNORE_ = 81;
    public static readonly IMMEDIATE_ = 82;
    public static readonly IN_ = 83;
    public static readonly INDEX_ = 84;
    public static readonly INDEXED_ = 85;
    public static readonly INITIALLY_ = 86;
    public static readonly INNER_ = 87;
    public static readonly INSERT_ = 88;
    public static readonly INSTEAD_ = 89;
    public static readonly INTERSECT_ = 90;
    public static readonly INTO_ = 91;
    public static readonly IS_ = 92;
    public static readonly ISNULL_ = 93;
    public static readonly JOIN_ = 94;
    public static readonly KEY_ = 95;
    public static readonly LEFT_ = 96;
    public static readonly LIKE_ = 97;
    public static readonly LIMIT_ = 98;
    public static readonly MATCH_ = 99;
    public static readonly NATURAL_ = 100;
    public static readonly NO_ = 101;
    public static readonly NOT_ = 102;
    public static readonly NOTNULL_ = 103;
    public static readonly NULL_ = 104;
    public static readonly OF_ = 105;
    public static readonly OFFSET_ = 106;
    public static readonly ON_ = 107;
    public static readonly OR_ = 108;
    public static readonly ORDER_ = 109;
    public static readonly OUTER_ = 110;
    public static readonly PLAN_ = 111;
    public static readonly PRAGMA_ = 112;
    public static readonly PRIMARY_ = 113;
    public static readonly QUERY_ = 114;
    public static readonly RAISE_ = 115;
    public static readonly RECURSIVE_ = 116;
    public static readonly REFERENCES_ = 117;
    public static readonly REGEXP_ = 118;
    public static readonly REINDEX_ = 119;
    public static readonly RELEASE_ = 120;
    public static readonly RENAME_ = 121;
    public static readonly REPLACE_ = 122;
    public static readonly RESTRICT_ = 123;
    public static readonly RETURNING_ = 124;
    public static readonly RIGHT_ = 125;
    public static readonly ROLLBACK_ = 126;
    public static readonly ROW_ = 127;
    public static readonly ROWS_ = 128;
    public static readonly SAVEPOINT_ = 129;
    public static readonly SELECT_ = 130;
    public static readonly SET_ = 131;
    public static readonly TABLE_ = 132;
    public static readonly TEMP_ = 133;
    public static readonly TEMPORARY_ = 134;
    public static readonly THEN_ = 135;
    public static readonly TO_ = 136;
    public static readonly TRANSACTION_ = 137;
    public static readonly TRIGGER_ = 138;
    public static readonly UNION_ = 139;
    public static readonly UNIQUE_ = 140;
    public static readonly UPDATE_ = 141;
    public static readonly USING_ = 142;
    public static readonly VACUUM_ = 143;
    public static readonly VALUES_ = 144;
    public static readonly VIEW_ = 145;
    public static readonly VIRTUAL_ = 146;
    public static readonly WHEN_ = 147;
    public static readonly WHERE_ = 148;
    public static readonly WITH_ = 149;
    public static readonly WITHOUT_ = 150;
    public static readonly FIRST_VALUE_ = 151;
    public static readonly OVER_ = 152;
    public static readonly PARTITION_ = 153;
    public static readonly RANGE_ = 154;
    public static readonly PRECEDING_ = 155;
    public static readonly UNBOUNDED_ = 156;
    public static readonly CURRENT_ = 157;
    public static readonly FOLLOWING_ = 158;
    public static readonly CUME_DIST_ = 159;
    public static readonly DENSE_RANK_ = 160;
    public static readonly LAG_ = 161;
    public static readonly LAST_VALUE_ = 162;
    public static readonly LEAD_ = 163;
    public static readonly NTH_VALUE_ = 164;
    public static readonly NTILE_ = 165;
    public static readonly PERCENT_RANK_ = 166;
    public static readonly RANK_ = 167;
    public static readonly ROW_NUMBER_ = 168;
    public static readonly GENERATED_ = 169;
    public static readonly ALWAYS_ = 170;
    public static readonly STORED_ = 171;
    public static readonly TRUE_ = 172;
    public static readonly FALSE_ = 173;
    public static readonly WINDOW_ = 174;
    public static readonly NULLS_ = 175;
    public static readonly FIRST_ = 176;
    public static readonly LAST_ = 177;
    public static readonly FILTER_ = 178;
    public static readonly GROUPS_ = 179;
    public static readonly EXCLUDE_ = 180;
    public static readonly TIES_ = 181;
    public static readonly OTHERS_ = 182;
    public static readonly DO_ = 183;
    public static readonly NOTHING_ = 184;
    public static readonly IDENTIFIER = 185;
    public static readonly NUMERIC_LITERAL = 186;
    public static readonly BIND_PARAMETER = 187;
    public static readonly STRING_LITERAL = 188;
    public static readonly BLOB_LITERAL = 189;
    public static readonly SINGLE_LINE_COMMENT = 190;
    public static readonly MULTILINE_COMMENT = 191;
    public static readonly SPACES = 192;
    public static readonly UNEXPECTED_CHAR = 193;
    public static readonly SEMI = 194;
    public static readonly RULE_program = 0;
    public static readonly RULE_singleStmt = 1;
    public static readonly RULE_parse = 2;
    public static readonly RULE_sql_stmt_list = 3;
    public static readonly RULE_sql_stmt = 4;
    public static readonly RULE_alter_table_stmt = 5;
    public static readonly RULE_analyze_stmt = 6;
    public static readonly RULE_attach_stmt = 7;
    public static readonly RULE_begin_stmt = 8;
    public static readonly RULE_commit_stmt = 9;
    public static readonly RULE_rollback_stmt = 10;
    public static readonly RULE_savepoint_stmt = 11;
    public static readonly RULE_release_stmt = 12;
    public static readonly RULE_create_index_stmt = 13;
    public static readonly RULE_indexed_column = 14;
    public static readonly RULE_create_table_stmt = 15;
    public static readonly RULE_column_def = 16;
    public static readonly RULE_type_name = 17;
    public static readonly RULE_column_constraint = 18;
    public static readonly RULE_signed_number = 19;
    public static readonly RULE_table_constraint = 20;
    public static readonly RULE_foreign_key_clause = 21;
    public static readonly RULE_conflict_clause = 22;
    public static readonly RULE_create_trigger_stmt = 23;
    public static readonly RULE_create_view_stmt = 24;
    public static readonly RULE_create_virtual_table_stmt = 25;
    public static readonly RULE_with_clause = 26;
    public static readonly RULE_cte_table_name = 27;
    public static readonly RULE_recursive_cte = 28;
    public static readonly RULE_common_table_expression = 29;
    public static readonly RULE_delete_stmt = 30;
    public static readonly RULE_delete_stmt_limited = 31;
    public static readonly RULE_detach_stmt = 32;
    public static readonly RULE_drop_stmt = 33;
    public static readonly RULE_expr = 34;
    public static readonly RULE_raise_function = 35;
    public static readonly RULE_literal_value = 36;
    public static readonly RULE_value_row = 37;
    public static readonly RULE_values_clause = 38;
    public static readonly RULE_insert_stmt = 39;
    public static readonly RULE_returning_clause = 40;
    public static readonly RULE_upsert_clause = 41;
    public static readonly RULE_pragma_stmt = 42;
    public static readonly RULE_pragma_value = 43;
    public static readonly RULE_reindex_stmt = 44;
    public static readonly RULE_select_stmt = 45;
    public static readonly RULE_join_clause = 46;
    public static readonly RULE_select_core = 47;
    public static readonly RULE_factored_select_stmt = 48;
    public static readonly RULE_simple_select_stmt = 49;
    public static readonly RULE_compound_select_stmt = 50;
    public static readonly RULE_table_or_subquery = 51;
    public static readonly RULE_result_column = 52;
    public static readonly RULE_join_operator = 53;
    public static readonly RULE_join_constraint = 54;
    public static readonly RULE_compound_operator = 55;
    public static readonly RULE_update_stmt = 56;
    public static readonly RULE_column_name_list = 57;
    public static readonly RULE_update_stmt_limited = 58;
    public static readonly RULE_qualified_table_name = 59;
    public static readonly RULE_vacuum_stmt = 60;
    public static readonly RULE_filter_clause = 61;
    public static readonly RULE_window_defn = 62;
    public static readonly RULE_over_clause = 63;
    public static readonly RULE_frame_spec = 64;
    public static readonly RULE_frame_clause = 65;
    public static readonly RULE_simple_function_invocation = 66;
    public static readonly RULE_aggregate_function_invocation = 67;
    public static readonly RULE_window_function_invocation = 68;
    public static readonly RULE_common_table_stmt = 69;
    public static readonly RULE_order_by_stmt = 70;
    public static readonly RULE_limit_stmt = 71;
    public static readonly RULE_ordering_term = 72;
    public static readonly RULE_asc_desc = 73;
    public static readonly RULE_frame_left = 74;
    public static readonly RULE_frame_right = 75;
    public static readonly RULE_frame_single = 76;
    public static readonly RULE_window_function = 77;
    public static readonly RULE_offset = 78;
    public static readonly RULE_default_value = 79;
    public static readonly RULE_partition_by = 80;
    public static readonly RULE_order_by_expr = 81;
    public static readonly RULE_order_by_expr_asc_desc = 82;
    public static readonly RULE_expr_asc_desc = 83;
    public static readonly RULE_initial_select = 84;
    public static readonly RULE_recursive_select = 85;
    public static readonly RULE_unary_operator = 86;
    public static readonly RULE_error_message = 87;
    public static readonly RULE_module_argument = 88;
    public static readonly RULE_column_alias = 89;
    public static readonly RULE_keyword = 90;
    public static readonly RULE_name = 91;
    public static readonly RULE_function_name = 92;
    public static readonly RULE_schema_name = 93;
    public static readonly RULE_table_name = 94;
    public static readonly RULE_table_or_index_name = 95;
    public static readonly RULE_column_name = 96;
    public static readonly RULE_collation_name = 97;
    public static readonly RULE_foreign_table = 98;
    public static readonly RULE_index_name = 99;
    public static readonly RULE_trigger_name = 100;
    public static readonly RULE_view_name = 101;
    public static readonly RULE_module_name = 102;
    public static readonly RULE_pragma_name = 103;
    public static readonly RULE_savepoint_name = 104;
    public static readonly RULE_table_alias = 105;
    public static readonly RULE_transaction_name = 106;
    public static readonly RULE_window_name = 107;
    public static readonly RULE_alias = 108;
    public static readonly RULE_filename = 109;
    public static readonly RULE_base_window_name = 110;
    public static readonly RULE_simple_func = 111;
    public static readonly RULE_aggregate_func = 112;
    public static readonly RULE_table_function_name = 113;
    public static readonly RULE_any_name = 114;

    public static readonly literalNames = [
        null, "';'", "'.'", "'('", "')'", "','", "'='", "'*'", "'+'", "'-'", 
        "'~'", "'||'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'<'", 
        "'<='", "'>'", "'>='", "'=='", "'!='", "'<>'", "'ABORT'", "'ACTION'", 
        "'ADD'", "'AFTER'", "'ALL'", "'ALTER'", "'ANALYZE'", "'AND'", "'AS'", 
        "'ASC'", "'ATTACH'", "'AUTOINCREMENT'", "'BEFORE'", "'BEGIN'", "'BETWEEN'", 
        "'BY'", "'CASCADE'", "'CASE'", "'CAST'", "'CHECK'", "'COLLATE'", 
        "'COLUMN'", "'COMMIT'", "'CONFLICT'", "'CONSTRAINT'", "'CREATE'", 
        "'CROSS'", "'CURRENT_DATE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
        "'DATABASE'", "'DEFAULT'", "'DEFERRABLE'", "'DEFERRED'", "'DELETE'", 
        "'DESC'", "'DETACH'", "'DISTINCT'", "'DROP'", "'EACH'", "'ELSE'", 
        "'END'", "'ESCAPE'", "'EXCEPT'", "'EXCLUSIVE'", "'EXISTS'", "'EXPLAIN'", 
        "'FAIL'", "'FOR'", "'FOREIGN'", "'FROM'", "'FULL'", "'GLOB'", "'GROUP'", 
        "'HAVING'", "'IF'", "'IGNORE'", "'IMMEDIATE'", "'IN'", "'INDEX'", 
        "'INDEXED'", "'INITIALLY'", "'INNER'", "'INSERT'", "'INSTEAD'", 
        "'INTERSECT'", "'INTO'", "'IS'", "'ISNULL'", "'JOIN'", "'KEY'", 
        "'LEFT'", "'LIKE'", "'LIMIT'", "'MATCH'", "'NATURAL'", "'NO'", "'NOT'", 
        "'NOTNULL'", "'NULL'", "'OF'", "'OFFSET'", "'ON'", "'OR'", "'ORDER'", 
        "'OUTER'", "'PLAN'", "'PRAGMA'", "'PRIMARY'", "'QUERY'", "'RAISE'", 
        "'RECURSIVE'", "'REFERENCES'", "'REGEXP'", "'REINDEX'", "'RELEASE'", 
        "'RENAME'", "'REPLACE'", "'RESTRICT'", "'RETURNING'", "'RIGHT'", 
        "'ROLLBACK'", "'ROW'", "'ROWS'", "'SAVEPOINT'", "'SELECT'", "'SET'", 
        "'TABLE'", "'TEMP'", "'TEMPORARY'", "'THEN'", "'TO'", "'TRANSACTION'", 
        "'TRIGGER'", "'UNION'", "'UNIQUE'", "'UPDATE'", "'USING'", "'VACUUM'", 
        "'VALUES'", "'VIEW'", "'VIRTUAL'", "'WHEN'", "'WHERE'", "'WITH'", 
        "'WITHOUT'", "'FIRST_VALUE'", "'OVER'", "'PARTITION'", "'RANGE'", 
        "'PRECEDING'", "'UNBOUNDED'", "'CURRENT'", "'FOLLOWING'", "'CUME_DIST'", 
        "'DENSE_RANK'", "'LAG'", "'LAST_VALUE'", "'LEAD'", "'NTH_VALUE'", 
        "'NTILE'", "'PERCENT_RANK'", "'RANK'", "'ROW_NUMBER'", "'GENERATED'", 
        "'ALWAYS'", "'STORED'", "'TRUE'", "'FALSE'", "'WINDOW'", "'NULLS'", 
        "'FIRST'", "'LAST'", "'FILTER'", "'GROUPS'", "'EXCLUDE'", "'TIES'", 
        "'OTHERS'", "'DO'", "'NOTHING'"
    ];

    public static readonly symbolicNames = [
        null, "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN", 
        "STAR", "PLUS", "MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2", 
        "GT2", "AMP", "PIPE", "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", 
        "NOT_EQ2", "ABORT_", "ACTION_", "ADD_", "AFTER_", "ALL_", "ALTER_", 
        "ANALYZE_", "AND_", "AS_", "ASC_", "ATTACH_", "AUTOINCREMENT_", 
        "BEFORE_", "BEGIN_", "BETWEEN_", "BY_", "CASCADE_", "CASE_", "CAST_", 
        "CHECK_", "COLLATE_", "COLUMN_", "COMMIT_", "CONFLICT_", "CONSTRAINT_", 
        "CREATE_", "CROSS_", "CURRENT_DATE_", "CURRENT_TIME_", "CURRENT_TIMESTAMP_", 
        "DATABASE_", "DEFAULT_", "DEFERRABLE_", "DEFERRED_", "DELETE_", 
        "DESC_", "DETACH_", "DISTINCT_", "DROP_", "EACH_", "ELSE_", "END_", 
        "ESCAPE_", "EXCEPT_", "EXCLUSIVE_", "EXISTS_", "EXPLAIN_", "FAIL_", 
        "FOR_", "FOREIGN_", "FROM_", "FULL_", "GLOB_", "GROUP_", "HAVING_", 
        "IF_", "IGNORE_", "IMMEDIATE_", "IN_", "INDEX_", "INDEXED_", "INITIALLY_", 
        "INNER_", "INSERT_", "INSTEAD_", "INTERSECT_", "INTO_", "IS_", "ISNULL_", 
        "JOIN_", "KEY_", "LEFT_", "LIKE_", "LIMIT_", "MATCH_", "NATURAL_", 
        "NO_", "NOT_", "NOTNULL_", "NULL_", "OF_", "OFFSET_", "ON_", "OR_", 
        "ORDER_", "OUTER_", "PLAN_", "PRAGMA_", "PRIMARY_", "QUERY_", "RAISE_", 
        "RECURSIVE_", "REFERENCES_", "REGEXP_", "REINDEX_", "RELEASE_", 
        "RENAME_", "REPLACE_", "RESTRICT_", "RETURNING_", "RIGHT_", "ROLLBACK_", 
        "ROW_", "ROWS_", "SAVEPOINT_", "SELECT_", "SET_", "TABLE_", "TEMP_", 
        "TEMPORARY_", "THEN_", "TO_", "TRANSACTION_", "TRIGGER_", "UNION_", 
        "UNIQUE_", "UPDATE_", "USING_", "VACUUM_", "VALUES_", "VIEW_", "VIRTUAL_", 
        "WHEN_", "WHERE_", "WITH_", "WITHOUT_", "FIRST_VALUE_", "OVER_", 
        "PARTITION_", "RANGE_", "PRECEDING_", "UNBOUNDED_", "CURRENT_", 
        "FOLLOWING_", "CUME_DIST_", "DENSE_RANK_", "LAG_", "LAST_VALUE_", 
        "LEAD_", "NTH_VALUE_", "NTILE_", "PERCENT_RANK_", "RANK_", "ROW_NUMBER_", 
        "GENERATED_", "ALWAYS_", "STORED_", "TRUE_", "FALSE_", "WINDOW_", 
        "NULLS_", "FIRST_", "LAST_", "FILTER_", "GROUPS_", "EXCLUDE_", "TIES_", 
        "OTHERS_", "DO_", "NOTHING_", "IDENTIFIER", "NUMERIC_LITERAL", "BIND_PARAMETER", 
        "STRING_LITERAL", "BLOB_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", 
        "SPACES", "UNEXPECTED_CHAR", "SEMI"
    ];
    public static readonly ruleNames = [
        "program", "singleStmt", "parse", "sql_stmt_list", "sql_stmt", "alter_table_stmt", 
        "analyze_stmt", "attach_stmt", "begin_stmt", "commit_stmt", "rollback_stmt", 
        "savepoint_stmt", "release_stmt", "create_index_stmt", "indexed_column", 
        "create_table_stmt", "column_def", "type_name", "column_constraint", 
        "signed_number", "table_constraint", "foreign_key_clause", "conflict_clause", 
        "create_trigger_stmt", "create_view_stmt", "create_virtual_table_stmt", 
        "with_clause", "cte_table_name", "recursive_cte", "common_table_expression", 
        "delete_stmt", "delete_stmt_limited", "detach_stmt", "drop_stmt", 
        "expr", "raise_function", "literal_value", "value_row", "values_clause", 
        "insert_stmt", "returning_clause", "upsert_clause", "pragma_stmt", 
        "pragma_value", "reindex_stmt", "select_stmt", "join_clause", "select_core", 
        "factored_select_stmt", "simple_select_stmt", "compound_select_stmt", 
        "table_or_subquery", "result_column", "join_operator", "join_constraint", 
        "compound_operator", "update_stmt", "column_name_list", "update_stmt_limited", 
        "qualified_table_name", "vacuum_stmt", "filter_clause", "window_defn", 
        "over_clause", "frame_spec", "frame_clause", "simple_function_invocation", 
        "aggregate_function_invocation", "window_function_invocation", "common_table_stmt", 
        "order_by_stmt", "limit_stmt", "ordering_term", "asc_desc", "frame_left", 
        "frame_right", "frame_single", "window_function", "offset", "default_value", 
        "partition_by", "order_by_expr", "order_by_expr_asc_desc", "expr_asc_desc", 
        "initial_select", "recursive_select", "unary_operator", "error_message", 
        "module_argument", "column_alias", "keyword", "name", "function_name", 
        "schema_name", "table_name", "table_or_index_name", "column_name", 
        "collation_name", "foreign_table", "index_name", "trigger_name", 
        "view_name", "module_name", "pragma_name", "savepoint_name", "table_alias", 
        "transaction_name", "window_name", "alias", "filename", "base_window_name", 
        "simple_func", "aggregate_func", "table_function_name", "any_name",
    ];

    public get grammarFileName(): string { return "SQLiteParser.g4"; }
    public get literalNames(): (string | null)[] { return SQLiteParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SQLiteParser.symbolicNames; }
    public get ruleNames(): string[] { return SQLiteParser.ruleNames; }
    public get serializedATN(): number[] { return SQLiteParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SQLiteParser._ATN, SQLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, SQLiteParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 233;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2499842057) !== 0) || _la === 71 || _la === 88 || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2684765569) !== 0) || _la === 144 || _la === 149) {
                {
                {
                this.state = 230;
                this.sql_stmt_list();
                }
                }
                this.state = 235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 236;
            this.match(SQLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleStmt(): SingleStmtContext {
        let localContext = new SingleStmtContext(this.context, this.state);
        this.enterRule(localContext, 2, SQLiteParser.RULE_singleStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.sql_stmt();
            this.state = 240;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 194) {
                {
                this.state = 239;
                this.match(SQLiteParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parse(): ParseContext {
        let localContext = new ParseContext(this.context, this.state);
        this.enterRule(localContext, 4, SQLiteParser.RULE_parse);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2499842057) !== 0) || _la === 71 || _la === 88 || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2684765569) !== 0) || _la === 144 || _la === 149) {
                {
                {
                this.state = 242;
                this.sql_stmt_list();
                }
                }
                this.state = 247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 248;
            this.match(SQLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sql_stmt_list(): Sql_stmt_listContext {
        let localContext = new Sql_stmt_listContext(this.context, this.state);
        this.enterRule(localContext, 6, SQLiteParser.RULE_sql_stmt_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 250;
                this.match(SQLiteParser.SCOL);
                }
                }
                this.state = 255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 256;
            this.sql_stmt();
            this.state = 265;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 258;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 257;
                        this.match(SQLiteParser.SCOL);
                        }
                        }
                        this.state = 260;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 1);
                    this.state = 262;
                    this.sql_stmt();
                    }
                    }
                }
                this.state = 267;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 271;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 268;
                    this.match(SQLiteParser.SCOL);
                    }
                    }
                }
                this.state = 273;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sql_stmt(): Sql_stmtContext {
        let localContext = new Sql_stmtContext(this.context, this.state);
        this.enterRule(localContext, 8, SQLiteParser.RULE_sql_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 274;
                this.match(SQLiteParser.EXPLAIN_);
                this.state = 277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 114) {
                    {
                    this.state = 275;
                    this.match(SQLiteParser.QUERY_);
                    this.state = 276;
                    this.match(SQLiteParser.PLAN_);
                    }
                }

                }
            }

            this.state = 305;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                {
                this.state = 281;
                this.alter_table_stmt();
                }
                break;
            case 2:
                {
                this.state = 282;
                this.analyze_stmt();
                }
                break;
            case 3:
                {
                this.state = 283;
                this.attach_stmt();
                }
                break;
            case 4:
                {
                this.state = 284;
                this.begin_stmt();
                }
                break;
            case 5:
                {
                this.state = 285;
                this.commit_stmt();
                }
                break;
            case 6:
                {
                this.state = 286;
                this.create_index_stmt();
                }
                break;
            case 7:
                {
                this.state = 287;
                this.create_table_stmt();
                }
                break;
            case 8:
                {
                this.state = 288;
                this.create_trigger_stmt();
                }
                break;
            case 9:
                {
                this.state = 289;
                this.create_view_stmt();
                }
                break;
            case 10:
                {
                this.state = 290;
                this.create_virtual_table_stmt();
                }
                break;
            case 11:
                {
                this.state = 291;
                this.delete_stmt();
                }
                break;
            case 12:
                {
                this.state = 292;
                this.delete_stmt_limited();
                }
                break;
            case 13:
                {
                this.state = 293;
                this.detach_stmt();
                }
                break;
            case 14:
                {
                this.state = 294;
                this.drop_stmt();
                }
                break;
            case 15:
                {
                this.state = 295;
                this.insert_stmt();
                }
                break;
            case 16:
                {
                this.state = 296;
                this.pragma_stmt();
                }
                break;
            case 17:
                {
                this.state = 297;
                this.reindex_stmt();
                }
                break;
            case 18:
                {
                this.state = 298;
                this.release_stmt();
                }
                break;
            case 19:
                {
                this.state = 299;
                this.rollback_stmt();
                }
                break;
            case 20:
                {
                this.state = 300;
                this.savepoint_stmt();
                }
                break;
            case 21:
                {
                this.state = 301;
                this.select_stmt();
                }
                break;
            case 22:
                {
                this.state = 302;
                this.update_stmt();
                }
                break;
            case 23:
                {
                this.state = 303;
                this.update_stmt_limited();
                }
                break;
            case 24:
                {
                this.state = 304;
                this.vacuum_stmt();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alter_table_stmt(): Alter_table_stmtContext {
        let localContext = new Alter_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, SQLiteParser.RULE_alter_table_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.match(SQLiteParser.ALTER_);
            this.state = 308;
            this.match(SQLiteParser.TABLE_);
            this.state = 312;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 309;
                this.schema_name();
                this.state = 310;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 314;
            this.table_name();
            this.state = 337;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.RENAME_:
                {
                this.state = 315;
                this.match(SQLiteParser.RENAME_);
                this.state = 325;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
                case 1:
                    {
                    this.state = 316;
                    this.match(SQLiteParser.TO_);
                    this.state = 317;
                    localContext._new_table_name = this.table_name();
                    }
                    break;
                case 2:
                    {
                    this.state = 319;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
                    case 1:
                        {
                        this.state = 318;
                        this.match(SQLiteParser.COLUMN_);
                        }
                        break;
                    }
                    this.state = 321;
                    localContext._old_column_name = this.column_name();
                    this.state = 322;
                    this.match(SQLiteParser.TO_);
                    this.state = 323;
                    localContext._new_column_name = this.column_name();
                    }
                    break;
                }
                }
                break;
            case SQLiteParser.ADD_:
                {
                this.state = 327;
                this.match(SQLiteParser.ADD_);
                this.state = 329;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
                case 1:
                    {
                    this.state = 328;
                    this.match(SQLiteParser.COLUMN_);
                    }
                    break;
                }
                this.state = 331;
                this.column_def();
                }
                break;
            case SQLiteParser.DROP_:
                {
                this.state = 332;
                this.match(SQLiteParser.DROP_);
                this.state = 334;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
                case 1:
                    {
                    this.state = 333;
                    this.match(SQLiteParser.COLUMN_);
                    }
                    break;
                }
                this.state = 336;
                this.column_name();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public analyze_stmt(): Analyze_stmtContext {
        let localContext = new Analyze_stmtContext(this.context, this.state);
        this.enterRule(localContext, 12, SQLiteParser.RULE_analyze_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 339;
            this.match(SQLiteParser.ANALYZE_);
            this.state = 347;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                {
                this.state = 340;
                this.schema_name();
                }
                break;
            case 2:
                {
                this.state = 344;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
                case 1:
                    {
                    this.state = 341;
                    this.schema_name();
                    this.state = 342;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 346;
                this.table_or_index_name();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attach_stmt(): Attach_stmtContext {
        let localContext = new Attach_stmtContext(this.context, this.state);
        this.enterRule(localContext, 14, SQLiteParser.RULE_attach_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 349;
            this.match(SQLiteParser.ATTACH_);
            this.state = 351;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                {
                this.state = 350;
                this.match(SQLiteParser.DATABASE_);
                }
                break;
            }
            this.state = 353;
            this.expr(0);
            this.state = 354;
            this.match(SQLiteParser.AS_);
            this.state = 355;
            this.schema_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public begin_stmt(): Begin_stmtContext {
        let localContext = new Begin_stmtContext(this.context, this.state);
        this.enterRule(localContext, 16, SQLiteParser.RULE_begin_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 357;
            this.match(SQLiteParser.BEGIN_);
            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 16779265) !== 0)) {
                {
                this.state = 358;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 16779265) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 365;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 137) {
                {
                this.state = 361;
                this.match(SQLiteParser.TRANSACTION_);
                this.state = 363;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                case 1:
                    {
                    this.state = 362;
                    this.transaction_name();
                    }
                    break;
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commit_stmt(): Commit_stmtContext {
        let localContext = new Commit_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, SQLiteParser.RULE_commit_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 367;
            _la = this.tokenStream.LA(1);
            if(!(_la === 47 || _la === 66)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 137) {
                {
                this.state = 368;
                this.match(SQLiteParser.TRANSACTION_);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rollback_stmt(): Rollback_stmtContext {
        let localContext = new Rollback_stmtContext(this.context, this.state);
        this.enterRule(localContext, 20, SQLiteParser.RULE_rollback_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 371;
            this.match(SQLiteParser.ROLLBACK_);
            this.state = 373;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 137) {
                {
                this.state = 372;
                this.match(SQLiteParser.TRANSACTION_);
                }
            }

            this.state = 380;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 375;
                this.match(SQLiteParser.TO_);
                this.state = 377;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
                case 1:
                    {
                    this.state = 376;
                    this.match(SQLiteParser.SAVEPOINT_);
                    }
                    break;
                }
                this.state = 379;
                this.savepoint_name();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public savepoint_stmt(): Savepoint_stmtContext {
        let localContext = new Savepoint_stmtContext(this.context, this.state);
        this.enterRule(localContext, 22, SQLiteParser.RULE_savepoint_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.match(SQLiteParser.SAVEPOINT_);
            this.state = 383;
            this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public release_stmt(): Release_stmtContext {
        let localContext = new Release_stmtContext(this.context, this.state);
        this.enterRule(localContext, 24, SQLiteParser.RULE_release_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.match(SQLiteParser.RELEASE_);
            this.state = 387;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 386;
                this.match(SQLiteParser.SAVEPOINT_);
                }
                break;
            }
            this.state = 389;
            this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_index_stmt(): Create_index_stmtContext {
        let localContext = new Create_index_stmtContext(this.context, this.state);
        this.enterRule(localContext, 26, SQLiteParser.RULE_create_index_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 391;
            this.match(SQLiteParser.CREATE_);
            this.state = 393;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 392;
                this.match(SQLiteParser.UNIQUE_);
                }
            }

            this.state = 395;
            this.match(SQLiteParser.INDEX_);
            this.state = 399;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                {
                this.state = 396;
                this.match(SQLiteParser.IF_);
                this.state = 397;
                this.match(SQLiteParser.NOT_);
                this.state = 398;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 404;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                {
                this.state = 401;
                this.schema_name();
                this.state = 402;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 406;
            this.index_name();
            this.state = 407;
            this.match(SQLiteParser.ON_);
            this.state = 408;
            this.table_name();
            this.state = 409;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 410;
            this.indexed_column();
            this.state = 415;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 411;
                this.match(SQLiteParser.COMMA);
                this.state = 412;
                this.indexed_column();
                }
                }
                this.state = 417;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 418;
            this.match(SQLiteParser.CLOSE_PAR);
            this.state = 421;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 419;
                this.match(SQLiteParser.WHERE_);
                this.state = 420;
                this.expr(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public indexed_column(): Indexed_columnContext {
        let localContext = new Indexed_columnContext(this.context, this.state);
        this.enterRule(localContext, 28, SQLiteParser.RULE_indexed_column);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 425;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 423;
                this.column_name();
                }
                break;
            case 2:
                {
                this.state = 424;
                this.expr(0);
                }
                break;
            }
            this.state = 429;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 427;
                this.match(SQLiteParser.COLLATE_);
                this.state = 428;
                this.collation_name();
                }
            }

            this.state = 432;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34 || _la === 60) {
                {
                this.state = 431;
                this.asc_desc();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_table_stmt(): Create_table_stmtContext {
        let localContext = new Create_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 30, SQLiteParser.RULE_create_table_stmt);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 434;
            this.match(SQLiteParser.CREATE_);
            this.state = 436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 133 || _la === 134) {
                {
                this.state = 435;
                _la = this.tokenStream.LA(1);
                if(!(_la === 133 || _la === 134)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 438;
            this.match(SQLiteParser.TABLE_);
            this.state = 442;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                {
                this.state = 439;
                this.match(SQLiteParser.IF_);
                this.state = 440;
                this.match(SQLiteParser.NOT_);
                this.state = 441;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 447;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                {
                this.state = 444;
                this.schema_name();
                this.state = 445;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 449;
            this.table_name();
            this.state = 473;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.OPEN_PAR:
                {
                this.state = 450;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 451;
                this.column_def();
                this.state = 456;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 452;
                        this.match(SQLiteParser.COMMA);
                        this.state = 453;
                        this.column_def();
                        }
                        }
                    }
                    this.state = 458;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                }
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 459;
                    this.match(SQLiteParser.COMMA);
                    this.state = 460;
                    this.table_constraint();
                    }
                    }
                    this.state = 465;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 466;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 469;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                    this.state = 467;
                    this.match(SQLiteParser.WITHOUT_);
                    this.state = 468;
                    localContext._row_ROW_ID = this.match(SQLiteParser.IDENTIFIER);
                    }
                }

                }
                break;
            case SQLiteParser.AS_:
                {
                this.state = 471;
                this.match(SQLiteParser.AS_);
                this.state = 472;
                this.select_stmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_def(): Column_defContext {
        let localContext = new Column_defContext(this.context, this.state);
        this.enterRule(localContext, 32, SQLiteParser.RULE_column_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 475;
            this.column_name();
            this.state = 477;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 476;
                this.type_name();
                }
                break;
            }
            this.state = 482;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8460289) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 34821) !== 0) || _la === 140 || _la === 169) {
                {
                {
                this.state = 479;
                this.column_constraint();
                }
                }
                this.state = 484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_name(): Type_nameContext {
        let localContext = new Type_nameContext(this.context, this.state);
        this.enterRule(localContext, 34, SQLiteParser.RULE_type_name);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 486;
            this.errorHandler.sync(this);
            alternative = 1 + 1;
            do {
                switch (alternative) {
                case 1 + 1:
                    {
                    {
                    this.state = 485;
                    this.name();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 488;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            } while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 500;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 490;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 491;
                this.signed_number();
                this.state = 492;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 2:
                {
                this.state = 494;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 495;
                this.signed_number();
                this.state = 496;
                this.match(SQLiteParser.COMMA);
                this.state = 497;
                this.signed_number();
                this.state = 498;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_constraint(): Column_constraintContext {
        let localContext = new Column_constraintContext(this.context, this.state);
        this.enterRule(localContext, 36, SQLiteParser.RULE_column_constraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 504;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 502;
                this.match(SQLiteParser.CONSTRAINT_);
                this.state = 503;
                this.name();
                }
            }

            this.state = 555;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.PRIMARY_:
                {
                {
                this.state = 506;
                this.match(SQLiteParser.PRIMARY_);
                this.state = 507;
                this.match(SQLiteParser.KEY_);
                this.state = 509;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34 || _la === 60) {
                    {
                    this.state = 508;
                    this.asc_desc();
                    }
                }

                this.state = 512;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 107) {
                    {
                    this.state = 511;
                    this.conflict_clause();
                    }
                }

                this.state = 515;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 36) {
                    {
                    this.state = 514;
                    this.match(SQLiteParser.AUTOINCREMENT_);
                    }
                }

                }
                }
                break;
            case SQLiteParser.NOT_:
            case SQLiteParser.NULL_:
            case SQLiteParser.UNIQUE_:
                {
                this.state = 522;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.NOT_:
                case SQLiteParser.NULL_:
                    {
                    this.state = 518;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 102) {
                        {
                        this.state = 517;
                        this.match(SQLiteParser.NOT_);
                        }
                    }

                    this.state = 520;
                    this.match(SQLiteParser.NULL_);
                    }
                    break;
                case SQLiteParser.UNIQUE_:
                    {
                    this.state = 521;
                    this.match(SQLiteParser.UNIQUE_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 525;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 107) {
                    {
                    this.state = 524;
                    this.conflict_clause();
                    }
                }

                }
                break;
            case SQLiteParser.CHECK_:
                {
                this.state = 527;
                this.match(SQLiteParser.CHECK_);
                this.state = 528;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 529;
                this.expr(0);
                this.state = 530;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.DEFAULT_:
                {
                this.state = 532;
                this.match(SQLiteParser.DEFAULT_);
                this.state = 539;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 533;
                    this.signed_number();
                    }
                    break;
                case 2:
                    {
                    this.state = 534;
                    this.literal_value();
                    }
                    break;
                case 3:
                    {
                    this.state = 535;
                    this.match(SQLiteParser.OPEN_PAR);
                    this.state = 536;
                    this.expr(0);
                    this.state = 537;
                    this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                }
                }
                break;
            case SQLiteParser.COLLATE_:
                {
                this.state = 541;
                this.match(SQLiteParser.COLLATE_);
                this.state = 542;
                this.collation_name();
                }
                break;
            case SQLiteParser.REFERENCES_:
                {
                this.state = 543;
                this.foreign_key_clause();
                }
                break;
            case SQLiteParser.AS_:
            case SQLiteParser.GENERATED_:
                {
                this.state = 546;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 169) {
                    {
                    this.state = 544;
                    this.match(SQLiteParser.GENERATED_);
                    this.state = 545;
                    this.match(SQLiteParser.ALWAYS_);
                    }
                }

                this.state = 548;
                this.match(SQLiteParser.AS_);
                this.state = 549;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 550;
                this.expr(0);
                this.state = 551;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 553;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 146 || _la === 171) {
                    {
                    this.state = 552;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 146 || _la === 171)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public signed_number(): Signed_numberContext {
        let localContext = new Signed_numberContext(this.context, this.state);
        this.enterRule(localContext, 38, SQLiteParser.RULE_signed_number);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 558;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8 || _la === 9) {
                {
                this.state = 557;
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 9)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 560;
            this.match(SQLiteParser.NUMERIC_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_constraint(): Table_constraintContext {
        let localContext = new Table_constraintContext(this.context, this.state);
        this.enterRule(localContext, 40, SQLiteParser.RULE_table_constraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 562;
                this.match(SQLiteParser.CONSTRAINT_);
                this.state = 563;
                this.name();
                }
            }

            this.state = 603;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.UNIQUE_:
                {
                this.state = 569;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.PRIMARY_:
                    {
                    this.state = 566;
                    this.match(SQLiteParser.PRIMARY_);
                    this.state = 567;
                    this.match(SQLiteParser.KEY_);
                    }
                    break;
                case SQLiteParser.UNIQUE_:
                    {
                    this.state = 568;
                    this.match(SQLiteParser.UNIQUE_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 571;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 572;
                this.indexed_column();
                this.state = 577;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 573;
                    this.match(SQLiteParser.COMMA);
                    this.state = 574;
                    this.indexed_column();
                    }
                    }
                    this.state = 579;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 580;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 107) {
                    {
                    this.state = 581;
                    this.conflict_clause();
                    }
                }

                }
                break;
            case SQLiteParser.CHECK_:
                {
                this.state = 584;
                this.match(SQLiteParser.CHECK_);
                this.state = 585;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 586;
                this.expr(0);
                this.state = 587;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.FOREIGN_:
                {
                this.state = 589;
                this.match(SQLiteParser.FOREIGN_);
                this.state = 590;
                this.match(SQLiteParser.KEY_);
                this.state = 591;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 592;
                this.column_name();
                this.state = 597;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 593;
                    this.match(SQLiteParser.COMMA);
                    this.state = 594;
                    this.column_name();
                    }
                    }
                    this.state = 599;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 600;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 601;
                this.foreign_key_clause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public foreign_key_clause(): Foreign_key_clauseContext {
        let localContext = new Foreign_key_clauseContext(this.context, this.state);
        this.enterRule(localContext, 42, SQLiteParser.RULE_foreign_key_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 605;
            this.match(SQLiteParser.REFERENCES_);
            this.state = 606;
            this.foreign_table();
            this.state = 618;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 607;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 608;
                this.column_name();
                this.state = 613;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 609;
                    this.match(SQLiteParser.COMMA);
                    this.state = 610;
                    this.column_name();
                    }
                    }
                    this.state = 615;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 616;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 99 || _la === 107) {
                {
                this.state = 632;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.ON_:
                    {
                    this.state = 620;
                    this.match(SQLiteParser.ON_);
                    this.state = 621;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 59 || _la === 141)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 628;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.SET_:
                        {
                        this.state = 622;
                        this.match(SQLiteParser.SET_);
                        this.state = 623;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 56 || _la === 104)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case SQLiteParser.CASCADE_:
                        {
                        this.state = 624;
                        this.match(SQLiteParser.CASCADE_);
                        }
                        break;
                    case SQLiteParser.RESTRICT_:
                        {
                        this.state = 625;
                        this.match(SQLiteParser.RESTRICT_);
                        }
                        break;
                    case SQLiteParser.NO_:
                        {
                        this.state = 626;
                        this.match(SQLiteParser.NO_);
                        this.state = 627;
                        this.match(SQLiteParser.ACTION_);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    break;
                case SQLiteParser.MATCH_:
                    {
                    this.state = 630;
                    this.match(SQLiteParser.MATCH_);
                    this.state = 631;
                    this.name();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 636;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 645;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                {
                this.state = 638;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102) {
                    {
                    this.state = 637;
                    this.match(SQLiteParser.NOT_);
                    }
                }

                this.state = 640;
                this.match(SQLiteParser.DEFERRABLE_);
                this.state = 643;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 86) {
                    {
                    this.state = 641;
                    this.match(SQLiteParser.INITIALLY_);
                    this.state = 642;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 58 || _la === 82)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conflict_clause(): Conflict_clauseContext {
        let localContext = new Conflict_clauseContext(this.context, this.state);
        this.enterRule(localContext, 44, SQLiteParser.RULE_conflict_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 647;
            this.match(SQLiteParser.ON_);
            this.state = 648;
            this.match(SQLiteParser.CONFLICT_);
            this.state = 649;
            _la = this.tokenStream.LA(1);
            if(!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_trigger_stmt(): Create_trigger_stmtContext {
        let localContext = new Create_trigger_stmtContext(this.context, this.state);
        this.enterRule(localContext, 46, SQLiteParser.RULE_create_trigger_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 651;
            this.match(SQLiteParser.CREATE_);
            this.state = 653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 133 || _la === 134) {
                {
                this.state = 652;
                _la = this.tokenStream.LA(1);
                if(!(_la === 133 || _la === 134)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 655;
            this.match(SQLiteParser.TRIGGER_);
            this.state = 659;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                {
                this.state = 656;
                this.match(SQLiteParser.IF_);
                this.state = 657;
                this.match(SQLiteParser.NOT_);
                this.state = 658;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 664;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 661;
                this.schema_name();
                this.state = 662;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 666;
            this.trigger_name();
            this.state = 671;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.BEFORE_:
                {
                this.state = 667;
                this.match(SQLiteParser.BEFORE_);
                }
                break;
            case SQLiteParser.AFTER_:
                {
                this.state = 668;
                this.match(SQLiteParser.AFTER_);
                }
                break;
            case SQLiteParser.INSTEAD_:
                {
                this.state = 669;
                this.match(SQLiteParser.INSTEAD_);
                this.state = 670;
                this.match(SQLiteParser.OF_);
                }
                break;
            case SQLiteParser.DELETE_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.UPDATE_:
                break;
            default:
                break;
            }
            this.state = 687;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.DELETE_:
                {
                this.state = 673;
                this.match(SQLiteParser.DELETE_);
                }
                break;
            case SQLiteParser.INSERT_:
                {
                this.state = 674;
                this.match(SQLiteParser.INSERT_);
                }
                break;
            case SQLiteParser.UPDATE_:
                {
                this.state = 675;
                this.match(SQLiteParser.UPDATE_);
                this.state = 685;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 105) {
                    {
                    this.state = 676;
                    this.match(SQLiteParser.OF_);
                    this.state = 677;
                    this.column_name();
                    this.state = 682;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 678;
                        this.match(SQLiteParser.COMMA);
                        this.state = 679;
                        this.column_name();
                        }
                        }
                        this.state = 684;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 689;
            this.match(SQLiteParser.ON_);
            this.state = 690;
            this.table_name();
            this.state = 694;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 691;
                this.match(SQLiteParser.FOR_);
                this.state = 692;
                this.match(SQLiteParser.EACH_);
                this.state = 693;
                this.match(SQLiteParser.ROW_);
                }
            }

            this.state = 698;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 147) {
                {
                this.state = 696;
                this.match(SQLiteParser.WHEN_);
                this.state = 697;
                this.expr(0);
                }
            }

            this.state = 700;
            this.match(SQLiteParser.BEGIN_);
            this.state = 709;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 705;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
                case 1:
                    {
                    this.state = 701;
                    this.update_stmt();
                    }
                    break;
                case 2:
                    {
                    this.state = 702;
                    this.insert_stmt();
                    }
                    break;
                case 3:
                    {
                    this.state = 703;
                    this.delete_stmt();
                    }
                    break;
                case 4:
                    {
                    this.state = 704;
                    this.select_stmt();
                    }
                    break;
                }
                this.state = 707;
                this.match(SQLiteParser.SCOL);
                }
                }
                this.state = 711;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 59 || _la === 88 || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 138936577) !== 0));
            this.state = 713;
            this.match(SQLiteParser.END_);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_view_stmt(): Create_view_stmtContext {
        let localContext = new Create_view_stmtContext(this.context, this.state);
        this.enterRule(localContext, 48, SQLiteParser.RULE_create_view_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 715;
            this.match(SQLiteParser.CREATE_);
            this.state = 717;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 133 || _la === 134) {
                {
                this.state = 716;
                _la = this.tokenStream.LA(1);
                if(!(_la === 133 || _la === 134)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 719;
            this.match(SQLiteParser.VIEW_);
            this.state = 723;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
            case 1:
                {
                this.state = 720;
                this.match(SQLiteParser.IF_);
                this.state = 721;
                this.match(SQLiteParser.NOT_);
                this.state = 722;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 728;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
            case 1:
                {
                this.state = 725;
                this.schema_name();
                this.state = 726;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 730;
            this.view_name();
            this.state = 742;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 731;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 732;
                this.column_name();
                this.state = 737;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 733;
                    this.match(SQLiteParser.COMMA);
                    this.state = 734;
                    this.column_name();
                    }
                    }
                    this.state = 739;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 740;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 744;
            this.match(SQLiteParser.AS_);
            this.state = 745;
            this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
        let localContext = new Create_virtual_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 50, SQLiteParser.RULE_create_virtual_table_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 747;
            this.match(SQLiteParser.CREATE_);
            this.state = 748;
            this.match(SQLiteParser.VIRTUAL_);
            this.state = 749;
            this.match(SQLiteParser.TABLE_);
            this.state = 753;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                {
                this.state = 750;
                this.match(SQLiteParser.IF_);
                this.state = 751;
                this.match(SQLiteParser.NOT_);
                this.state = 752;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 758;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
            case 1:
                {
                this.state = 755;
                this.schema_name();
                this.state = 756;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 760;
            this.table_name();
            this.state = 761;
            this.match(SQLiteParser.USING_);
            this.state = 762;
            this.module_name();
            this.state = 774;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 763;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 764;
                this.module_argument();
                this.state = 769;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 765;
                    this.match(SQLiteParser.COMMA);
                    this.state = 766;
                    this.module_argument();
                    }
                    }
                    this.state = 771;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 772;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public with_clause(): With_clauseContext {
        let localContext = new With_clauseContext(this.context, this.state);
        this.enterRule(localContext, 52, SQLiteParser.RULE_with_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            this.match(SQLiteParser.WITH_);
            this.state = 778;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                {
                this.state = 777;
                this.match(SQLiteParser.RECURSIVE_);
                }
                break;
            }
            this.state = 780;
            this.cte_table_name();
            this.state = 781;
            this.match(SQLiteParser.AS_);
            this.state = 782;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 783;
            this.select_stmt();
            this.state = 784;
            this.match(SQLiteParser.CLOSE_PAR);
            this.state = 794;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 785;
                this.match(SQLiteParser.COMMA);
                this.state = 786;
                this.cte_table_name();
                this.state = 787;
                this.match(SQLiteParser.AS_);
                this.state = 788;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 789;
                this.select_stmt();
                this.state = 790;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                }
                this.state = 796;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cte_table_name(): Cte_table_nameContext {
        let localContext = new Cte_table_nameContext(this.context, this.state);
        this.enterRule(localContext, 54, SQLiteParser.RULE_cte_table_name);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 797;
            this.table_name();
            this.state = 809;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 798;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 799;
                this.column_name();
                this.state = 804;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 800;
                    this.match(SQLiteParser.COMMA);
                    this.state = 801;
                    this.column_name();
                    }
                    }
                    this.state = 806;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 807;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recursive_cte(): Recursive_cteContext {
        let localContext = new Recursive_cteContext(this.context, this.state);
        this.enterRule(localContext, 56, SQLiteParser.RULE_recursive_cte);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 811;
            this.cte_table_name();
            this.state = 812;
            this.match(SQLiteParser.AS_);
            this.state = 813;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 814;
            this.initial_select();
            this.state = 815;
            this.match(SQLiteParser.UNION_);
            this.state = 817;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 816;
                this.match(SQLiteParser.ALL_);
                }
            }

            this.state = 819;
            this.recursive_select();
            this.state = 820;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public common_table_expression(): Common_table_expressionContext {
        let localContext = new Common_table_expressionContext(this.context, this.state);
        this.enterRule(localContext, 58, SQLiteParser.RULE_common_table_expression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 822;
            this.table_name();
            this.state = 834;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 823;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 824;
                this.column_name();
                this.state = 829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 825;
                    this.match(SQLiteParser.COMMA);
                    this.state = 826;
                    this.column_name();
                    }
                    }
                    this.state = 831;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 832;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 836;
            this.match(SQLiteParser.AS_);
            this.state = 837;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 838;
            this.select_stmt();
            this.state = 839;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public delete_stmt(): Delete_stmtContext {
        let localContext = new Delete_stmtContext(this.context, this.state);
        this.enterRule(localContext, 60, SQLiteParser.RULE_delete_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 842;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 841;
                this.with_clause();
                }
            }

            this.state = 844;
            this.match(SQLiteParser.DELETE_);
            this.state = 845;
            this.match(SQLiteParser.FROM_);
            this.state = 846;
            this.qualified_table_name();
            this.state = 849;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 847;
                this.match(SQLiteParser.WHERE_);
                this.state = 848;
                this.expr(0);
                }
            }

            this.state = 852;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
                {
                this.state = 851;
                this.returning_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public delete_stmt_limited(): Delete_stmt_limitedContext {
        let localContext = new Delete_stmt_limitedContext(this.context, this.state);
        this.enterRule(localContext, 62, SQLiteParser.RULE_delete_stmt_limited);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 855;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 854;
                this.with_clause();
                }
            }

            this.state = 857;
            this.match(SQLiteParser.DELETE_);
            this.state = 858;
            this.match(SQLiteParser.FROM_);
            this.state = 859;
            this.qualified_table_name();
            this.state = 862;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 860;
                this.match(SQLiteParser.WHERE_);
                this.state = 861;
                this.expr(0);
                }
            }

            this.state = 865;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
                {
                this.state = 864;
                this.returning_clause();
                }
            }

            this.state = 871;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98 || _la === 109) {
                {
                this.state = 868;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                    this.state = 867;
                    this.order_by_stmt();
                    }
                }

                this.state = 870;
                this.limit_stmt();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public detach_stmt(): Detach_stmtContext {
        let localContext = new Detach_stmtContext(this.context, this.state);
        this.enterRule(localContext, 64, SQLiteParser.RULE_detach_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 873;
            this.match(SQLiteParser.DETACH_);
            this.state = 875;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                {
                this.state = 874;
                this.match(SQLiteParser.DATABASE_);
                }
                break;
            }
            this.state = 877;
            this.schema_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drop_stmt(): Drop_stmtContext {
        let localContext = new Drop_stmtContext(this.context, this.state);
        this.enterRule(localContext, 66, SQLiteParser.RULE_drop_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 879;
            this.match(SQLiteParser.DROP_);
            this.state = 880;
            localContext._object = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 84 || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 8257) !== 0))) {
                localContext._object = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 883;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context) ) {
            case 1:
                {
                this.state = 881;
                this.match(SQLiteParser.IF_);
                this.state = 882;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 888;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context) ) {
            case 1:
                {
                this.state = 885;
                this.schema_name();
                this.state = 886;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 890;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 68;
        this.enterRecursionRule(localContext, 68, SQLiteParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 980;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
            case 1:
                {
                this.state = 893;
                this.literal_value();
                }
                break;
            case 2:
                {
                this.state = 894;
                this.match(SQLiteParser.BIND_PARAMETER);
                }
                break;
            case 3:
                {
                this.state = 903;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context) ) {
                case 1:
                    {
                    this.state = 898;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 110, this.context) ) {
                    case 1:
                        {
                        this.state = 895;
                        this.schema_name();
                        this.state = 896;
                        this.match(SQLiteParser.DOT);
                        }
                        break;
                    }
                    this.state = 900;
                    this.table_name();
                    this.state = 901;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 905;
                this.column_name();
                }
                break;
            case 4:
                {
                this.state = 906;
                this.unary_operator();
                this.state = 907;
                this.expr(21);
                }
                break;
            case 5:
                {
                this.state = 909;
                this.function_name();
                this.state = 910;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 923;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.OPEN_PAR:
                case SQLiteParser.PLUS:
                case SQLiteParser.MINUS:
                case SQLiteParser.TILDE:
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.ADD_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALL_:
                case SQLiteParser.ALTER_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.AND_:
                case SQLiteParser.AS_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.AUTOINCREMENT_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BETWEEN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CASE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.CHECK_:
                case SQLiteParser.COLLATE_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.COMMIT_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CONSTRAINT_:
                case SQLiteParser.CREATE_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFAULT_:
                case SQLiteParser.DEFERRABLE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DELETE_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DISTINCT_:
                case SQLiteParser.DROP_:
                case SQLiteParser.EACH_:
                case SQLiteParser.ELSE_:
                case SQLiteParser.END_:
                case SQLiteParser.ESCAPE_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXISTS_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FOREIGN_:
                case SQLiteParser.FROM_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUP_:
                case SQLiteParser.HAVING_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.IN_:
                case SQLiteParser.INDEX_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSERT_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.INTO_:
                case SQLiteParser.IS_:
                case SQLiteParser.ISNULL_:
                case SQLiteParser.JOIN_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.LIMIT_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NOT_:
                case SQLiteParser.NOTNULL_:
                case SQLiteParser.NULL_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.ON_:
                case SQLiteParser.OR_:
                case SQLiteParser.ORDER_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRIMARY_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REFERENCES_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.SELECT_:
                case SQLiteParser.SET_:
                case SQLiteParser.TABLE_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.THEN_:
                case SQLiteParser.TO_:
                case SQLiteParser.TRANSACTION_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.UNION_:
                case SQLiteParser.UNIQUE_:
                case SQLiteParser.UPDATE_:
                case SQLiteParser.USING_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VALUES_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WHEN_:
                case SQLiteParser.WHERE_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.FIRST_VALUE_:
                case SQLiteParser.OVER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.CUME_DIST_:
                case SQLiteParser.DENSE_RANK_:
                case SQLiteParser.LAG_:
                case SQLiteParser.LAST_VALUE_:
                case SQLiteParser.LEAD_:
                case SQLiteParser.NTH_VALUE_:
                case SQLiteParser.NTILE_:
                case SQLiteParser.PERCENT_RANK_:
                case SQLiteParser.RANK_:
                case SQLiteParser.ROW_NUMBER_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.STORED_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.WINDOW_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.LAST_:
                case SQLiteParser.FILTER_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.EXCLUDE_:
                case SQLiteParser.IDENTIFIER:
                case SQLiteParser.NUMERIC_LITERAL:
                case SQLiteParser.BIND_PARAMETER:
                case SQLiteParser.STRING_LITERAL:
                case SQLiteParser.BLOB_LITERAL:
                    {
                    {
                    this.state = 912;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 112, this.context) ) {
                    case 1:
                        {
                        this.state = 911;
                        this.match(SQLiteParser.DISTINCT_);
                        }
                        break;
                    }
                    this.state = 914;
                    this.expr(0);
                    this.state = 919;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 915;
                        this.match(SQLiteParser.COMMA);
                        this.state = 916;
                        this.expr(0);
                        }
                        }
                        this.state = 921;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    }
                    break;
                case SQLiteParser.STAR:
                    {
                    this.state = 922;
                    this.match(SQLiteParser.STAR);
                    }
                    break;
                case SQLiteParser.CLOSE_PAR:
                    break;
                default:
                    break;
                }
                this.state = 925;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 927;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
                case 1:
                    {
                    this.state = 926;
                    this.filter_clause();
                    }
                    break;
                }
                this.state = 930;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
                case 1:
                    {
                    this.state = 929;
                    this.over_clause();
                    }
                    break;
                }
                }
                break;
            case 6:
                {
                this.state = 932;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 933;
                this.expr(0);
                this.state = 938;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 934;
                    this.match(SQLiteParser.COMMA);
                    this.state = 935;
                    this.expr(0);
                    }
                    }
                    this.state = 940;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 941;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 7:
                {
                this.state = 943;
                this.match(SQLiteParser.CAST_);
                this.state = 944;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 945;
                this.expr(0);
                this.state = 946;
                this.match(SQLiteParser.AS_);
                this.state = 947;
                this.type_name();
                this.state = 948;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 8:
                {
                this.state = 954;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 102) {
                    {
                    this.state = 951;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 102) {
                        {
                        this.state = 950;
                        this.match(SQLiteParser.NOT_);
                        }
                    }

                    this.state = 953;
                    this.match(SQLiteParser.EXISTS_);
                    }
                }

                this.state = 956;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 957;
                this.select_stmt();
                this.state = 958;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 9:
                {
                this.state = 960;
                this.match(SQLiteParser.CASE_);
                this.state = 962;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
                case 1:
                    {
                    this.state = 961;
                    this.expr(0);
                    }
                    break;
                }
                this.state = 969;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 964;
                    this.match(SQLiteParser.WHEN_);
                    this.state = 965;
                    this.expr(0);
                    this.state = 966;
                    this.match(SQLiteParser.THEN_);
                    this.state = 967;
                    this.expr(0);
                    }
                    }
                    this.state = 971;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 147);
                this.state = 975;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 65) {
                    {
                    this.state = 973;
                    this.match(SQLiteParser.ELSE_);
                    this.state = 974;
                    this.expr(0);
                    }
                }

                this.state = 977;
                this.match(SQLiteParser.END_);
                }
                break;
            case 10:
                {
                this.state = 979;
                this.raise_function();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1107;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1105;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 982;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 983;
                        this.match(SQLiteParser.PIPE2);
                        this.state = 984;
                        this.expr(21);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 985;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 986;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 12416) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 987;
                        this.expr(20);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 988;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 989;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 8 || _la === 9)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 990;
                        this.expr(19);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 991;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 992;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 993;
                        this.expr(18);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 994;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 995;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 996;
                        this.expr(17);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 997;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1016;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context) ) {
                        case 1:
                            {
                            this.state = 998;
                            this.match(SQLiteParser.ASSIGN);
                            }
                            break;
                        case 2:
                            {
                            this.state = 999;
                            this.match(SQLiteParser.EQ);
                            }
                            break;
                        case 3:
                            {
                            this.state = 1000;
                            this.match(SQLiteParser.NOT_EQ1);
                            }
                            break;
                        case 4:
                            {
                            this.state = 1001;
                            this.match(SQLiteParser.NOT_EQ2);
                            }
                            break;
                        case 5:
                            {
                            this.state = 1002;
                            this.match(SQLiteParser.IS_);
                            }
                            break;
                        case 6:
                            {
                            this.state = 1003;
                            this.match(SQLiteParser.IS_);
                            this.state = 1004;
                            this.match(SQLiteParser.NOT_);
                            }
                            break;
                        case 7:
                            {
                            this.state = 1005;
                            this.match(SQLiteParser.IS_);
                            this.state = 1007;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 102) {
                                {
                                this.state = 1006;
                                this.match(SQLiteParser.NOT_);
                                }
                            }

                            this.state = 1009;
                            this.match(SQLiteParser.DISTINCT_);
                            this.state = 1010;
                            this.match(SQLiteParser.FROM_);
                            }
                            break;
                        case 8:
                            {
                            this.state = 1011;
                            this.match(SQLiteParser.IN_);
                            }
                            break;
                        case 9:
                            {
                            this.state = 1012;
                            this.match(SQLiteParser.LIKE_);
                            }
                            break;
                        case 10:
                            {
                            this.state = 1013;
                            this.match(SQLiteParser.GLOB_);
                            }
                            break;
                        case 11:
                            {
                            this.state = 1014;
                            this.match(SQLiteParser.MATCH_);
                            }
                            break;
                        case 12:
                            {
                            this.state = 1015;
                            this.match(SQLiteParser.REGEXP_);
                            }
                            break;
                        }
                        this.state = 1018;
                        this.expr(16);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1019;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1020;
                        this.match(SQLiteParser.AND_);
                        this.state = 1021;
                        this.expr(15);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1022;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1023;
                        this.match(SQLiteParser.OR_);
                        this.state = 1024;
                        this.expr(14);
                        }
                        break;
                    case 9:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1025;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1026;
                        this.match(SQLiteParser.IS_);
                        this.state = 1028;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
                        case 1:
                            {
                            this.state = 1027;
                            this.match(SQLiteParser.NOT_);
                            }
                            break;
                        }
                        this.state = 1030;
                        this.expr(7);
                        }
                        break;
                    case 10:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1031;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1033;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 102) {
                            {
                            this.state = 1032;
                            this.match(SQLiteParser.NOT_);
                            }
                        }

                        this.state = 1035;
                        this.match(SQLiteParser.BETWEEN_);
                        this.state = 1036;
                        this.expr(0);
                        this.state = 1037;
                        this.match(SQLiteParser.AND_);
                        this.state = 1038;
                        this.expr(6);
                        }
                        break;
                    case 11:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1040;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 1041;
                        this.match(SQLiteParser.COLLATE_);
                        this.state = 1042;
                        this.collation_name();
                        }
                        break;
                    case 12:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1043;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 1045;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 102) {
                            {
                            this.state = 1044;
                            this.match(SQLiteParser.NOT_);
                            }
                        }

                        this.state = 1047;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 5242881) !== 0) || _la === 118)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1048;
                        this.expr(0);
                        this.state = 1051;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
                        case 1:
                            {
                            this.state = 1049;
                            this.match(SQLiteParser.ESCAPE_);
                            this.state = 1050;
                            this.expr(0);
                            }
                            break;
                        }
                        }
                        break;
                    case 13:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1053;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1058;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case SQLiteParser.ISNULL_:
                            {
                            this.state = 1054;
                            this.match(SQLiteParser.ISNULL_);
                            }
                            break;
                        case SQLiteParser.NOTNULL_:
                            {
                            this.state = 1055;
                            this.match(SQLiteParser.NOTNULL_);
                            }
                            break;
                        case SQLiteParser.NOT_:
                            {
                            this.state = 1056;
                            this.match(SQLiteParser.NOT_);
                            this.state = 1057;
                            this.match(SQLiteParser.NULL_);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    case 14:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                        this.state = 1060;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1062;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 102) {
                            {
                            this.state = 1061;
                            this.match(SQLiteParser.NOT_);
                            }
                        }

                        this.state = 1064;
                        this.match(SQLiteParser.IN_);
                        this.state = 1103;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context) ) {
                        case 1:
                            {
                            this.state = 1065;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1075;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 133, this.context) ) {
                            case 1:
                                {
                                this.state = 1066;
                                this.select_stmt();
                                }
                                break;
                            case 2:
                                {
                                this.state = 1067;
                                this.expr(0);
                                this.state = 1072;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 5) {
                                    {
                                    {
                                    this.state = 1068;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1069;
                                    this.expr(0);
                                    }
                                    }
                                    this.state = 1074;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                                }
                                break;
                            }
                            this.state = 1077;
                            this.match(SQLiteParser.CLOSE_PAR);
                            }
                            break;
                        case 2:
                            {
                            this.state = 1081;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context) ) {
                            case 1:
                                {
                                this.state = 1078;
                                this.schema_name();
                                this.state = 1079;
                                this.match(SQLiteParser.DOT);
                                }
                                break;
                            }
                            this.state = 1083;
                            this.table_name();
                            }
                            break;
                        case 3:
                            {
                            this.state = 1087;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
                            case 1:
                                {
                                this.state = 1084;
                                this.schema_name();
                                this.state = 1085;
                                this.match(SQLiteParser.DOT);
                                }
                                break;
                            }
                            this.state = 1089;
                            this.table_function_name();
                            this.state = 1090;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1099;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0)) {
                                {
                                this.state = 1091;
                                this.expr(0);
                                this.state = 1096;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 5) {
                                    {
                                    {
                                    this.state = 1092;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1093;
                                    this.expr(0);
                                    }
                                    }
                                    this.state = 1098;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                                }
                            }

                            this.state = 1101;
                            this.match(SQLiteParser.CLOSE_PAR);
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1109;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public raise_function(): Raise_functionContext {
        let localContext = new Raise_functionContext(this.context, this.state);
        this.enterRule(localContext, 70, SQLiteParser.RULE_raise_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1110;
            this.match(SQLiteParser.RAISE_);
            this.state = 1111;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1116;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IGNORE_:
                {
                this.state = 1112;
                this.match(SQLiteParser.IGNORE_);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.ROLLBACK_:
                {
                this.state = 1113;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 72 || _la === 126)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1114;
                this.match(SQLiteParser.COMMA);
                this.state = 1115;
                this.error_message();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1118;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal_value(): Literal_valueContext {
        let localContext = new Literal_valueContext(this.context, this.state);
        this.enterRule(localContext, 72, SQLiteParser.RULE_literal_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1120;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 7) !== 0) || _la === 104 || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 212995) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public value_row(): Value_rowContext {
        let localContext = new Value_rowContext(this.context, this.state);
        this.enterRule(localContext, 74, SQLiteParser.RULE_value_row);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1122;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1123;
            this.expr(0);
            this.state = 1128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1124;
                this.match(SQLiteParser.COMMA);
                this.state = 1125;
                this.expr(0);
                }
                }
                this.state = 1130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1131;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public values_clause(): Values_clauseContext {
        let localContext = new Values_clauseContext(this.context, this.state);
        this.enterRule(localContext, 76, SQLiteParser.RULE_values_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1133;
            this.match(SQLiteParser.VALUES_);
            this.state = 1134;
            this.value_row();
            this.state = 1139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1135;
                this.match(SQLiteParser.COMMA);
                this.state = 1136;
                this.value_row();
                }
                }
                this.state = 1141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insert_stmt(): Insert_stmtContext {
        let localContext = new Insert_stmtContext(this.context, this.state);
        this.enterRule(localContext, 78, SQLiteParser.RULE_insert_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1143;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1142;
                this.with_clause();
                }
            }

            this.state = 1150;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context) ) {
            case 1:
                {
                this.state = 1145;
                this.match(SQLiteParser.INSERT_);
                }
                break;
            case 2:
                {
                this.state = 1146;
                this.match(SQLiteParser.REPLACE_);
                }
                break;
            case 3:
                {
                this.state = 1147;
                this.match(SQLiteParser.INSERT_);
                this.state = 1148;
                this.match(SQLiteParser.OR_);
                this.state = 1149;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1152;
            this.match(SQLiteParser.INTO_);
            this.state = 1156;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
            case 1:
                {
                this.state = 1153;
                this.schema_name();
                this.state = 1154;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 1158;
            this.table_name();
            this.state = 1161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 1159;
                this.match(SQLiteParser.AS_);
                this.state = 1160;
                this.table_alias();
                }
            }

            this.state = 1174;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 1163;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1164;
                this.column_name();
                this.state = 1169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1165;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1166;
                    this.column_name();
                    }
                    }
                    this.state = 1171;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1172;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 1185;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.SELECT_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.WITH_:
                {
                {
                this.state = 1178;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context) ) {
                case 1:
                    {
                    this.state = 1176;
                    this.values_clause();
                    }
                    break;
                case 2:
                    {
                    this.state = 1177;
                    this.select_stmt();
                    }
                    break;
                }
                this.state = 1181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 107) {
                    {
                    this.state = 1180;
                    this.upsert_clause();
                    }
                }

                }
                }
                break;
            case SQLiteParser.DEFAULT_:
                {
                this.state = 1183;
                this.match(SQLiteParser.DEFAULT_);
                this.state = 1184;
                this.match(SQLiteParser.VALUES_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1188;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
                {
                this.state = 1187;
                this.returning_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returning_clause(): Returning_clauseContext {
        let localContext = new Returning_clauseContext(this.context, this.state);
        this.enterRule(localContext, 80, SQLiteParser.RULE_returning_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1190;
            this.match(SQLiteParser.RETURNING_);
            this.state = 1191;
            this.result_column();
            this.state = 1196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1192;
                this.match(SQLiteParser.COMMA);
                this.state = 1193;
                this.result_column();
                }
                }
                this.state = 1198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public upsert_clause(): Upsert_clauseContext {
        let localContext = new Upsert_clauseContext(this.context, this.state);
        this.enterRule(localContext, 82, SQLiteParser.RULE_upsert_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1199;
            this.match(SQLiteParser.ON_);
            this.state = 1200;
            this.match(SQLiteParser.CONFLICT_);
            this.state = 1215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 1201;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1202;
                this.indexed_column();
                this.state = 1207;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1203;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1204;
                    this.indexed_column();
                    }
                    }
                    this.state = 1209;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1210;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1211;
                    this.match(SQLiteParser.WHERE_);
                    this.state = 1212;
                    this.expr(0);
                    }
                }

                }
            }

            this.state = 1217;
            this.match(SQLiteParser.DO_);
            this.state = 1244;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.NOTHING_:
                {
                this.state = 1218;
                this.match(SQLiteParser.NOTHING_);
                }
                break;
            case SQLiteParser.UPDATE_:
                {
                this.state = 1219;
                this.match(SQLiteParser.UPDATE_);
                this.state = 1220;
                this.match(SQLiteParser.SET_);
                {
                this.state = 1223;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context) ) {
                case 1:
                    {
                    this.state = 1221;
                    this.column_name();
                    }
                    break;
                case 2:
                    {
                    this.state = 1222;
                    this.column_name_list();
                    }
                    break;
                }
                this.state = 1225;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1226;
                this.expr(0);
                this.state = 1237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1227;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1230;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 159, this.context) ) {
                    case 1:
                        {
                        this.state = 1228;
                        this.column_name();
                        }
                        break;
                    case 2:
                        {
                        this.state = 1229;
                        this.column_name_list();
                        }
                        break;
                    }
                    this.state = 1232;
                    this.match(SQLiteParser.ASSIGN);
                    this.state = 1233;
                    this.expr(0);
                    }
                    }
                    this.state = 1239;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1242;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1240;
                    this.match(SQLiteParser.WHERE_);
                    this.state = 1241;
                    this.expr(0);
                    }
                }

                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragma_stmt(): Pragma_stmtContext {
        let localContext = new Pragma_stmtContext(this.context, this.state);
        this.enterRule(localContext, 84, SQLiteParser.RULE_pragma_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1246;
            this.match(SQLiteParser.PRAGMA_);
            this.state = 1250;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                {
                this.state = 1247;
                this.schema_name();
                this.state = 1248;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 1252;
            this.pragma_name();
            this.state = 1259;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ASSIGN:
                {
                this.state = 1253;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1254;
                this.pragma_value();
                }
                break;
            case SQLiteParser.OPEN_PAR:
                {
                this.state = 1255;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1256;
                this.pragma_value();
                this.state = 1257;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.EOF:
            case SQLiteParser.SCOL:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DROP_:
            case SQLiteParser.END_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.WITH_:
            case SQLiteParser.SEMI:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragma_value(): Pragma_valueContext {
        let localContext = new Pragma_valueContext(this.context, this.state);
        this.enterRule(localContext, 86, SQLiteParser.RULE_pragma_value);
        try {
            this.state = 1264;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1261;
                this.signed_number();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1262;
                this.name();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1263;
                this.match(SQLiteParser.STRING_LITERAL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reindex_stmt(): Reindex_stmtContext {
        let localContext = new Reindex_stmtContext(this.context, this.state);
        this.enterRule(localContext, 88, SQLiteParser.RULE_reindex_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1266;
            this.match(SQLiteParser.REINDEX_);
            this.state = 1277;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
            case 1:
                {
                this.state = 1267;
                this.collation_name();
                }
                break;
            case 2:
                {
                this.state = 1271;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
                case 1:
                    {
                    this.state = 1268;
                    this.schema_name();
                    this.state = 1269;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1275;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context) ) {
                case 1:
                    {
                    this.state = 1273;
                    this.table_name();
                    }
                    break;
                case 2:
                    {
                    this.state = 1274;
                    this.index_name();
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public select_stmt(): Select_stmtContext {
        let localContext = new Select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 90, SQLiteParser.RULE_select_stmt);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1280;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1279;
                this.common_table_stmt();
                }
            }

            this.state = 1282;
            this.select_core();
            this.state = 1288;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1283;
                    this.compound_operator();
                    this.state = 1284;
                    this.select_core();
                    }
                    }
                }
                this.state = 1290;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
            }
            this.state = 1292;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 1291;
                this.order_by_stmt();
                }
            }

            this.state = 1295;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98) {
                {
                this.state = 1294;
                this.limit_stmt();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_clause(): Join_clauseContext {
        let localContext = new Join_clauseContext(this.context, this.state);
        this.enterRule(localContext, 92, SQLiteParser.RULE_join_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1297;
            this.table_or_subquery();
            this.state = 1305;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5 || _la === 51 || _la === 76 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 8833) !== 0) || _la === 125) {
                {
                {
                this.state = 1298;
                this.join_operator();
                this.state = 1299;
                this.table_or_subquery();
                this.state = 1301;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 173, this.context) ) {
                case 1:
                    {
                    this.state = 1300;
                    this.join_constraint();
                    }
                    break;
                }
                }
                }
                this.state = 1307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public select_core(): Select_coreContext {
        let localContext = new Select_coreContext(this.context, this.state);
        this.enterRule(localContext, 94, SQLiteParser.RULE_select_core);
        let _la: number;
        try {
            this.state = 1371;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.SELECT_:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1308;
                this.match(SQLiteParser.SELECT_);
                this.state = 1310;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context) ) {
                case 1:
                    {
                    this.state = 1309;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 29 || _la === 62)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    break;
                }
                this.state = 1312;
                this.result_column();
                this.state = 1317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1313;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1314;
                    this.result_column();
                    }
                    }
                    this.state = 1319;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1332;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 75) {
                    {
                    this.state = 1320;
                    this.match(SQLiteParser.FROM_);
                    this.state = 1330;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 178, this.context) ) {
                    case 1:
                        {
                        this.state = 1321;
                        this.table_or_subquery();
                        this.state = 1326;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                            {
                            this.state = 1322;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1323;
                            this.table_or_subquery();
                            }
                            }
                            this.state = 1328;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                        break;
                    case 2:
                        {
                        this.state = 1329;
                        this.join_clause();
                        }
                        break;
                    }
                    }
                }

                this.state = 1336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1334;
                    this.match(SQLiteParser.WHERE_);
                    this.state = 1335;
                    localContext._whereExpr = this.expr(0);
                    }
                }

                this.state = 1352;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 78) {
                    {
                    this.state = 1338;
                    this.match(SQLiteParser.GROUP_);
                    this.state = 1339;
                    this.match(SQLiteParser.BY_);
                    this.state = 1340;
                    localContext._expr = this.expr(0);
                    localContext._groupByExpr.push(localContext._expr);
                    this.state = 1345;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1341;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1342;
                        localContext._expr = this.expr(0);
                        localContext._groupByExpr.push(localContext._expr);
                        }
                        }
                        this.state = 1347;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1350;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 79) {
                        {
                        this.state = 1348;
                        this.match(SQLiteParser.HAVING_);
                        this.state = 1349;
                        localContext._havingExpr = this.expr(0);
                        }
                    }

                    }
                }

                this.state = 1368;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 174) {
                    {
                    this.state = 1354;
                    this.match(SQLiteParser.WINDOW_);
                    this.state = 1355;
                    this.window_name();
                    this.state = 1356;
                    this.match(SQLiteParser.AS_);
                    this.state = 1357;
                    this.window_defn();
                    this.state = 1365;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1358;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1359;
                        this.window_name();
                        this.state = 1360;
                        this.match(SQLiteParser.AS_);
                        this.state = 1361;
                        this.window_defn();
                        }
                        }
                        this.state = 1367;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                }
                break;
            case SQLiteParser.VALUES_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1370;
                this.values_clause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public factored_select_stmt(): Factored_select_stmtContext {
        let localContext = new Factored_select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 96, SQLiteParser.RULE_factored_select_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1373;
            this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simple_select_stmt(): Simple_select_stmtContext {
        let localContext = new Simple_select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 98, SQLiteParser.RULE_simple_select_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1375;
                this.common_table_stmt();
                }
            }

            this.state = 1378;
            this.select_core();
            this.state = 1380;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 1379;
                this.order_by_stmt();
                }
            }

            this.state = 1383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98) {
                {
                this.state = 1382;
                this.limit_stmt();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compound_select_stmt(): Compound_select_stmtContext {
        let localContext = new Compound_select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 100, SQLiteParser.RULE_compound_select_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1386;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1385;
                this.common_table_stmt();
                }
            }

            this.state = 1388;
            this.select_core();
            this.state = 1398;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1395;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.UNION_:
                    {
                    this.state = 1389;
                    this.match(SQLiteParser.UNION_);
                    this.state = 1391;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 29) {
                        {
                        this.state = 1390;
                        this.match(SQLiteParser.ALL_);
                        }
                    }

                    }
                    break;
                case SQLiteParser.INTERSECT_:
                    {
                    this.state = 1393;
                    this.match(SQLiteParser.INTERSECT_);
                    }
                    break;
                case SQLiteParser.EXCEPT_:
                    {
                    this.state = 1394;
                    this.match(SQLiteParser.EXCEPT_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1397;
                this.select_core();
                }
                }
                this.state = 1400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 68 || _la === 90 || _la === 139);
            this.state = 1403;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 1402;
                this.order_by_stmt();
                }
            }

            this.state = 1406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98) {
                {
                this.state = 1405;
                this.limit_stmt();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_or_subquery(): Table_or_subqueryContext {
        let localContext = new Table_or_subqueryContext(this.context, this.state);
        this.enterRule(localContext, 102, SQLiteParser.RULE_table_or_subquery);
        let _la: number;
        try {
            this.state = 1472;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1411;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context) ) {
                case 1:
                    {
                    this.state = 1408;
                    this.schema_name();
                    this.state = 1409;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1413;
                this.table_name();
                this.state = 1418;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
                case 1:
                    {
                    this.state = 1415;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
                    case 1:
                        {
                        this.state = 1414;
                        this.match(SQLiteParser.AS_);
                        }
                        break;
                    }
                    this.state = 1417;
                    this.table_alias();
                    }
                    break;
                }
                this.state = 1425;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.INDEXED_:
                    {
                    this.state = 1420;
                    this.match(SQLiteParser.INDEXED_);
                    this.state = 1421;
                    this.match(SQLiteParser.BY_);
                    this.state = 1422;
                    this.index_name();
                    }
                    break;
                case SQLiteParser.NOT_:
                    {
                    this.state = 1423;
                    this.match(SQLiteParser.NOT_);
                    this.state = 1424;
                    this.match(SQLiteParser.INDEXED_);
                    }
                    break;
                case SQLiteParser.EOF:
                case SQLiteParser.SCOL:
                case SQLiteParser.CLOSE_PAR:
                case SQLiteParser.COMMA:
                case SQLiteParser.ALTER_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.COMMIT_:
                case SQLiteParser.CREATE_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.DELETE_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DROP_:
                case SQLiteParser.END_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GROUP_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSERT_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.JOIN_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIMIT_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.ON_:
                case SQLiteParser.ORDER_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RETURNING_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.SELECT_:
                case SQLiteParser.UNION_:
                case SQLiteParser.UPDATE_:
                case SQLiteParser.USING_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VALUES_:
                case SQLiteParser.WHERE_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WINDOW_:
                case SQLiteParser.SEMI:
                    break;
                default:
                    break;
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1430;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 200, this.context) ) {
                case 1:
                    {
                    this.state = 1427;
                    this.schema_name();
                    this.state = 1428;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1432;
                this.table_function_name();
                this.state = 1433;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1434;
                this.expr(0);
                this.state = 1439;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1435;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1436;
                    this.expr(0);
                    }
                    }
                    this.state = 1441;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1442;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1447;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context) ) {
                case 1:
                    {
                    this.state = 1444;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
                    case 1:
                        {
                        this.state = 1443;
                        this.match(SQLiteParser.AS_);
                        }
                        break;
                    }
                    this.state = 1446;
                    this.table_alias();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1449;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1459;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 205, this.context) ) {
                case 1:
                    {
                    this.state = 1450;
                    this.table_or_subquery();
                    this.state = 1455;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1451;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1452;
                        this.table_or_subquery();
                        }
                        }
                        this.state = 1457;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                case 2:
                    {
                    this.state = 1458;
                    this.join_clause();
                    }
                    break;
                }
                this.state = 1461;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1463;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1464;
                this.select_stmt();
                this.state = 1465;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1470;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
                case 1:
                    {
                    this.state = 1467;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 206, this.context) ) {
                    case 1:
                        {
                        this.state = 1466;
                        this.match(SQLiteParser.AS_);
                        }
                        break;
                    }
                    this.state = 1469;
                    this.table_alias();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public result_column(): Result_columnContext {
        let localContext = new Result_columnContext(this.context, this.state);
        this.enterRule(localContext, 104, SQLiteParser.RULE_result_column);
        let _la: number;
        try {
            this.state = 1486;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1474;
                this.match(SQLiteParser.STAR);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1475;
                this.table_name();
                this.state = 1476;
                this.match(SQLiteParser.DOT);
                this.state = 1477;
                this.match(SQLiteParser.STAR);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1479;
                this.expr(0);
                this.state = 1484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33 || _la === 185 || _la === 188) {
                    {
                    this.state = 1481;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 33) {
                        {
                        this.state = 1480;
                        this.match(SQLiteParser.AS_);
                        }
                    }

                    this.state = 1483;
                    this.column_alias();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_operator(): Join_operatorContext {
        let localContext = new Join_operatorContext(this.context, this.state);
        this.enterRule(localContext, 106, SQLiteParser.RULE_join_operator);
        let _la: number;
        try {
            this.state = 1501;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.COMMA:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1488;
                this.match(SQLiteParser.COMMA);
                }
                break;
            case SQLiteParser.CROSS_:
            case SQLiteParser.FULL_:
            case SQLiteParser.INNER_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.RIGHT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1490;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 1489;
                    this.match(SQLiteParser.NATURAL_);
                    }
                }

                this.state = 1498;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.FULL_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.RIGHT_:
                    {
                    this.state = 1492;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 76 || _la === 96 || _la === 125)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1494;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 110) {
                        {
                        this.state = 1493;
                        this.match(SQLiteParser.OUTER_);
                        }
                    }

                    }
                    break;
                case SQLiteParser.INNER_:
                    {
                    this.state = 1496;
                    this.match(SQLiteParser.INNER_);
                    }
                    break;
                case SQLiteParser.CROSS_:
                    {
                    this.state = 1497;
                    this.match(SQLiteParser.CROSS_);
                    }
                    break;
                case SQLiteParser.JOIN_:
                    break;
                default:
                    break;
                }
                this.state = 1500;
                this.match(SQLiteParser.JOIN_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_constraint(): Join_constraintContext {
        let localContext = new Join_constraintContext(this.context, this.state);
        this.enterRule(localContext, 108, SQLiteParser.RULE_join_constraint);
        let _la: number;
        try {
            this.state = 1517;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ON_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1503;
                this.match(SQLiteParser.ON_);
                this.state = 1504;
                this.expr(0);
                }
                break;
            case SQLiteParser.USING_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1505;
                this.match(SQLiteParser.USING_);
                this.state = 1506;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1507;
                this.column_name();
                this.state = 1512;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1508;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1509;
                    this.column_name();
                    }
                    }
                    this.state = 1514;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1515;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compound_operator(): Compound_operatorContext {
        let localContext = new Compound_operatorContext(this.context, this.state);
        this.enterRule(localContext, 110, SQLiteParser.RULE_compound_operator);
        let _la: number;
        try {
            this.state = 1525;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.UNION_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1519;
                this.match(SQLiteParser.UNION_);
                this.state = 1521;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29) {
                    {
                    this.state = 1520;
                    this.match(SQLiteParser.ALL_);
                    }
                }

                }
                break;
            case SQLiteParser.INTERSECT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1523;
                this.match(SQLiteParser.INTERSECT_);
                }
                break;
            case SQLiteParser.EXCEPT_:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1524;
                this.match(SQLiteParser.EXCEPT_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public update_stmt(): Update_stmtContext {
        let localContext = new Update_stmtContext(this.context, this.state);
        this.enterRule(localContext, 112, SQLiteParser.RULE_update_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1528;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1527;
                this.with_clause();
                }
            }

            this.state = 1530;
            this.match(SQLiteParser.UPDATE_);
            this.state = 1533;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 221, this.context) ) {
            case 1:
                {
                this.state = 1531;
                this.match(SQLiteParser.OR_);
                this.state = 1532;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1535;
            this.qualified_table_name();
            this.state = 1536;
            this.match(SQLiteParser.SET_);
            this.state = 1539;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 222, this.context) ) {
            case 1:
                {
                this.state = 1537;
                this.column_name();
                }
                break;
            case 2:
                {
                this.state = 1538;
                this.column_name_list();
                }
                break;
            }
            this.state = 1541;
            this.match(SQLiteParser.ASSIGN);
            this.state = 1542;
            this.expr(0);
            this.state = 1553;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1543;
                this.match(SQLiteParser.COMMA);
                this.state = 1546;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 223, this.context) ) {
                case 1:
                    {
                    this.state = 1544;
                    this.column_name();
                    }
                    break;
                case 2:
                    {
                    this.state = 1545;
                    this.column_name_list();
                    }
                    break;
                }
                this.state = 1548;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1549;
                this.expr(0);
                }
                }
                this.state = 1555;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1568;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 75) {
                {
                this.state = 1556;
                this.match(SQLiteParser.FROM_);
                this.state = 1566;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 226, this.context) ) {
                case 1:
                    {
                    this.state = 1557;
                    this.table_or_subquery();
                    this.state = 1562;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1558;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1559;
                        this.table_or_subquery();
                        }
                        }
                        this.state = 1564;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                case 2:
                    {
                    this.state = 1565;
                    this.join_clause();
                    }
                    break;
                }
                }
            }

            this.state = 1572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 1570;
                this.match(SQLiteParser.WHERE_);
                this.state = 1571;
                this.expr(0);
                }
            }

            this.state = 1575;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
                {
                this.state = 1574;
                this.returning_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_name_list(): Column_name_listContext {
        let localContext = new Column_name_listContext(this.context, this.state);
        this.enterRule(localContext, 114, SQLiteParser.RULE_column_name_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1577;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1578;
            this.column_name();
            this.state = 1583;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1579;
                this.match(SQLiteParser.COMMA);
                this.state = 1580;
                this.column_name();
                }
                }
                this.state = 1585;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1586;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public update_stmt_limited(): Update_stmt_limitedContext {
        let localContext = new Update_stmt_limitedContext(this.context, this.state);
        this.enterRule(localContext, 116, SQLiteParser.RULE_update_stmt_limited);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1589;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1588;
                this.with_clause();
                }
            }

            this.state = 1591;
            this.match(SQLiteParser.UPDATE_);
            this.state = 1594;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
            case 1:
                {
                this.state = 1592;
                this.match(SQLiteParser.OR_);
                this.state = 1593;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1596;
            this.qualified_table_name();
            this.state = 1597;
            this.match(SQLiteParser.SET_);
            this.state = 1600;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 233, this.context) ) {
            case 1:
                {
                this.state = 1598;
                this.column_name();
                }
                break;
            case 2:
                {
                this.state = 1599;
                this.column_name_list();
                }
                break;
            }
            this.state = 1602;
            this.match(SQLiteParser.ASSIGN);
            this.state = 1603;
            this.expr(0);
            this.state = 1614;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1604;
                this.match(SQLiteParser.COMMA);
                this.state = 1607;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 234, this.context) ) {
                case 1:
                    {
                    this.state = 1605;
                    this.column_name();
                    }
                    break;
                case 2:
                    {
                    this.state = 1606;
                    this.column_name_list();
                    }
                    break;
                }
                this.state = 1609;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1610;
                this.expr(0);
                }
                }
                this.state = 1616;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1619;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 1617;
                this.match(SQLiteParser.WHERE_);
                this.state = 1618;
                this.expr(0);
                }
            }

            this.state = 1622;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
                {
                this.state = 1621;
                this.returning_clause();
                }
            }

            this.state = 1628;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98 || _la === 109) {
                {
                this.state = 1625;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                    this.state = 1624;
                    this.order_by_stmt();
                    }
                }

                this.state = 1627;
                this.limit_stmt();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        let localContext = new Qualified_table_nameContext(this.context, this.state);
        this.enterRule(localContext, 118, SQLiteParser.RULE_qualified_table_name);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1633;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 240, this.context) ) {
            case 1:
                {
                this.state = 1630;
                this.schema_name();
                this.state = 1631;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 1635;
            this.table_name();
            this.state = 1638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 1636;
                this.match(SQLiteParser.AS_);
                this.state = 1637;
                this.alias();
                }
            }

            this.state = 1645;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.INDEXED_:
                {
                this.state = 1640;
                this.match(SQLiteParser.INDEXED_);
                this.state = 1641;
                this.match(SQLiteParser.BY_);
                this.state = 1642;
                this.index_name();
                }
                break;
            case SQLiteParser.NOT_:
                {
                this.state = 1643;
                this.match(SQLiteParser.NOT_);
                this.state = 1644;
                this.match(SQLiteParser.INDEXED_);
                }
                break;
            case SQLiteParser.EOF:
            case SQLiteParser.SCOL:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DROP_:
            case SQLiteParser.END_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RETURNING_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WITH_:
            case SQLiteParser.SEMI:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vacuum_stmt(): Vacuum_stmtContext {
        let localContext = new Vacuum_stmtContext(this.context, this.state);
        this.enterRule(localContext, 120, SQLiteParser.RULE_vacuum_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1647;
            this.match(SQLiteParser.VACUUM_);
            this.state = 1649;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                {
                this.state = 1648;
                this.schema_name();
                }
                break;
            }
            this.state = 1653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91) {
                {
                this.state = 1651;
                this.match(SQLiteParser.INTO_);
                this.state = 1652;
                this.filename();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filter_clause(): Filter_clauseContext {
        let localContext = new Filter_clauseContext(this.context, this.state);
        this.enterRule(localContext, 122, SQLiteParser.RULE_filter_clause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1655;
            this.match(SQLiteParser.FILTER_);
            this.state = 1656;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1657;
            this.match(SQLiteParser.WHERE_);
            this.state = 1658;
            this.expr(0);
            this.state = 1659;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public window_defn(): Window_defnContext {
        let localContext = new Window_defnContext(this.context, this.state);
        this.enterRule(localContext, 124, SQLiteParser.RULE_window_defn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1661;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1663;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context) ) {
            case 1:
                {
                this.state = 1662;
                this.base_window_name();
                }
                break;
            }
            this.state = 1675;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 153) {
                {
                this.state = 1665;
                this.match(SQLiteParser.PARTITION_);
                this.state = 1666;
                this.match(SQLiteParser.BY_);
                this.state = 1667;
                this.expr(0);
                this.state = 1672;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1668;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1669;
                    this.expr(0);
                    }
                    }
                    this.state = 1674;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            {
            this.state = 1677;
            this.match(SQLiteParser.ORDER_);
            this.state = 1678;
            this.match(SQLiteParser.BY_);
            this.state = 1679;
            this.ordering_term();
            this.state = 1684;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1680;
                this.match(SQLiteParser.COMMA);
                this.state = 1681;
                this.ordering_term();
                }
                }
                this.state = 1686;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 1688;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 128 || _la === 154 || _la === 179) {
                {
                this.state = 1687;
                this.frame_spec();
                }
            }

            this.state = 1690;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public over_clause(): Over_clauseContext {
        let localContext = new Over_clauseContext(this.context, this.state);
        this.enterRule(localContext, 126, SQLiteParser.RULE_over_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1692;
            this.match(SQLiteParser.OVER_);
            this.state = 1726;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 256, this.context) ) {
            case 1:
                {
                this.state = 1693;
                this.window_name();
                }
                break;
            case 2:
                {
                this.state = 1694;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1696;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 250, this.context) ) {
                case 1:
                    {
                    this.state = 1695;
                    this.base_window_name();
                    }
                    break;
                }
                this.state = 1708;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1698;
                    this.match(SQLiteParser.PARTITION_);
                    this.state = 1699;
                    this.match(SQLiteParser.BY_);
                    this.state = 1700;
                    this.expr(0);
                    this.state = 1705;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1701;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1702;
                        this.expr(0);
                        }
                        }
                        this.state = 1707;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1720;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                    this.state = 1710;
                    this.match(SQLiteParser.ORDER_);
                    this.state = 1711;
                    this.match(SQLiteParser.BY_);
                    this.state = 1712;
                    this.ordering_term();
                    this.state = 1717;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1713;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1714;
                        this.ordering_term();
                        }
                        }
                        this.state = 1719;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1723;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128 || _la === 154 || _la === 179) {
                    {
                    this.state = 1722;
                    this.frame_spec();
                    }
                }

                this.state = 1725;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_spec(): Frame_specContext {
        let localContext = new Frame_specContext(this.context, this.state);
        this.enterRule(localContext, 128, SQLiteParser.RULE_frame_spec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1728;
            this.frame_clause();
            this.state = 1738;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 180) {
                {
                this.state = 1729;
                this.match(SQLiteParser.EXCLUDE_);
                this.state = 1736;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.NO_:
                    {
                    this.state = 1730;
                    this.match(SQLiteParser.NO_);
                    this.state = 1731;
                    this.match(SQLiteParser.OTHERS_);
                    }
                    break;
                case SQLiteParser.CURRENT_:
                    {
                    this.state = 1732;
                    this.match(SQLiteParser.CURRENT_);
                    this.state = 1733;
                    this.match(SQLiteParser.ROW_);
                    }
                    break;
                case SQLiteParser.GROUP_:
                    {
                    this.state = 1734;
                    this.match(SQLiteParser.GROUP_);
                    }
                    break;
                case SQLiteParser.TIES_:
                    {
                    this.state = 1735;
                    this.match(SQLiteParser.TIES_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_clause(): Frame_clauseContext {
        let localContext = new Frame_clauseContext(this.context, this.state);
        this.enterRule(localContext, 130, SQLiteParser.RULE_frame_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1740;
            _la = this.tokenStream.LA(1);
            if(!(_la === 128 || _la === 154 || _la === 179)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1747;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 259, this.context) ) {
            case 1:
                {
                this.state = 1741;
                this.frame_single();
                }
                break;
            case 2:
                {
                this.state = 1742;
                this.match(SQLiteParser.BETWEEN_);
                this.state = 1743;
                this.frame_left();
                this.state = 1744;
                this.match(SQLiteParser.AND_);
                this.state = 1745;
                this.frame_right();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simple_function_invocation(): Simple_function_invocationContext {
        let localContext = new Simple_function_invocationContext(this.context, this.state);
        this.enterRule(localContext, 132, SQLiteParser.RULE_simple_function_invocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1749;
            this.simple_func();
            this.state = 1750;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1760;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.OPEN_PAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.ADD_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALL_:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.AND_:
            case SQLiteParser.AS_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.AUTOINCREMENT_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BETWEEN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.CHECK_:
            case SQLiteParser.COLLATE_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CONSTRAINT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFAULT_:
            case SQLiteParser.DEFERRABLE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DISTINCT_:
            case SQLiteParser.DROP_:
            case SQLiteParser.EACH_:
            case SQLiteParser.ELSE_:
            case SQLiteParser.END_:
            case SQLiteParser.ESCAPE_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FOREIGN_:
            case SQLiteParser.FROM_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUP_:
            case SQLiteParser.HAVING_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.IN_:
            case SQLiteParser.INDEX_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.INTO_:
            case SQLiteParser.IS_:
            case SQLiteParser.ISNULL_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NOTNULL_:
            case SQLiteParser.NULL_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.ON_:
            case SQLiteParser.OR_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REFERENCES_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.TABLE_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.THEN_:
            case SQLiteParser.TO_:
            case SQLiteParser.TRANSACTION_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.UNION_:
            case SQLiteParser.UNIQUE_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.USING_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WHEN_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.FIRST_VALUE_:
            case SQLiteParser.OVER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.CUME_DIST_:
            case SQLiteParser.DENSE_RANK_:
            case SQLiteParser.LAG_:
            case SQLiteParser.LAST_VALUE_:
            case SQLiteParser.LEAD_:
            case SQLiteParser.NTH_VALUE_:
            case SQLiteParser.NTILE_:
            case SQLiteParser.PERCENT_RANK_:
            case SQLiteParser.RANK_:
            case SQLiteParser.ROW_NUMBER_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.STORED_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.WINDOW_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.LAST_:
            case SQLiteParser.FILTER_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
                {
                this.state = 1751;
                this.expr(0);
                this.state = 1756;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1752;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1753;
                    this.expr(0);
                    }
                    }
                    this.state = 1758;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case SQLiteParser.STAR:
                {
                this.state = 1759;
                this.match(SQLiteParser.STAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1762;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregate_function_invocation(): Aggregate_function_invocationContext {
        let localContext = new Aggregate_function_invocationContext(this.context, this.state);
        this.enterRule(localContext, 134, SQLiteParser.RULE_aggregate_function_invocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1764;
            this.aggregate_func();
            this.state = 1765;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1778;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.OPEN_PAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.ADD_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALL_:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.AND_:
            case SQLiteParser.AS_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.AUTOINCREMENT_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BETWEEN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.CHECK_:
            case SQLiteParser.COLLATE_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CONSTRAINT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFAULT_:
            case SQLiteParser.DEFERRABLE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DISTINCT_:
            case SQLiteParser.DROP_:
            case SQLiteParser.EACH_:
            case SQLiteParser.ELSE_:
            case SQLiteParser.END_:
            case SQLiteParser.ESCAPE_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FOREIGN_:
            case SQLiteParser.FROM_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUP_:
            case SQLiteParser.HAVING_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.IN_:
            case SQLiteParser.INDEX_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.INTO_:
            case SQLiteParser.IS_:
            case SQLiteParser.ISNULL_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NOTNULL_:
            case SQLiteParser.NULL_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.ON_:
            case SQLiteParser.OR_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REFERENCES_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.TABLE_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.THEN_:
            case SQLiteParser.TO_:
            case SQLiteParser.TRANSACTION_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.UNION_:
            case SQLiteParser.UNIQUE_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.USING_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WHEN_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.FIRST_VALUE_:
            case SQLiteParser.OVER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.CUME_DIST_:
            case SQLiteParser.DENSE_RANK_:
            case SQLiteParser.LAG_:
            case SQLiteParser.LAST_VALUE_:
            case SQLiteParser.LEAD_:
            case SQLiteParser.NTH_VALUE_:
            case SQLiteParser.NTILE_:
            case SQLiteParser.PERCENT_RANK_:
            case SQLiteParser.RANK_:
            case SQLiteParser.ROW_NUMBER_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.STORED_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.WINDOW_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.LAST_:
            case SQLiteParser.FILTER_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
                {
                this.state = 1767;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context) ) {
                case 1:
                    {
                    this.state = 1766;
                    this.match(SQLiteParser.DISTINCT_);
                    }
                    break;
                }
                this.state = 1769;
                this.expr(0);
                this.state = 1774;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1770;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1771;
                    this.expr(0);
                    }
                    }
                    this.state = 1776;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case SQLiteParser.STAR:
                {
                this.state = 1777;
                this.match(SQLiteParser.STAR);
                }
                break;
            case SQLiteParser.CLOSE_PAR:
                break;
            default:
                break;
            }
            this.state = 1780;
            this.match(SQLiteParser.CLOSE_PAR);
            this.state = 1782;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 178) {
                {
                this.state = 1781;
                this.filter_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public window_function_invocation(): Window_function_invocationContext {
        let localContext = new Window_function_invocationContext(this.context, this.state);
        this.enterRule(localContext, 136, SQLiteParser.RULE_window_function_invocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1784;
            this.window_function();
            this.state = 1785;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1795;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.OPEN_PAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.ADD_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALL_:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.AND_:
            case SQLiteParser.AS_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.AUTOINCREMENT_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BETWEEN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.CHECK_:
            case SQLiteParser.COLLATE_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CONSTRAINT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFAULT_:
            case SQLiteParser.DEFERRABLE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DISTINCT_:
            case SQLiteParser.DROP_:
            case SQLiteParser.EACH_:
            case SQLiteParser.ELSE_:
            case SQLiteParser.END_:
            case SQLiteParser.ESCAPE_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FOREIGN_:
            case SQLiteParser.FROM_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUP_:
            case SQLiteParser.HAVING_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.IN_:
            case SQLiteParser.INDEX_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.INTO_:
            case SQLiteParser.IS_:
            case SQLiteParser.ISNULL_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NOTNULL_:
            case SQLiteParser.NULL_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.ON_:
            case SQLiteParser.OR_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REFERENCES_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.TABLE_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.THEN_:
            case SQLiteParser.TO_:
            case SQLiteParser.TRANSACTION_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.UNION_:
            case SQLiteParser.UNIQUE_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.USING_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WHEN_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.FIRST_VALUE_:
            case SQLiteParser.OVER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.CUME_DIST_:
            case SQLiteParser.DENSE_RANK_:
            case SQLiteParser.LAG_:
            case SQLiteParser.LAST_VALUE_:
            case SQLiteParser.LEAD_:
            case SQLiteParser.NTH_VALUE_:
            case SQLiteParser.NTILE_:
            case SQLiteParser.PERCENT_RANK_:
            case SQLiteParser.RANK_:
            case SQLiteParser.ROW_NUMBER_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.STORED_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.WINDOW_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.LAST_:
            case SQLiteParser.FILTER_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
                {
                this.state = 1786;
                this.expr(0);
                this.state = 1791;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1787;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1788;
                    this.expr(0);
                    }
                    }
                    this.state = 1793;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case SQLiteParser.STAR:
                {
                this.state = 1794;
                this.match(SQLiteParser.STAR);
                }
                break;
            case SQLiteParser.CLOSE_PAR:
                break;
            default:
                break;
            }
            this.state = 1797;
            this.match(SQLiteParser.CLOSE_PAR);
            this.state = 1799;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 178) {
                {
                this.state = 1798;
                this.filter_clause();
                }
            }

            this.state = 1801;
            this.match(SQLiteParser.OVER_);
            this.state = 1804;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                {
                this.state = 1802;
                this.window_defn();
                }
                break;
            case 2:
                {
                this.state = 1803;
                this.window_name();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public common_table_stmt(): Common_table_stmtContext {
        let localContext = new Common_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 138, SQLiteParser.RULE_common_table_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1806;
            this.match(SQLiteParser.WITH_);
            this.state = 1808;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 270, this.context) ) {
            case 1:
                {
                this.state = 1807;
                this.match(SQLiteParser.RECURSIVE_);
                }
                break;
            }
            this.state = 1810;
            this.common_table_expression();
            this.state = 1815;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1811;
                this.match(SQLiteParser.COMMA);
                this.state = 1812;
                this.common_table_expression();
                }
                }
                this.state = 1817;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public order_by_stmt(): Order_by_stmtContext {
        let localContext = new Order_by_stmtContext(this.context, this.state);
        this.enterRule(localContext, 140, SQLiteParser.RULE_order_by_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1818;
            this.match(SQLiteParser.ORDER_);
            this.state = 1819;
            this.match(SQLiteParser.BY_);
            this.state = 1820;
            this.ordering_term();
            this.state = 1825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1821;
                this.match(SQLiteParser.COMMA);
                this.state = 1822;
                this.ordering_term();
                }
                }
                this.state = 1827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limit_stmt(): Limit_stmtContext {
        let localContext = new Limit_stmtContext(this.context, this.state);
        this.enterRule(localContext, 142, SQLiteParser.RULE_limit_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1828;
            this.match(SQLiteParser.LIMIT_);
            this.state = 1829;
            this.expr(0);
            this.state = 1832;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5 || _la === 106) {
                {
                this.state = 1830;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 106)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1831;
                this.expr(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ordering_term(): Ordering_termContext {
        let localContext = new Ordering_termContext(this.context, this.state);
        this.enterRule(localContext, 144, SQLiteParser.RULE_ordering_term);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1834;
            this.expr(0);
            this.state = 1837;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 1835;
                this.match(SQLiteParser.COLLATE_);
                this.state = 1836;
                this.collation_name();
                }
            }

            this.state = 1840;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34 || _la === 60) {
                {
                this.state = 1839;
                this.asc_desc();
                }
            }

            this.state = 1844;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 175) {
                {
                this.state = 1842;
                this.match(SQLiteParser.NULLS_);
                this.state = 1843;
                _la = this.tokenStream.LA(1);
                if(!(_la === 176 || _la === 177)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public asc_desc(): Asc_descContext {
        let localContext = new Asc_descContext(this.context, this.state);
        this.enterRule(localContext, 146, SQLiteParser.RULE_asc_desc);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1846;
            _la = this.tokenStream.LA(1);
            if(!(_la === 34 || _la === 60)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_left(): Frame_leftContext {
        let localContext = new Frame_leftContext(this.context, this.state);
        this.enterRule(localContext, 148, SQLiteParser.RULE_frame_left);
        try {
            this.state = 1858;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 277, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1848;
                this.expr(0);
                this.state = 1849;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1851;
                this.expr(0);
                this.state = 1852;
                this.match(SQLiteParser.FOLLOWING_);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1854;
                this.match(SQLiteParser.CURRENT_);
                this.state = 1855;
                this.match(SQLiteParser.ROW_);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1856;
                this.match(SQLiteParser.UNBOUNDED_);
                this.state = 1857;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_right(): Frame_rightContext {
        let localContext = new Frame_rightContext(this.context, this.state);
        this.enterRule(localContext, 150, SQLiteParser.RULE_frame_right);
        try {
            this.state = 1870;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1860;
                this.expr(0);
                this.state = 1861;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1863;
                this.expr(0);
                this.state = 1864;
                this.match(SQLiteParser.FOLLOWING_);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1866;
                this.match(SQLiteParser.CURRENT_);
                this.state = 1867;
                this.match(SQLiteParser.ROW_);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1868;
                this.match(SQLiteParser.UNBOUNDED_);
                this.state = 1869;
                this.match(SQLiteParser.FOLLOWING_);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_single(): Frame_singleContext {
        let localContext = new Frame_singleContext(this.context, this.state);
        this.enterRule(localContext, 152, SQLiteParser.RULE_frame_single);
        try {
            this.state = 1879;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 279, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1872;
                this.expr(0);
                this.state = 1873;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1875;
                this.match(SQLiteParser.UNBOUNDED_);
                this.state = 1876;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1877;
                this.match(SQLiteParser.CURRENT_);
                this.state = 1878;
                this.match(SQLiteParser.ROW_);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public window_function(): Window_functionContext {
        let localContext = new Window_functionContext(this.context, this.state);
        this.enterRule(localContext, 154, SQLiteParser.RULE_window_function);
        let _la: number;
        try {
            this.state = 1966;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.FIRST_VALUE_:
            case SQLiteParser.LAST_VALUE_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1881;
                _la = this.tokenStream.LA(1);
                if(!(_la === 151 || _la === 162)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1882;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1883;
                this.expr(0);
                this.state = 1884;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1885;
                this.match(SQLiteParser.OVER_);
                this.state = 1886;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1888;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1887;
                    this.partition_by();
                    }
                }

                this.state = 1890;
                this.order_by_expr_asc_desc();
                this.state = 1892;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128 || _la === 154 || _la === 179) {
                    {
                    this.state = 1891;
                    this.frame_clause();
                    }
                }

                this.state = 1894;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.CUME_DIST_:
            case SQLiteParser.PERCENT_RANK_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1896;
                _la = this.tokenStream.LA(1);
                if(!(_la === 159 || _la === 166)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1897;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1898;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1899;
                this.match(SQLiteParser.OVER_);
                this.state = 1900;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1902;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1901;
                    this.partition_by();
                    }
                }

                this.state = 1905;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                    this.state = 1904;
                    this.order_by_expr();
                    }
                }

                this.state = 1907;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.DENSE_RANK_:
            case SQLiteParser.RANK_:
            case SQLiteParser.ROW_NUMBER_:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1908;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 385) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1909;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1910;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1911;
                this.match(SQLiteParser.OVER_);
                this.state = 1912;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1914;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1913;
                    this.partition_by();
                    }
                }

                this.state = 1916;
                this.order_by_expr_asc_desc();
                this.state = 1917;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.LAG_:
            case SQLiteParser.LEAD_:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1919;
                _la = this.tokenStream.LA(1);
                if(!(_la === 161 || _la === 163)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1920;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1921;
                this.expr(0);
                this.state = 1923;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
                case 1:
                    {
                    this.state = 1922;
                    this.offset();
                    }
                    break;
                }
                this.state = 1926;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 1925;
                    this.default_value();
                    }
                }

                this.state = 1928;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1929;
                this.match(SQLiteParser.OVER_);
                this.state = 1930;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1932;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1931;
                    this.partition_by();
                    }
                }

                this.state = 1934;
                this.order_by_expr_asc_desc();
                this.state = 1935;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.NTH_VALUE_:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1937;
                this.match(SQLiteParser.NTH_VALUE_);
                this.state = 1938;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1939;
                this.expr(0);
                this.state = 1940;
                this.match(SQLiteParser.COMMA);
                this.state = 1941;
                this.signed_number();
                this.state = 1942;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1943;
                this.match(SQLiteParser.OVER_);
                this.state = 1944;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1946;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1945;
                    this.partition_by();
                    }
                }

                this.state = 1948;
                this.order_by_expr_asc_desc();
                this.state = 1950;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128 || _la === 154 || _la === 179) {
                    {
                    this.state = 1949;
                    this.frame_clause();
                    }
                }

                this.state = 1952;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.NTILE_:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1954;
                this.match(SQLiteParser.NTILE_);
                this.state = 1955;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1956;
                this.expr(0);
                this.state = 1957;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1958;
                this.match(SQLiteParser.OVER_);
                this.state = 1959;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1961;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 1960;
                    this.partition_by();
                    }
                }

                this.state = 1963;
                this.order_by_expr_asc_desc();
                this.state = 1964;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public offset(): OffsetContext {
        let localContext = new OffsetContext(this.context, this.state);
        this.enterRule(localContext, 156, SQLiteParser.RULE_offset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1968;
            this.match(SQLiteParser.COMMA);
            this.state = 1969;
            this.signed_number();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public default_value(): Default_valueContext {
        let localContext = new Default_valueContext(this.context, this.state);
        this.enterRule(localContext, 158, SQLiteParser.RULE_default_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1971;
            this.match(SQLiteParser.COMMA);
            this.state = 1972;
            this.signed_number();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partition_by(): Partition_byContext {
        let localContext = new Partition_byContext(this.context, this.state);
        this.enterRule(localContext, 160, SQLiteParser.RULE_partition_by);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1974;
            this.match(SQLiteParser.PARTITION_);
            this.state = 1975;
            this.match(SQLiteParser.BY_);
            this.state = 1977;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1976;
                    this.expr(0);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1979;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 292, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public order_by_expr(): Order_by_exprContext {
        let localContext = new Order_by_exprContext(this.context, this.state);
        this.enterRule(localContext, 162, SQLiteParser.RULE_order_by_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1981;
            this.match(SQLiteParser.ORDER_);
            this.state = 1982;
            this.match(SQLiteParser.BY_);
            this.state = 1984;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1983;
                this.expr(0);
                }
                }
                this.state = 1986;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public order_by_expr_asc_desc(): Order_by_expr_asc_descContext {
        let localContext = new Order_by_expr_asc_descContext(this.context, this.state);
        this.enterRule(localContext, 164, SQLiteParser.RULE_order_by_expr_asc_desc);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1988;
            this.match(SQLiteParser.ORDER_);
            this.state = 1989;
            this.match(SQLiteParser.BY_);
            this.state = 1990;
            this.expr_asc_desc();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_asc_desc(): Expr_asc_descContext {
        let localContext = new Expr_asc_descContext(this.context, this.state);
        this.enterRule(localContext, 166, SQLiteParser.RULE_expr_asc_desc);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1992;
            this.expr(0);
            this.state = 1994;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34 || _la === 60) {
                {
                this.state = 1993;
                this.asc_desc();
                }
            }

            this.state = 2003;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1996;
                this.match(SQLiteParser.COMMA);
                this.state = 1997;
                this.expr(0);
                this.state = 1999;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34 || _la === 60) {
                    {
                    this.state = 1998;
                    this.asc_desc();
                    }
                }

                }
                }
                this.state = 2005;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public initial_select(): Initial_selectContext {
        let localContext = new Initial_selectContext(this.context, this.state);
        this.enterRule(localContext, 168, SQLiteParser.RULE_initial_select);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2006;
            this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recursive_select(): Recursive_selectContext {
        let localContext = new Recursive_selectContext(this.context, this.state);
        this.enterRule(localContext, 170, SQLiteParser.RULE_recursive_select);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2008;
            this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unary_operator(): Unary_operatorContext {
        let localContext = new Unary_operatorContext(this.context, this.state);
        this.enterRule(localContext, 172, SQLiteParser.RULE_unary_operator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2010;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0) || _la === 102)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public error_message(): Error_messageContext {
        let localContext = new Error_messageContext(this.context, this.state);
        this.enterRule(localContext, 174, SQLiteParser.RULE_error_message);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2012;
            this.match(SQLiteParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_argument(): Module_argumentContext {
        let localContext = new Module_argumentContext(this.context, this.state);
        this.enterRule(localContext, 176, SQLiteParser.RULE_module_argument);
        try {
            this.state = 2016;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 297, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2014;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2015;
                this.column_def();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_alias(): Column_aliasContext {
        let localContext = new Column_aliasContext(this.context, this.state);
        this.enterRule(localContext, 178, SQLiteParser.RULE_column_alias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2018;
            _la = this.tokenStream.LA(1);
            if(!(_la === 185 || _la === 188)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 180, SQLiteParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2020;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 4294967295) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 4294967295) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 4294967295) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 4294967287) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 268435455) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public name(): NameContext {
        let localContext = new NameContext(this.context, this.state);
        this.enterRule(localContext, 182, SQLiteParser.RULE_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2022;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_name(): Function_nameContext {
        let localContext = new Function_nameContext(this.context, this.state);
        this.enterRule(localContext, 184, SQLiteParser.RULE_function_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2024;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schema_name(): Schema_nameContext {
        let localContext = new Schema_nameContext(this.context, this.state);
        this.enterRule(localContext, 186, SQLiteParser.RULE_schema_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2026;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_name(): Table_nameContext {
        let localContext = new Table_nameContext(this.context, this.state);
        this.enterRule(localContext, 188, SQLiteParser.RULE_table_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2028;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_or_index_name(): Table_or_index_nameContext {
        let localContext = new Table_or_index_nameContext(this.context, this.state);
        this.enterRule(localContext, 190, SQLiteParser.RULE_table_or_index_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2030;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_name(): Column_nameContext {
        let localContext = new Column_nameContext(this.context, this.state);
        this.enterRule(localContext, 192, SQLiteParser.RULE_column_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2032;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collation_name(): Collation_nameContext {
        let localContext = new Collation_nameContext(this.context, this.state);
        this.enterRule(localContext, 194, SQLiteParser.RULE_collation_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2034;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public foreign_table(): Foreign_tableContext {
        let localContext = new Foreign_tableContext(this.context, this.state);
        this.enterRule(localContext, 196, SQLiteParser.RULE_foreign_table);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2036;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public index_name(): Index_nameContext {
        let localContext = new Index_nameContext(this.context, this.state);
        this.enterRule(localContext, 198, SQLiteParser.RULE_index_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2038;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trigger_name(): Trigger_nameContext {
        let localContext = new Trigger_nameContext(this.context, this.state);
        this.enterRule(localContext, 200, SQLiteParser.RULE_trigger_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2040;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public view_name(): View_nameContext {
        let localContext = new View_nameContext(this.context, this.state);
        this.enterRule(localContext, 202, SQLiteParser.RULE_view_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2042;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_name(): Module_nameContext {
        let localContext = new Module_nameContext(this.context, this.state);
        this.enterRule(localContext, 204, SQLiteParser.RULE_module_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2044;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragma_name(): Pragma_nameContext {
        let localContext = new Pragma_nameContext(this.context, this.state);
        this.enterRule(localContext, 206, SQLiteParser.RULE_pragma_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2046;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public savepoint_name(): Savepoint_nameContext {
        let localContext = new Savepoint_nameContext(this.context, this.state);
        this.enterRule(localContext, 208, SQLiteParser.RULE_savepoint_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2048;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_alias(): Table_aliasContext {
        let localContext = new Table_aliasContext(this.context, this.state);
        this.enterRule(localContext, 210, SQLiteParser.RULE_table_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2050;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transaction_name(): Transaction_nameContext {
        let localContext = new Transaction_nameContext(this.context, this.state);
        this.enterRule(localContext, 212, SQLiteParser.RULE_transaction_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2052;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public window_name(): Window_nameContext {
        let localContext = new Window_nameContext(this.context, this.state);
        this.enterRule(localContext, 214, SQLiteParser.RULE_window_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2054;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 216, SQLiteParser.RULE_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2056;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filename(): FilenameContext {
        let localContext = new FilenameContext(this.context, this.state);
        this.enterRule(localContext, 218, SQLiteParser.RULE_filename);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2058;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public base_window_name(): Base_window_nameContext {
        let localContext = new Base_window_nameContext(this.context, this.state);
        this.enterRule(localContext, 220, SQLiteParser.RULE_base_window_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2060;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simple_func(): Simple_funcContext {
        let localContext = new Simple_funcContext(this.context, this.state);
        this.enterRule(localContext, 222, SQLiteParser.RULE_simple_func);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2062;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregate_func(): Aggregate_funcContext {
        let localContext = new Aggregate_funcContext(this.context, this.state);
        this.enterRule(localContext, 224, SQLiteParser.RULE_aggregate_func);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2064;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_function_name(): Table_function_nameContext {
        let localContext = new Table_function_nameContext(this.context, this.state);
        this.enterRule(localContext, 226, SQLiteParser.RULE_table_function_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2066;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public any_name(): Any_nameContext {
        let localContext = new Any_nameContext(this.context, this.state);
        this.enterRule(localContext, 228, SQLiteParser.RULE_any_name);
        try {
            this.state = 2075;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2068;
                this.match(SQLiteParser.IDENTIFIER);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.ADD_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALL_:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.AND_:
            case SQLiteParser.AS_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.AUTOINCREMENT_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BETWEEN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.CHECK_:
            case SQLiteParser.COLLATE_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CONSTRAINT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFAULT_:
            case SQLiteParser.DEFERRABLE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DISTINCT_:
            case SQLiteParser.DROP_:
            case SQLiteParser.EACH_:
            case SQLiteParser.ELSE_:
            case SQLiteParser.END_:
            case SQLiteParser.ESCAPE_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FOREIGN_:
            case SQLiteParser.FROM_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUP_:
            case SQLiteParser.HAVING_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.IN_:
            case SQLiteParser.INDEX_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.INTO_:
            case SQLiteParser.IS_:
            case SQLiteParser.ISNULL_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NOTNULL_:
            case SQLiteParser.NULL_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.ON_:
            case SQLiteParser.OR_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REFERENCES_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.TABLE_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.THEN_:
            case SQLiteParser.TO_:
            case SQLiteParser.TRANSACTION_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.UNION_:
            case SQLiteParser.UNIQUE_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.USING_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WHEN_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.FIRST_VALUE_:
            case SQLiteParser.OVER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.CUME_DIST_:
            case SQLiteParser.DENSE_RANK_:
            case SQLiteParser.LAG_:
            case SQLiteParser.LAST_VALUE_:
            case SQLiteParser.LEAD_:
            case SQLiteParser.NTH_VALUE_:
            case SQLiteParser.NTILE_:
            case SQLiteParser.PERCENT_RANK_:
            case SQLiteParser.RANK_:
            case SQLiteParser.ROW_NUMBER_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.STORED_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.WINDOW_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.LAST_:
            case SQLiteParser.FILTER_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.EXCLUDE_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2069;
                this.keyword();
                }
                break;
            case SQLiteParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2070;
                this.match(SQLiteParser.STRING_LITERAL);
                }
                break;
            case SQLiteParser.OPEN_PAR:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2071;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 2072;
                this.any_name();
                this.state = 2073;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 34:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 20);
        case 1:
            return this.precpred(this.context, 19);
        case 2:
            return this.precpred(this.context, 18);
        case 3:
            return this.precpred(this.context, 17);
        case 4:
            return this.precpred(this.context, 16);
        case 5:
            return this.precpred(this.context, 15);
        case 6:
            return this.precpred(this.context, 14);
        case 7:
            return this.precpred(this.context, 13);
        case 8:
            return this.precpred(this.context, 6);
        case 9:
            return this.precpred(this.context, 5);
        case 10:
            return this.precpred(this.context, 9);
        case 11:
            return this.precpred(this.context, 8);
        case 12:
            return this.precpred(this.context, 7);
        case 13:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,194,2078,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        1,0,5,0,232,8,0,10,0,12,0,235,9,0,1,0,1,0,1,1,1,1,3,1,241,8,1,1,
        2,5,2,244,8,2,10,2,12,2,247,9,2,1,2,1,2,1,3,5,3,252,8,3,10,3,12,
        3,255,9,3,1,3,1,3,4,3,259,8,3,11,3,12,3,260,1,3,5,3,264,8,3,10,3,
        12,3,267,9,3,1,3,5,3,270,8,3,10,3,12,3,273,9,3,1,4,1,4,1,4,3,4,278,
        8,4,3,4,280,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,306,8,4,1,5,
        1,5,1,5,1,5,1,5,3,5,313,8,5,1,5,1,5,1,5,1,5,1,5,3,5,320,8,5,1,5,
        1,5,1,5,1,5,3,5,326,8,5,1,5,1,5,3,5,330,8,5,1,5,1,5,1,5,3,5,335,
        8,5,1,5,3,5,338,8,5,1,6,1,6,1,6,1,6,1,6,3,6,345,8,6,1,6,3,6,348,
        8,6,1,7,1,7,3,7,352,8,7,1,7,1,7,1,7,1,7,1,8,1,8,3,8,360,8,8,1,8,
        1,8,3,8,364,8,8,3,8,366,8,8,1,9,1,9,3,9,370,8,9,1,10,1,10,3,10,374,
        8,10,1,10,1,10,3,10,378,8,10,1,10,3,10,381,8,10,1,11,1,11,1,11,1,
        12,1,12,3,12,388,8,12,1,12,1,12,1,13,1,13,3,13,394,8,13,1,13,1,13,
        1,13,1,13,3,13,400,8,13,1,13,1,13,1,13,3,13,405,8,13,1,13,1,13,1,
        13,1,13,1,13,1,13,1,13,5,13,414,8,13,10,13,12,13,417,9,13,1,13,1,
        13,1,13,3,13,422,8,13,1,14,1,14,3,14,426,8,14,1,14,1,14,3,14,430,
        8,14,1,14,3,14,433,8,14,1,15,1,15,3,15,437,8,15,1,15,1,15,1,15,1,
        15,3,15,443,8,15,1,15,1,15,1,15,3,15,448,8,15,1,15,1,15,1,15,1,15,
        1,15,5,15,455,8,15,10,15,12,15,458,9,15,1,15,1,15,5,15,462,8,15,
        10,15,12,15,465,9,15,1,15,1,15,1,15,3,15,470,8,15,1,15,1,15,3,15,
        474,8,15,1,16,1,16,3,16,478,8,16,1,16,5,16,481,8,16,10,16,12,16,
        484,9,16,1,17,4,17,487,8,17,11,17,12,17,488,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,1,17,3,17,501,8,17,1,18,1,18,3,18,505,8,
        18,1,18,1,18,1,18,3,18,510,8,18,1,18,3,18,513,8,18,1,18,3,18,516,
        8,18,1,18,3,18,519,8,18,1,18,1,18,3,18,523,8,18,1,18,3,18,526,8,
        18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,
        18,540,8,18,1,18,1,18,1,18,1,18,1,18,3,18,547,8,18,1,18,1,18,1,18,
        1,18,1,18,3,18,554,8,18,3,18,556,8,18,1,19,3,19,559,8,19,1,19,1,
        19,1,20,1,20,3,20,565,8,20,1,20,1,20,1,20,3,20,570,8,20,1,20,1,20,
        1,20,1,20,5,20,576,8,20,10,20,12,20,579,9,20,1,20,1,20,3,20,583,
        8,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,
        596,8,20,10,20,12,20,599,9,20,1,20,1,20,1,20,3,20,604,8,20,1,21,
        1,21,1,21,1,21,1,21,1,21,5,21,612,8,21,10,21,12,21,615,9,21,1,21,
        1,21,3,21,619,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,
        629,8,21,1,21,1,21,5,21,633,8,21,10,21,12,21,636,9,21,1,21,3,21,
        639,8,21,1,21,1,21,1,21,3,21,644,8,21,3,21,646,8,21,1,22,1,22,1,
        22,1,22,1,23,1,23,3,23,654,8,23,1,23,1,23,1,23,1,23,3,23,660,8,23,
        1,23,1,23,1,23,3,23,665,8,23,1,23,1,23,1,23,1,23,1,23,3,23,672,8,
        23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,681,8,23,10,23,12,23,
        684,9,23,3,23,686,8,23,3,23,688,8,23,1,23,1,23,1,23,1,23,1,23,3,
        23,695,8,23,1,23,1,23,3,23,699,8,23,1,23,1,23,1,23,1,23,1,23,3,23,
        706,8,23,1,23,1,23,4,23,710,8,23,11,23,12,23,711,1,23,1,23,1,24,
        1,24,3,24,718,8,24,1,24,1,24,1,24,1,24,3,24,724,8,24,1,24,1,24,1,
        24,3,24,729,8,24,1,24,1,24,1,24,1,24,1,24,5,24,736,8,24,10,24,12,
        24,739,9,24,1,24,1,24,3,24,743,8,24,1,24,1,24,1,24,1,25,1,25,1,25,
        1,25,1,25,1,25,3,25,754,8,25,1,25,1,25,1,25,3,25,759,8,25,1,25,1,
        25,1,25,1,25,1,25,1,25,1,25,5,25,768,8,25,10,25,12,25,771,9,25,1,
        25,1,25,3,25,775,8,25,1,26,1,26,3,26,779,8,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,793,8,26,10,26,12,26,
        796,9,26,1,27,1,27,1,27,1,27,1,27,5,27,803,8,27,10,27,12,27,806,
        9,27,1,27,1,27,3,27,810,8,27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,
        818,8,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,5,29,828,8,29,10,
        29,12,29,831,9,29,1,29,1,29,3,29,835,8,29,1,29,1,29,1,29,1,29,1,
        29,1,30,3,30,843,8,30,1,30,1,30,1,30,1,30,1,30,3,30,850,8,30,1,30,
        3,30,853,8,30,1,31,3,31,856,8,31,1,31,1,31,1,31,1,31,1,31,3,31,863,
        8,31,1,31,3,31,866,8,31,1,31,3,31,869,8,31,1,31,3,31,872,8,31,1,
        32,1,32,3,32,876,8,32,1,32,1,32,1,33,1,33,1,33,1,33,3,33,884,8,33,
        1,33,1,33,1,33,3,33,889,8,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,
        1,34,3,34,899,8,34,1,34,1,34,1,34,3,34,904,8,34,1,34,1,34,1,34,1,
        34,1,34,1,34,1,34,3,34,913,8,34,1,34,1,34,1,34,5,34,918,8,34,10,
        34,12,34,921,9,34,1,34,3,34,924,8,34,1,34,1,34,3,34,928,8,34,1,34,
        3,34,931,8,34,1,34,1,34,1,34,1,34,5,34,937,8,34,10,34,12,34,940,
        9,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,952,
        8,34,1,34,3,34,955,8,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,963,8,
        34,1,34,1,34,1,34,1,34,1,34,4,34,970,8,34,11,34,12,34,971,1,34,1,
        34,3,34,976,8,34,1,34,1,34,1,34,3,34,981,8,34,1,34,1,34,1,34,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,1008,8,34,1,34,1,34,
        1,34,1,34,1,34,1,34,1,34,3,34,1017,8,34,1,34,1,34,1,34,1,34,1,34,
        1,34,1,34,1,34,1,34,1,34,3,34,1029,8,34,1,34,1,34,1,34,3,34,1034,
        8,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,1046,
        8,34,1,34,1,34,1,34,1,34,3,34,1052,8,34,1,34,1,34,1,34,1,34,1,34,
        3,34,1059,8,34,1,34,1,34,3,34,1063,8,34,1,34,1,34,1,34,1,34,1,34,
        1,34,5,34,1071,8,34,10,34,12,34,1074,9,34,3,34,1076,8,34,1,34,1,
        34,1,34,1,34,3,34,1082,8,34,1,34,1,34,1,34,1,34,3,34,1088,8,34,1,
        34,1,34,1,34,1,34,1,34,5,34,1095,8,34,10,34,12,34,1098,9,34,3,34,
        1100,8,34,1,34,1,34,3,34,1104,8,34,5,34,1106,8,34,10,34,12,34,1109,
        9,34,1,35,1,35,1,35,1,35,1,35,1,35,3,35,1117,8,35,1,35,1,35,1,36,
        1,36,1,37,1,37,1,37,1,37,5,37,1127,8,37,10,37,12,37,1130,9,37,1,
        37,1,37,1,38,1,38,1,38,1,38,5,38,1138,8,38,10,38,12,38,1141,9,38,
        1,39,3,39,1144,8,39,1,39,1,39,1,39,1,39,1,39,3,39,1151,8,39,1,39,
        1,39,1,39,1,39,3,39,1157,8,39,1,39,1,39,1,39,3,39,1162,8,39,1,39,
        1,39,1,39,1,39,5,39,1168,8,39,10,39,12,39,1171,9,39,1,39,1,39,3,
        39,1175,8,39,1,39,1,39,3,39,1179,8,39,1,39,3,39,1182,8,39,1,39,1,
        39,3,39,1186,8,39,1,39,3,39,1189,8,39,1,40,1,40,1,40,1,40,5,40,1195,
        8,40,10,40,12,40,1198,9,40,1,41,1,41,1,41,1,41,1,41,1,41,5,41,1206,
        8,41,10,41,12,41,1209,9,41,1,41,1,41,1,41,3,41,1214,8,41,3,41,1216,
        8,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,1224,8,41,1,41,1,41,1,41,
        1,41,1,41,3,41,1231,8,41,1,41,1,41,1,41,5,41,1236,8,41,10,41,12,
        41,1239,9,41,1,41,1,41,3,41,1243,8,41,3,41,1245,8,41,1,42,1,42,1,
        42,1,42,3,42,1251,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,1260,
        8,42,1,43,1,43,1,43,3,43,1265,8,43,1,44,1,44,1,44,1,44,1,44,3,44,
        1272,8,44,1,44,1,44,3,44,1276,8,44,3,44,1278,8,44,1,45,3,45,1281,
        8,45,1,45,1,45,1,45,1,45,5,45,1287,8,45,10,45,12,45,1290,9,45,1,
        45,3,45,1293,8,45,1,45,3,45,1296,8,45,1,46,1,46,1,46,1,46,3,46,1302,
        8,46,5,46,1304,8,46,10,46,12,46,1307,9,46,1,47,1,47,3,47,1311,8,
        47,1,47,1,47,1,47,5,47,1316,8,47,10,47,12,47,1319,9,47,1,47,1,47,
        1,47,1,47,5,47,1325,8,47,10,47,12,47,1328,9,47,1,47,3,47,1331,8,
        47,3,47,1333,8,47,1,47,1,47,3,47,1337,8,47,1,47,1,47,1,47,1,47,1,
        47,5,47,1344,8,47,10,47,12,47,1347,9,47,1,47,1,47,3,47,1351,8,47,
        3,47,1353,8,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,5,47,
        1364,8,47,10,47,12,47,1367,9,47,3,47,1369,8,47,1,47,3,47,1372,8,
        47,1,48,1,48,1,49,3,49,1377,8,49,1,49,1,49,3,49,1381,8,49,1,49,3,
        49,1384,8,49,1,50,3,50,1387,8,50,1,50,1,50,1,50,3,50,1392,8,50,1,
        50,1,50,3,50,1396,8,50,1,50,4,50,1399,8,50,11,50,12,50,1400,1,50,
        3,50,1404,8,50,1,50,3,50,1407,8,50,1,51,1,51,1,51,3,51,1412,8,51,
        1,51,1,51,3,51,1416,8,51,1,51,3,51,1419,8,51,1,51,1,51,1,51,1,51,
        1,51,3,51,1426,8,51,1,51,1,51,1,51,3,51,1431,8,51,1,51,1,51,1,51,
        1,51,1,51,5,51,1438,8,51,10,51,12,51,1441,9,51,1,51,1,51,3,51,1445,
        8,51,1,51,3,51,1448,8,51,1,51,1,51,1,51,1,51,5,51,1454,8,51,10,51,
        12,51,1457,9,51,1,51,3,51,1460,8,51,1,51,1,51,1,51,1,51,1,51,1,51,
        3,51,1468,8,51,1,51,3,51,1471,8,51,3,51,1473,8,51,1,52,1,52,1,52,
        1,52,1,52,1,52,1,52,3,52,1482,8,52,1,52,3,52,1485,8,52,3,52,1487,
        8,52,1,53,1,53,3,53,1491,8,53,1,53,1,53,3,53,1495,8,53,1,53,1,53,
        3,53,1499,8,53,1,53,3,53,1502,8,53,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,5,54,1511,8,54,10,54,12,54,1514,9,54,1,54,1,54,3,54,1518,8,
        54,1,55,1,55,3,55,1522,8,55,1,55,1,55,3,55,1526,8,55,1,56,3,56,1529,
        8,56,1,56,1,56,1,56,3,56,1534,8,56,1,56,1,56,1,56,1,56,3,56,1540,
        8,56,1,56,1,56,1,56,1,56,1,56,3,56,1547,8,56,1,56,1,56,1,56,5,56,
        1552,8,56,10,56,12,56,1555,9,56,1,56,1,56,1,56,1,56,5,56,1561,8,
        56,10,56,12,56,1564,9,56,1,56,3,56,1567,8,56,3,56,1569,8,56,1,56,
        1,56,3,56,1573,8,56,1,56,3,56,1576,8,56,1,57,1,57,1,57,1,57,5,57,
        1582,8,57,10,57,12,57,1585,9,57,1,57,1,57,1,58,3,58,1590,8,58,1,
        58,1,58,1,58,3,58,1595,8,58,1,58,1,58,1,58,1,58,3,58,1601,8,58,1,
        58,1,58,1,58,1,58,1,58,3,58,1608,8,58,1,58,1,58,1,58,5,58,1613,8,
        58,10,58,12,58,1616,9,58,1,58,1,58,3,58,1620,8,58,1,58,3,58,1623,
        8,58,1,58,3,58,1626,8,58,1,58,3,58,1629,8,58,1,59,1,59,1,59,3,59,
        1634,8,59,1,59,1,59,1,59,3,59,1639,8,59,1,59,1,59,1,59,1,59,1,59,
        3,59,1646,8,59,1,60,1,60,3,60,1650,8,60,1,60,1,60,3,60,1654,8,60,
        1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,3,62,1664,8,62,1,62,1,62,
        1,62,1,62,1,62,5,62,1671,8,62,10,62,12,62,1674,9,62,3,62,1676,8,
        62,1,62,1,62,1,62,1,62,1,62,5,62,1683,8,62,10,62,12,62,1686,9,62,
        1,62,3,62,1689,8,62,1,62,1,62,1,63,1,63,1,63,1,63,3,63,1697,8,63,
        1,63,1,63,1,63,1,63,1,63,5,63,1704,8,63,10,63,12,63,1707,9,63,3,
        63,1709,8,63,1,63,1,63,1,63,1,63,1,63,5,63,1716,8,63,10,63,12,63,
        1719,9,63,3,63,1721,8,63,1,63,3,63,1724,8,63,1,63,3,63,1727,8,63,
        1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,3,64,1737,8,64,3,64,1739,
        8,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1748,8,65,1,66,1,66,
        1,66,1,66,1,66,5,66,1755,8,66,10,66,12,66,1758,9,66,1,66,3,66,1761,
        8,66,1,66,1,66,1,67,1,67,1,67,3,67,1768,8,67,1,67,1,67,1,67,5,67,
        1773,8,67,10,67,12,67,1776,9,67,1,67,3,67,1779,8,67,1,67,1,67,3,
        67,1783,8,67,1,68,1,68,1,68,1,68,1,68,5,68,1790,8,68,10,68,12,68,
        1793,9,68,1,68,3,68,1796,8,68,1,68,1,68,3,68,1800,8,68,1,68,1,68,
        1,68,3,68,1805,8,68,1,69,1,69,3,69,1809,8,69,1,69,1,69,1,69,5,69,
        1814,8,69,10,69,12,69,1817,9,69,1,70,1,70,1,70,1,70,1,70,5,70,1824,
        8,70,10,70,12,70,1827,9,70,1,71,1,71,1,71,1,71,3,71,1833,8,71,1,
        72,1,72,1,72,3,72,1838,8,72,1,72,3,72,1841,8,72,1,72,1,72,3,72,1845,
        8,72,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,
        3,74,1859,8,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
        3,75,1871,8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1880,8,76,
        1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1889,8,77,1,77,1,77,3,77,
        1893,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1903,8,77,
        1,77,3,77,1906,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1915,
        8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1924,8,77,1,77,3,77,
        1927,8,77,1,77,1,77,1,77,1,77,3,77,1933,8,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1947,8,77,1,77,1,77,
        3,77,1951,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,
        1962,8,77,1,77,1,77,1,77,3,77,1967,8,77,1,78,1,78,1,78,1,79,1,79,
        1,79,1,80,1,80,1,80,4,80,1978,8,80,11,80,12,80,1979,1,81,1,81,1,
        81,4,81,1985,8,81,11,81,12,81,1986,1,82,1,82,1,82,1,82,1,83,1,83,
        3,83,1995,8,83,1,83,1,83,1,83,3,83,2000,8,83,5,83,2002,8,83,10,83,
        12,83,2005,9,83,1,84,1,84,1,85,1,85,1,86,1,86,1,87,1,87,1,88,1,88,
        3,88,2017,8,88,1,89,1,89,1,90,1,90,1,91,1,91,1,92,1,92,1,93,1,93,
        1,94,1,94,1,95,1,95,1,96,1,96,1,97,1,97,1,98,1,98,1,99,1,99,1,100,
        1,100,1,101,1,101,1,102,1,102,1,103,1,103,1,104,1,104,1,105,1,105,
        1,106,1,106,1,107,1,107,1,108,1,108,1,109,1,109,1,110,1,110,1,111,
        1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,3,114,2076,8,114,1,114,2,456,488,1,68,115,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
        198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
        0,29,3,0,58,58,69,69,82,82,2,0,47,47,66,66,1,0,133,134,2,0,146,146,
        171,171,1,0,8,9,2,0,59,59,141,141,2,0,56,56,104,104,2,0,58,58,82,
        82,5,0,25,25,72,72,81,81,122,122,126,126,4,0,84,84,132,132,138,138,
        145,145,2,0,7,7,12,13,1,0,14,17,1,0,18,21,4,0,77,77,97,97,99,99,
        118,118,3,0,25,25,72,72,126,126,5,0,52,54,104,104,172,173,186,186,
        188,189,2,0,29,29,62,62,3,0,76,76,96,96,125,125,3,0,128,128,154,
        154,179,179,2,0,5,5,106,106,1,0,176,177,2,0,34,34,60,60,2,0,151,
        151,162,162,2,0,159,159,166,166,2,0,160,160,167,168,2,0,161,161,
        163,163,2,0,8,10,102,102,2,0,185,185,188,188,2,0,25,123,125,180,
        2362,0,233,1,0,0,0,2,238,1,0,0,0,4,245,1,0,0,0,6,253,1,0,0,0,8,279,
        1,0,0,0,10,307,1,0,0,0,12,339,1,0,0,0,14,349,1,0,0,0,16,357,1,0,
        0,0,18,367,1,0,0,0,20,371,1,0,0,0,22,382,1,0,0,0,24,385,1,0,0,0,
        26,391,1,0,0,0,28,425,1,0,0,0,30,434,1,0,0,0,32,475,1,0,0,0,34,486,
        1,0,0,0,36,504,1,0,0,0,38,558,1,0,0,0,40,564,1,0,0,0,42,605,1,0,
        0,0,44,647,1,0,0,0,46,651,1,0,0,0,48,715,1,0,0,0,50,747,1,0,0,0,
        52,776,1,0,0,0,54,797,1,0,0,0,56,811,1,0,0,0,58,822,1,0,0,0,60,842,
        1,0,0,0,62,855,1,0,0,0,64,873,1,0,0,0,66,879,1,0,0,0,68,980,1,0,
        0,0,70,1110,1,0,0,0,72,1120,1,0,0,0,74,1122,1,0,0,0,76,1133,1,0,
        0,0,78,1143,1,0,0,0,80,1190,1,0,0,0,82,1199,1,0,0,0,84,1246,1,0,
        0,0,86,1264,1,0,0,0,88,1266,1,0,0,0,90,1280,1,0,0,0,92,1297,1,0,
        0,0,94,1371,1,0,0,0,96,1373,1,0,0,0,98,1376,1,0,0,0,100,1386,1,0,
        0,0,102,1472,1,0,0,0,104,1486,1,0,0,0,106,1501,1,0,0,0,108,1517,
        1,0,0,0,110,1525,1,0,0,0,112,1528,1,0,0,0,114,1577,1,0,0,0,116,1589,
        1,0,0,0,118,1633,1,0,0,0,120,1647,1,0,0,0,122,1655,1,0,0,0,124,1661,
        1,0,0,0,126,1692,1,0,0,0,128,1728,1,0,0,0,130,1740,1,0,0,0,132,1749,
        1,0,0,0,134,1764,1,0,0,0,136,1784,1,0,0,0,138,1806,1,0,0,0,140,1818,
        1,0,0,0,142,1828,1,0,0,0,144,1834,1,0,0,0,146,1846,1,0,0,0,148,1858,
        1,0,0,0,150,1870,1,0,0,0,152,1879,1,0,0,0,154,1966,1,0,0,0,156,1968,
        1,0,0,0,158,1971,1,0,0,0,160,1974,1,0,0,0,162,1981,1,0,0,0,164,1988,
        1,0,0,0,166,1992,1,0,0,0,168,2006,1,0,0,0,170,2008,1,0,0,0,172,2010,
        1,0,0,0,174,2012,1,0,0,0,176,2016,1,0,0,0,178,2018,1,0,0,0,180,2020,
        1,0,0,0,182,2022,1,0,0,0,184,2024,1,0,0,0,186,2026,1,0,0,0,188,2028,
        1,0,0,0,190,2030,1,0,0,0,192,2032,1,0,0,0,194,2034,1,0,0,0,196,2036,
        1,0,0,0,198,2038,1,0,0,0,200,2040,1,0,0,0,202,2042,1,0,0,0,204,2044,
        1,0,0,0,206,2046,1,0,0,0,208,2048,1,0,0,0,210,2050,1,0,0,0,212,2052,
        1,0,0,0,214,2054,1,0,0,0,216,2056,1,0,0,0,218,2058,1,0,0,0,220,2060,
        1,0,0,0,222,2062,1,0,0,0,224,2064,1,0,0,0,226,2066,1,0,0,0,228,2075,
        1,0,0,0,230,232,3,6,3,0,231,230,1,0,0,0,232,235,1,0,0,0,233,231,
        1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,235,233,1,0,0,0,236,237,
        5,0,0,1,237,1,1,0,0,0,238,240,3,8,4,0,239,241,5,194,0,0,240,239,
        1,0,0,0,240,241,1,0,0,0,241,3,1,0,0,0,242,244,3,6,3,0,243,242,1,
        0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,248,1,
        0,0,0,247,245,1,0,0,0,248,249,5,0,0,1,249,5,1,0,0,0,250,252,5,1,
        0,0,251,250,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,
        0,0,254,256,1,0,0,0,255,253,1,0,0,0,256,265,3,8,4,0,257,259,5,1,
        0,0,258,257,1,0,0,0,259,260,1,0,0,0,260,258,1,0,0,0,260,261,1,0,
        0,0,261,262,1,0,0,0,262,264,3,8,4,0,263,258,1,0,0,0,264,267,1,0,
        0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,271,1,0,0,0,267,265,1,0,
        0,0,268,270,5,1,0,0,269,268,1,0,0,0,270,273,1,0,0,0,271,269,1,0,
        0,0,271,272,1,0,0,0,272,7,1,0,0,0,273,271,1,0,0,0,274,277,5,71,0,
        0,275,276,5,114,0,0,276,278,5,111,0,0,277,275,1,0,0,0,277,278,1,
        0,0,0,278,280,1,0,0,0,279,274,1,0,0,0,279,280,1,0,0,0,280,305,1,
        0,0,0,281,306,3,10,5,0,282,306,3,12,6,0,283,306,3,14,7,0,284,306,
        3,16,8,0,285,306,3,18,9,0,286,306,3,26,13,0,287,306,3,30,15,0,288,
        306,3,46,23,0,289,306,3,48,24,0,290,306,3,50,25,0,291,306,3,60,30,
        0,292,306,3,62,31,0,293,306,3,64,32,0,294,306,3,66,33,0,295,306,
        3,78,39,0,296,306,3,84,42,0,297,306,3,88,44,0,298,306,3,24,12,0,
        299,306,3,20,10,0,300,306,3,22,11,0,301,306,3,90,45,0,302,306,3,
        112,56,0,303,306,3,116,58,0,304,306,3,120,60,0,305,281,1,0,0,0,305,
        282,1,0,0,0,305,283,1,0,0,0,305,284,1,0,0,0,305,285,1,0,0,0,305,
        286,1,0,0,0,305,287,1,0,0,0,305,288,1,0,0,0,305,289,1,0,0,0,305,
        290,1,0,0,0,305,291,1,0,0,0,305,292,1,0,0,0,305,293,1,0,0,0,305,
        294,1,0,0,0,305,295,1,0,0,0,305,296,1,0,0,0,305,297,1,0,0,0,305,
        298,1,0,0,0,305,299,1,0,0,0,305,300,1,0,0,0,305,301,1,0,0,0,305,
        302,1,0,0,0,305,303,1,0,0,0,305,304,1,0,0,0,306,9,1,0,0,0,307,308,
        5,30,0,0,308,312,5,132,0,0,309,310,3,186,93,0,310,311,5,2,0,0,311,
        313,1,0,0,0,312,309,1,0,0,0,312,313,1,0,0,0,313,314,1,0,0,0,314,
        337,3,188,94,0,315,325,5,121,0,0,316,317,5,136,0,0,317,326,3,188,
        94,0,318,320,5,46,0,0,319,318,1,0,0,0,319,320,1,0,0,0,320,321,1,
        0,0,0,321,322,3,192,96,0,322,323,5,136,0,0,323,324,3,192,96,0,324,
        326,1,0,0,0,325,316,1,0,0,0,325,319,1,0,0,0,326,338,1,0,0,0,327,
        329,5,27,0,0,328,330,5,46,0,0,329,328,1,0,0,0,329,330,1,0,0,0,330,
        331,1,0,0,0,331,338,3,32,16,0,332,334,5,63,0,0,333,335,5,46,0,0,
        334,333,1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,338,3,192,96,
        0,337,315,1,0,0,0,337,327,1,0,0,0,337,332,1,0,0,0,338,11,1,0,0,0,
        339,347,5,31,0,0,340,348,3,186,93,0,341,342,3,186,93,0,342,343,5,
        2,0,0,343,345,1,0,0,0,344,341,1,0,0,0,344,345,1,0,0,0,345,346,1,
        0,0,0,346,348,3,190,95,0,347,340,1,0,0,0,347,344,1,0,0,0,347,348,
        1,0,0,0,348,13,1,0,0,0,349,351,5,35,0,0,350,352,5,55,0,0,351,350,
        1,0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,3,68,34,0,354,355,
        5,33,0,0,355,356,3,186,93,0,356,15,1,0,0,0,357,359,5,38,0,0,358,
        360,7,0,0,0,359,358,1,0,0,0,359,360,1,0,0,0,360,365,1,0,0,0,361,
        363,5,137,0,0,362,364,3,212,106,0,363,362,1,0,0,0,363,364,1,0,0,
        0,364,366,1,0,0,0,365,361,1,0,0,0,365,366,1,0,0,0,366,17,1,0,0,0,
        367,369,7,1,0,0,368,370,5,137,0,0,369,368,1,0,0,0,369,370,1,0,0,
        0,370,19,1,0,0,0,371,373,5,126,0,0,372,374,5,137,0,0,373,372,1,0,
        0,0,373,374,1,0,0,0,374,380,1,0,0,0,375,377,5,136,0,0,376,378,5,
        129,0,0,377,376,1,0,0,0,377,378,1,0,0,0,378,379,1,0,0,0,379,381,
        3,208,104,0,380,375,1,0,0,0,380,381,1,0,0,0,381,21,1,0,0,0,382,383,
        5,129,0,0,383,384,3,208,104,0,384,23,1,0,0,0,385,387,5,120,0,0,386,
        388,5,129,0,0,387,386,1,0,0,0,387,388,1,0,0,0,388,389,1,0,0,0,389,
        390,3,208,104,0,390,25,1,0,0,0,391,393,5,50,0,0,392,394,5,140,0,
        0,393,392,1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,399,5,84,0,
        0,396,397,5,80,0,0,397,398,5,102,0,0,398,400,5,70,0,0,399,396,1,
        0,0,0,399,400,1,0,0,0,400,404,1,0,0,0,401,402,3,186,93,0,402,403,
        5,2,0,0,403,405,1,0,0,0,404,401,1,0,0,0,404,405,1,0,0,0,405,406,
        1,0,0,0,406,407,3,198,99,0,407,408,5,107,0,0,408,409,3,188,94,0,
        409,410,5,3,0,0,410,415,3,28,14,0,411,412,5,5,0,0,412,414,3,28,14,
        0,413,411,1,0,0,0,414,417,1,0,0,0,415,413,1,0,0,0,415,416,1,0,0,
        0,416,418,1,0,0,0,417,415,1,0,0,0,418,421,5,4,0,0,419,420,5,148,
        0,0,420,422,3,68,34,0,421,419,1,0,0,0,421,422,1,0,0,0,422,27,1,0,
        0,0,423,426,3,192,96,0,424,426,3,68,34,0,425,423,1,0,0,0,425,424,
        1,0,0,0,426,429,1,0,0,0,427,428,5,45,0,0,428,430,3,194,97,0,429,
        427,1,0,0,0,429,430,1,0,0,0,430,432,1,0,0,0,431,433,3,146,73,0,432,
        431,1,0,0,0,432,433,1,0,0,0,433,29,1,0,0,0,434,436,5,50,0,0,435,
        437,7,2,0,0,436,435,1,0,0,0,436,437,1,0,0,0,437,438,1,0,0,0,438,
        442,5,132,0,0,439,440,5,80,0,0,440,441,5,102,0,0,441,443,5,70,0,
        0,442,439,1,0,0,0,442,443,1,0,0,0,443,447,1,0,0,0,444,445,3,186,
        93,0,445,446,5,2,0,0,446,448,1,0,0,0,447,444,1,0,0,0,447,448,1,0,
        0,0,448,449,1,0,0,0,449,473,3,188,94,0,450,451,5,3,0,0,451,456,3,
        32,16,0,452,453,5,5,0,0,453,455,3,32,16,0,454,452,1,0,0,0,455,458,
        1,0,0,0,456,457,1,0,0,0,456,454,1,0,0,0,457,463,1,0,0,0,458,456,
        1,0,0,0,459,460,5,5,0,0,460,462,3,40,20,0,461,459,1,0,0,0,462,465,
        1,0,0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,466,1,0,0,0,465,463,
        1,0,0,0,466,469,5,4,0,0,467,468,5,150,0,0,468,470,5,185,0,0,469,
        467,1,0,0,0,469,470,1,0,0,0,470,474,1,0,0,0,471,472,5,33,0,0,472,
        474,3,90,45,0,473,450,1,0,0,0,473,471,1,0,0,0,474,31,1,0,0,0,475,
        477,3,192,96,0,476,478,3,34,17,0,477,476,1,0,0,0,477,478,1,0,0,0,
        478,482,1,0,0,0,479,481,3,36,18,0,480,479,1,0,0,0,481,484,1,0,0,
        0,482,480,1,0,0,0,482,483,1,0,0,0,483,33,1,0,0,0,484,482,1,0,0,0,
        485,487,3,182,91,0,486,485,1,0,0,0,487,488,1,0,0,0,488,489,1,0,0,
        0,488,486,1,0,0,0,489,500,1,0,0,0,490,491,5,3,0,0,491,492,3,38,19,
        0,492,493,5,4,0,0,493,501,1,0,0,0,494,495,5,3,0,0,495,496,3,38,19,
        0,496,497,5,5,0,0,497,498,3,38,19,0,498,499,5,4,0,0,499,501,1,0,
        0,0,500,490,1,0,0,0,500,494,1,0,0,0,500,501,1,0,0,0,501,35,1,0,0,
        0,502,503,5,49,0,0,503,505,3,182,91,0,504,502,1,0,0,0,504,505,1,
        0,0,0,505,555,1,0,0,0,506,507,5,113,0,0,507,509,5,95,0,0,508,510,
        3,146,73,0,509,508,1,0,0,0,509,510,1,0,0,0,510,512,1,0,0,0,511,513,
        3,44,22,0,512,511,1,0,0,0,512,513,1,0,0,0,513,515,1,0,0,0,514,516,
        5,36,0,0,515,514,1,0,0,0,515,516,1,0,0,0,516,556,1,0,0,0,517,519,
        5,102,0,0,518,517,1,0,0,0,518,519,1,0,0,0,519,520,1,0,0,0,520,523,
        5,104,0,0,521,523,5,140,0,0,522,518,1,0,0,0,522,521,1,0,0,0,523,
        525,1,0,0,0,524,526,3,44,22,0,525,524,1,0,0,0,525,526,1,0,0,0,526,
        556,1,0,0,0,527,528,5,44,0,0,528,529,5,3,0,0,529,530,3,68,34,0,530,
        531,5,4,0,0,531,556,1,0,0,0,532,539,5,56,0,0,533,540,3,38,19,0,534,
        540,3,72,36,0,535,536,5,3,0,0,536,537,3,68,34,0,537,538,5,4,0,0,
        538,540,1,0,0,0,539,533,1,0,0,0,539,534,1,0,0,0,539,535,1,0,0,0,
        540,556,1,0,0,0,541,542,5,45,0,0,542,556,3,194,97,0,543,556,3,42,
        21,0,544,545,5,169,0,0,545,547,5,170,0,0,546,544,1,0,0,0,546,547,
        1,0,0,0,547,548,1,0,0,0,548,549,5,33,0,0,549,550,5,3,0,0,550,551,
        3,68,34,0,551,553,5,4,0,0,552,554,7,3,0,0,553,552,1,0,0,0,553,554,
        1,0,0,0,554,556,1,0,0,0,555,506,1,0,0,0,555,522,1,0,0,0,555,527,
        1,0,0,0,555,532,1,0,0,0,555,541,1,0,0,0,555,543,1,0,0,0,555,546,
        1,0,0,0,556,37,1,0,0,0,557,559,7,4,0,0,558,557,1,0,0,0,558,559,1,
        0,0,0,559,560,1,0,0,0,560,561,5,186,0,0,561,39,1,0,0,0,562,563,5,
        49,0,0,563,565,3,182,91,0,564,562,1,0,0,0,564,565,1,0,0,0,565,603,
        1,0,0,0,566,567,5,113,0,0,567,570,5,95,0,0,568,570,5,140,0,0,569,
        566,1,0,0,0,569,568,1,0,0,0,570,571,1,0,0,0,571,572,5,3,0,0,572,
        577,3,28,14,0,573,574,5,5,0,0,574,576,3,28,14,0,575,573,1,0,0,0,
        576,579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,580,1,0,0,0,
        579,577,1,0,0,0,580,582,5,4,0,0,581,583,3,44,22,0,582,581,1,0,0,
        0,582,583,1,0,0,0,583,604,1,0,0,0,584,585,5,44,0,0,585,586,5,3,0,
        0,586,587,3,68,34,0,587,588,5,4,0,0,588,604,1,0,0,0,589,590,5,74,
        0,0,590,591,5,95,0,0,591,592,5,3,0,0,592,597,3,192,96,0,593,594,
        5,5,0,0,594,596,3,192,96,0,595,593,1,0,0,0,596,599,1,0,0,0,597,595,
        1,0,0,0,597,598,1,0,0,0,598,600,1,0,0,0,599,597,1,0,0,0,600,601,
        5,4,0,0,601,602,3,42,21,0,602,604,1,0,0,0,603,569,1,0,0,0,603,584,
        1,0,0,0,603,589,1,0,0,0,604,41,1,0,0,0,605,606,5,117,0,0,606,618,
        3,196,98,0,607,608,5,3,0,0,608,613,3,192,96,0,609,610,5,5,0,0,610,
        612,3,192,96,0,611,609,1,0,0,0,612,615,1,0,0,0,613,611,1,0,0,0,613,
        614,1,0,0,0,614,616,1,0,0,0,615,613,1,0,0,0,616,617,5,4,0,0,617,
        619,1,0,0,0,618,607,1,0,0,0,618,619,1,0,0,0,619,634,1,0,0,0,620,
        621,5,107,0,0,621,628,7,5,0,0,622,623,5,131,0,0,623,629,7,6,0,0,
        624,629,5,41,0,0,625,629,5,123,0,0,626,627,5,101,0,0,627,629,5,26,
        0,0,628,622,1,0,0,0,628,624,1,0,0,0,628,625,1,0,0,0,628,626,1,0,
        0,0,629,633,1,0,0,0,630,631,5,99,0,0,631,633,3,182,91,0,632,620,
        1,0,0,0,632,630,1,0,0,0,633,636,1,0,0,0,634,632,1,0,0,0,634,635,
        1,0,0,0,635,645,1,0,0,0,636,634,1,0,0,0,637,639,5,102,0,0,638,637,
        1,0,0,0,638,639,1,0,0,0,639,640,1,0,0,0,640,643,5,57,0,0,641,642,
        5,86,0,0,642,644,7,7,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,646,
        1,0,0,0,645,638,1,0,0,0,645,646,1,0,0,0,646,43,1,0,0,0,647,648,5,
        107,0,0,648,649,5,48,0,0,649,650,7,8,0,0,650,45,1,0,0,0,651,653,
        5,50,0,0,652,654,7,2,0,0,653,652,1,0,0,0,653,654,1,0,0,0,654,655,
        1,0,0,0,655,659,5,138,0,0,656,657,5,80,0,0,657,658,5,102,0,0,658,
        660,5,70,0,0,659,656,1,0,0,0,659,660,1,0,0,0,660,664,1,0,0,0,661,
        662,3,186,93,0,662,663,5,2,0,0,663,665,1,0,0,0,664,661,1,0,0,0,664,
        665,1,0,0,0,665,666,1,0,0,0,666,671,3,200,100,0,667,672,5,37,0,0,
        668,672,5,28,0,0,669,670,5,89,0,0,670,672,5,105,0,0,671,667,1,0,
        0,0,671,668,1,0,0,0,671,669,1,0,0,0,671,672,1,0,0,0,672,687,1,0,
        0,0,673,688,5,59,0,0,674,688,5,88,0,0,675,685,5,141,0,0,676,677,
        5,105,0,0,677,682,3,192,96,0,678,679,5,5,0,0,679,681,3,192,96,0,
        680,678,1,0,0,0,681,684,1,0,0,0,682,680,1,0,0,0,682,683,1,0,0,0,
        683,686,1,0,0,0,684,682,1,0,0,0,685,676,1,0,0,0,685,686,1,0,0,0,
        686,688,1,0,0,0,687,673,1,0,0,0,687,674,1,0,0,0,687,675,1,0,0,0,
        688,689,1,0,0,0,689,690,5,107,0,0,690,694,3,188,94,0,691,692,5,73,
        0,0,692,693,5,64,0,0,693,695,5,127,0,0,694,691,1,0,0,0,694,695,1,
        0,0,0,695,698,1,0,0,0,696,697,5,147,0,0,697,699,3,68,34,0,698,696,
        1,0,0,0,698,699,1,0,0,0,699,700,1,0,0,0,700,709,5,38,0,0,701,706,
        3,112,56,0,702,706,3,78,39,0,703,706,3,60,30,0,704,706,3,90,45,0,
        705,701,1,0,0,0,705,702,1,0,0,0,705,703,1,0,0,0,705,704,1,0,0,0,
        706,707,1,0,0,0,707,708,5,1,0,0,708,710,1,0,0,0,709,705,1,0,0,0,
        710,711,1,0,0,0,711,709,1,0,0,0,711,712,1,0,0,0,712,713,1,0,0,0,
        713,714,5,66,0,0,714,47,1,0,0,0,715,717,5,50,0,0,716,718,7,2,0,0,
        717,716,1,0,0,0,717,718,1,0,0,0,718,719,1,0,0,0,719,723,5,145,0,
        0,720,721,5,80,0,0,721,722,5,102,0,0,722,724,5,70,0,0,723,720,1,
        0,0,0,723,724,1,0,0,0,724,728,1,0,0,0,725,726,3,186,93,0,726,727,
        5,2,0,0,727,729,1,0,0,0,728,725,1,0,0,0,728,729,1,0,0,0,729,730,
        1,0,0,0,730,742,3,202,101,0,731,732,5,3,0,0,732,737,3,192,96,0,733,
        734,5,5,0,0,734,736,3,192,96,0,735,733,1,0,0,0,736,739,1,0,0,0,737,
        735,1,0,0,0,737,738,1,0,0,0,738,740,1,0,0,0,739,737,1,0,0,0,740,
        741,5,4,0,0,741,743,1,0,0,0,742,731,1,0,0,0,742,743,1,0,0,0,743,
        744,1,0,0,0,744,745,5,33,0,0,745,746,3,90,45,0,746,49,1,0,0,0,747,
        748,5,50,0,0,748,749,5,146,0,0,749,753,5,132,0,0,750,751,5,80,0,
        0,751,752,5,102,0,0,752,754,5,70,0,0,753,750,1,0,0,0,753,754,1,0,
        0,0,754,758,1,0,0,0,755,756,3,186,93,0,756,757,5,2,0,0,757,759,1,
        0,0,0,758,755,1,0,0,0,758,759,1,0,0,0,759,760,1,0,0,0,760,761,3,
        188,94,0,761,762,5,142,0,0,762,774,3,204,102,0,763,764,5,3,0,0,764,
        769,3,176,88,0,765,766,5,5,0,0,766,768,3,176,88,0,767,765,1,0,0,
        0,768,771,1,0,0,0,769,767,1,0,0,0,769,770,1,0,0,0,770,772,1,0,0,
        0,771,769,1,0,0,0,772,773,5,4,0,0,773,775,1,0,0,0,774,763,1,0,0,
        0,774,775,1,0,0,0,775,51,1,0,0,0,776,778,5,149,0,0,777,779,5,116,
        0,0,778,777,1,0,0,0,778,779,1,0,0,0,779,780,1,0,0,0,780,781,3,54,
        27,0,781,782,5,33,0,0,782,783,5,3,0,0,783,784,3,90,45,0,784,794,
        5,4,0,0,785,786,5,5,0,0,786,787,3,54,27,0,787,788,5,33,0,0,788,789,
        5,3,0,0,789,790,3,90,45,0,790,791,5,4,0,0,791,793,1,0,0,0,792,785,
        1,0,0,0,793,796,1,0,0,0,794,792,1,0,0,0,794,795,1,0,0,0,795,53,1,
        0,0,0,796,794,1,0,0,0,797,809,3,188,94,0,798,799,5,3,0,0,799,804,
        3,192,96,0,800,801,5,5,0,0,801,803,3,192,96,0,802,800,1,0,0,0,803,
        806,1,0,0,0,804,802,1,0,0,0,804,805,1,0,0,0,805,807,1,0,0,0,806,
        804,1,0,0,0,807,808,5,4,0,0,808,810,1,0,0,0,809,798,1,0,0,0,809,
        810,1,0,0,0,810,55,1,0,0,0,811,812,3,54,27,0,812,813,5,33,0,0,813,
        814,5,3,0,0,814,815,3,168,84,0,815,817,5,139,0,0,816,818,5,29,0,
        0,817,816,1,0,0,0,817,818,1,0,0,0,818,819,1,0,0,0,819,820,3,170,
        85,0,820,821,5,4,0,0,821,57,1,0,0,0,822,834,3,188,94,0,823,824,5,
        3,0,0,824,829,3,192,96,0,825,826,5,5,0,0,826,828,3,192,96,0,827,
        825,1,0,0,0,828,831,1,0,0,0,829,827,1,0,0,0,829,830,1,0,0,0,830,
        832,1,0,0,0,831,829,1,0,0,0,832,833,5,4,0,0,833,835,1,0,0,0,834,
        823,1,0,0,0,834,835,1,0,0,0,835,836,1,0,0,0,836,837,5,33,0,0,837,
        838,5,3,0,0,838,839,3,90,45,0,839,840,5,4,0,0,840,59,1,0,0,0,841,
        843,3,52,26,0,842,841,1,0,0,0,842,843,1,0,0,0,843,844,1,0,0,0,844,
        845,5,59,0,0,845,846,5,75,0,0,846,849,3,118,59,0,847,848,5,148,0,
        0,848,850,3,68,34,0,849,847,1,0,0,0,849,850,1,0,0,0,850,852,1,0,
        0,0,851,853,3,80,40,0,852,851,1,0,0,0,852,853,1,0,0,0,853,61,1,0,
        0,0,854,856,3,52,26,0,855,854,1,0,0,0,855,856,1,0,0,0,856,857,1,
        0,0,0,857,858,5,59,0,0,858,859,5,75,0,0,859,862,3,118,59,0,860,861,
        5,148,0,0,861,863,3,68,34,0,862,860,1,0,0,0,862,863,1,0,0,0,863,
        865,1,0,0,0,864,866,3,80,40,0,865,864,1,0,0,0,865,866,1,0,0,0,866,
        871,1,0,0,0,867,869,3,140,70,0,868,867,1,0,0,0,868,869,1,0,0,0,869,
        870,1,0,0,0,870,872,3,142,71,0,871,868,1,0,0,0,871,872,1,0,0,0,872,
        63,1,0,0,0,873,875,5,61,0,0,874,876,5,55,0,0,875,874,1,0,0,0,875,
        876,1,0,0,0,876,877,1,0,0,0,877,878,3,186,93,0,878,65,1,0,0,0,879,
        880,5,63,0,0,880,883,7,9,0,0,881,882,5,80,0,0,882,884,5,70,0,0,883,
        881,1,0,0,0,883,884,1,0,0,0,884,888,1,0,0,0,885,886,3,186,93,0,886,
        887,5,2,0,0,887,889,1,0,0,0,888,885,1,0,0,0,888,889,1,0,0,0,889,
        890,1,0,0,0,890,891,3,228,114,0,891,67,1,0,0,0,892,893,6,34,-1,0,
        893,981,3,72,36,0,894,981,5,187,0,0,895,896,3,186,93,0,896,897,5,
        2,0,0,897,899,1,0,0,0,898,895,1,0,0,0,898,899,1,0,0,0,899,900,1,
        0,0,0,900,901,3,188,94,0,901,902,5,2,0,0,902,904,1,0,0,0,903,898,
        1,0,0,0,903,904,1,0,0,0,904,905,1,0,0,0,905,981,3,192,96,0,906,907,
        3,172,86,0,907,908,3,68,34,21,908,981,1,0,0,0,909,910,3,184,92,0,
        910,923,5,3,0,0,911,913,5,62,0,0,912,911,1,0,0,0,912,913,1,0,0,0,
        913,914,1,0,0,0,914,919,3,68,34,0,915,916,5,5,0,0,916,918,3,68,34,
        0,917,915,1,0,0,0,918,921,1,0,0,0,919,917,1,0,0,0,919,920,1,0,0,
        0,920,924,1,0,0,0,921,919,1,0,0,0,922,924,5,7,0,0,923,912,1,0,0,
        0,923,922,1,0,0,0,923,924,1,0,0,0,924,925,1,0,0,0,925,927,5,4,0,
        0,926,928,3,122,61,0,927,926,1,0,0,0,927,928,1,0,0,0,928,930,1,0,
        0,0,929,931,3,126,63,0,930,929,1,0,0,0,930,931,1,0,0,0,931,981,1,
        0,0,0,932,933,5,3,0,0,933,938,3,68,34,0,934,935,5,5,0,0,935,937,
        3,68,34,0,936,934,1,0,0,0,937,940,1,0,0,0,938,936,1,0,0,0,938,939,
        1,0,0,0,939,941,1,0,0,0,940,938,1,0,0,0,941,942,5,4,0,0,942,981,
        1,0,0,0,943,944,5,43,0,0,944,945,5,3,0,0,945,946,3,68,34,0,946,947,
        5,33,0,0,947,948,3,34,17,0,948,949,5,4,0,0,949,981,1,0,0,0,950,952,
        5,102,0,0,951,950,1,0,0,0,951,952,1,0,0,0,952,953,1,0,0,0,953,955,
        5,70,0,0,954,951,1,0,0,0,954,955,1,0,0,0,955,956,1,0,0,0,956,957,
        5,3,0,0,957,958,3,90,45,0,958,959,5,4,0,0,959,981,1,0,0,0,960,962,
        5,42,0,0,961,963,3,68,34,0,962,961,1,0,0,0,962,963,1,0,0,0,963,969,
        1,0,0,0,964,965,5,147,0,0,965,966,3,68,34,0,966,967,5,135,0,0,967,
        968,3,68,34,0,968,970,1,0,0,0,969,964,1,0,0,0,970,971,1,0,0,0,971,
        969,1,0,0,0,971,972,1,0,0,0,972,975,1,0,0,0,973,974,5,65,0,0,974,
        976,3,68,34,0,975,973,1,0,0,0,975,976,1,0,0,0,976,977,1,0,0,0,977,
        978,5,66,0,0,978,981,1,0,0,0,979,981,3,70,35,0,980,892,1,0,0,0,980,
        894,1,0,0,0,980,903,1,0,0,0,980,906,1,0,0,0,980,909,1,0,0,0,980,
        932,1,0,0,0,980,943,1,0,0,0,980,954,1,0,0,0,980,960,1,0,0,0,980,
        979,1,0,0,0,981,1107,1,0,0,0,982,983,10,20,0,0,983,984,5,11,0,0,
        984,1106,3,68,34,21,985,986,10,19,0,0,986,987,7,10,0,0,987,1106,
        3,68,34,20,988,989,10,18,0,0,989,990,7,4,0,0,990,1106,3,68,34,19,
        991,992,10,17,0,0,992,993,7,11,0,0,993,1106,3,68,34,18,994,995,10,
        16,0,0,995,996,7,12,0,0,996,1106,3,68,34,17,997,1016,10,15,0,0,998,
        1017,5,6,0,0,999,1017,5,22,0,0,1000,1017,5,23,0,0,1001,1017,5,24,
        0,0,1002,1017,5,92,0,0,1003,1004,5,92,0,0,1004,1017,5,102,0,0,1005,
        1007,5,92,0,0,1006,1008,5,102,0,0,1007,1006,1,0,0,0,1007,1008,1,
        0,0,0,1008,1009,1,0,0,0,1009,1010,5,62,0,0,1010,1017,5,75,0,0,1011,
        1017,5,83,0,0,1012,1017,5,97,0,0,1013,1017,5,77,0,0,1014,1017,5,
        99,0,0,1015,1017,5,118,0,0,1016,998,1,0,0,0,1016,999,1,0,0,0,1016,
        1000,1,0,0,0,1016,1001,1,0,0,0,1016,1002,1,0,0,0,1016,1003,1,0,0,
        0,1016,1005,1,0,0,0,1016,1011,1,0,0,0,1016,1012,1,0,0,0,1016,1013,
        1,0,0,0,1016,1014,1,0,0,0,1016,1015,1,0,0,0,1017,1018,1,0,0,0,1018,
        1106,3,68,34,16,1019,1020,10,14,0,0,1020,1021,5,32,0,0,1021,1106,
        3,68,34,15,1022,1023,10,13,0,0,1023,1024,5,108,0,0,1024,1106,3,68,
        34,14,1025,1026,10,6,0,0,1026,1028,5,92,0,0,1027,1029,5,102,0,0,
        1028,1027,1,0,0,0,1028,1029,1,0,0,0,1029,1030,1,0,0,0,1030,1106,
        3,68,34,7,1031,1033,10,5,0,0,1032,1034,5,102,0,0,1033,1032,1,0,0,
        0,1033,1034,1,0,0,0,1034,1035,1,0,0,0,1035,1036,5,39,0,0,1036,1037,
        3,68,34,0,1037,1038,5,32,0,0,1038,1039,3,68,34,6,1039,1106,1,0,0,
        0,1040,1041,10,9,0,0,1041,1042,5,45,0,0,1042,1106,3,194,97,0,1043,
        1045,10,8,0,0,1044,1046,5,102,0,0,1045,1044,1,0,0,0,1045,1046,1,
        0,0,0,1046,1047,1,0,0,0,1047,1048,7,13,0,0,1048,1051,3,68,34,0,1049,
        1050,5,67,0,0,1050,1052,3,68,34,0,1051,1049,1,0,0,0,1051,1052,1,
        0,0,0,1052,1106,1,0,0,0,1053,1058,10,7,0,0,1054,1059,5,93,0,0,1055,
        1059,5,103,0,0,1056,1057,5,102,0,0,1057,1059,5,104,0,0,1058,1054,
        1,0,0,0,1058,1055,1,0,0,0,1058,1056,1,0,0,0,1059,1106,1,0,0,0,1060,
        1062,10,4,0,0,1061,1063,5,102,0,0,1062,1061,1,0,0,0,1062,1063,1,
        0,0,0,1063,1064,1,0,0,0,1064,1103,5,83,0,0,1065,1075,5,3,0,0,1066,
        1076,3,90,45,0,1067,1072,3,68,34,0,1068,1069,5,5,0,0,1069,1071,3,
        68,34,0,1070,1068,1,0,0,0,1071,1074,1,0,0,0,1072,1070,1,0,0,0,1072,
        1073,1,0,0,0,1073,1076,1,0,0,0,1074,1072,1,0,0,0,1075,1066,1,0,0,
        0,1075,1067,1,0,0,0,1075,1076,1,0,0,0,1076,1077,1,0,0,0,1077,1104,
        5,4,0,0,1078,1079,3,186,93,0,1079,1080,5,2,0,0,1080,1082,1,0,0,0,
        1081,1078,1,0,0,0,1081,1082,1,0,0,0,1082,1083,1,0,0,0,1083,1104,
        3,188,94,0,1084,1085,3,186,93,0,1085,1086,5,2,0,0,1086,1088,1,0,
        0,0,1087,1084,1,0,0,0,1087,1088,1,0,0,0,1088,1089,1,0,0,0,1089,1090,
        3,226,113,0,1090,1099,5,3,0,0,1091,1096,3,68,34,0,1092,1093,5,5,
        0,0,1093,1095,3,68,34,0,1094,1092,1,0,0,0,1095,1098,1,0,0,0,1096,
        1094,1,0,0,0,1096,1097,1,0,0,0,1097,1100,1,0,0,0,1098,1096,1,0,0,
        0,1099,1091,1,0,0,0,1099,1100,1,0,0,0,1100,1101,1,0,0,0,1101,1102,
        5,4,0,0,1102,1104,1,0,0,0,1103,1065,1,0,0,0,1103,1081,1,0,0,0,1103,
        1087,1,0,0,0,1104,1106,1,0,0,0,1105,982,1,0,0,0,1105,985,1,0,0,0,
        1105,988,1,0,0,0,1105,991,1,0,0,0,1105,994,1,0,0,0,1105,997,1,0,
        0,0,1105,1019,1,0,0,0,1105,1022,1,0,0,0,1105,1025,1,0,0,0,1105,1031,
        1,0,0,0,1105,1040,1,0,0,0,1105,1043,1,0,0,0,1105,1053,1,0,0,0,1105,
        1060,1,0,0,0,1106,1109,1,0,0,0,1107,1105,1,0,0,0,1107,1108,1,0,0,
        0,1108,69,1,0,0,0,1109,1107,1,0,0,0,1110,1111,5,115,0,0,1111,1116,
        5,3,0,0,1112,1117,5,81,0,0,1113,1114,7,14,0,0,1114,1115,5,5,0,0,
        1115,1117,3,174,87,0,1116,1112,1,0,0,0,1116,1113,1,0,0,0,1117,1118,
        1,0,0,0,1118,1119,5,4,0,0,1119,71,1,0,0,0,1120,1121,7,15,0,0,1121,
        73,1,0,0,0,1122,1123,5,3,0,0,1123,1128,3,68,34,0,1124,1125,5,5,0,
        0,1125,1127,3,68,34,0,1126,1124,1,0,0,0,1127,1130,1,0,0,0,1128,1126,
        1,0,0,0,1128,1129,1,0,0,0,1129,1131,1,0,0,0,1130,1128,1,0,0,0,1131,
        1132,5,4,0,0,1132,75,1,0,0,0,1133,1134,5,144,0,0,1134,1139,3,74,
        37,0,1135,1136,5,5,0,0,1136,1138,3,74,37,0,1137,1135,1,0,0,0,1138,
        1141,1,0,0,0,1139,1137,1,0,0,0,1139,1140,1,0,0,0,1140,77,1,0,0,0,
        1141,1139,1,0,0,0,1142,1144,3,52,26,0,1143,1142,1,0,0,0,1143,1144,
        1,0,0,0,1144,1150,1,0,0,0,1145,1151,5,88,0,0,1146,1151,5,122,0,0,
        1147,1148,5,88,0,0,1148,1149,5,108,0,0,1149,1151,7,8,0,0,1150,1145,
        1,0,0,0,1150,1146,1,0,0,0,1150,1147,1,0,0,0,1151,1152,1,0,0,0,1152,
        1156,5,91,0,0,1153,1154,3,186,93,0,1154,1155,5,2,0,0,1155,1157,1,
        0,0,0,1156,1153,1,0,0,0,1156,1157,1,0,0,0,1157,1158,1,0,0,0,1158,
        1161,3,188,94,0,1159,1160,5,33,0,0,1160,1162,3,210,105,0,1161,1159,
        1,0,0,0,1161,1162,1,0,0,0,1162,1174,1,0,0,0,1163,1164,5,3,0,0,1164,
        1169,3,192,96,0,1165,1166,5,5,0,0,1166,1168,3,192,96,0,1167,1165,
        1,0,0,0,1168,1171,1,0,0,0,1169,1167,1,0,0,0,1169,1170,1,0,0,0,1170,
        1172,1,0,0,0,1171,1169,1,0,0,0,1172,1173,5,4,0,0,1173,1175,1,0,0,
        0,1174,1163,1,0,0,0,1174,1175,1,0,0,0,1175,1185,1,0,0,0,1176,1179,
        3,76,38,0,1177,1179,3,90,45,0,1178,1176,1,0,0,0,1178,1177,1,0,0,
        0,1179,1181,1,0,0,0,1180,1182,3,82,41,0,1181,1180,1,0,0,0,1181,1182,
        1,0,0,0,1182,1186,1,0,0,0,1183,1184,5,56,0,0,1184,1186,5,144,0,0,
        1185,1178,1,0,0,0,1185,1183,1,0,0,0,1186,1188,1,0,0,0,1187,1189,
        3,80,40,0,1188,1187,1,0,0,0,1188,1189,1,0,0,0,1189,79,1,0,0,0,1190,
        1191,5,124,0,0,1191,1196,3,104,52,0,1192,1193,5,5,0,0,1193,1195,
        3,104,52,0,1194,1192,1,0,0,0,1195,1198,1,0,0,0,1196,1194,1,0,0,0,
        1196,1197,1,0,0,0,1197,81,1,0,0,0,1198,1196,1,0,0,0,1199,1200,5,
        107,0,0,1200,1215,5,48,0,0,1201,1202,5,3,0,0,1202,1207,3,28,14,0,
        1203,1204,5,5,0,0,1204,1206,3,28,14,0,1205,1203,1,0,0,0,1206,1209,
        1,0,0,0,1207,1205,1,0,0,0,1207,1208,1,0,0,0,1208,1210,1,0,0,0,1209,
        1207,1,0,0,0,1210,1213,5,4,0,0,1211,1212,5,148,0,0,1212,1214,3,68,
        34,0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,1216,1,0,0,0,1215,
        1201,1,0,0,0,1215,1216,1,0,0,0,1216,1217,1,0,0,0,1217,1244,5,183,
        0,0,1218,1245,5,184,0,0,1219,1220,5,141,0,0,1220,1223,5,131,0,0,
        1221,1224,3,192,96,0,1222,1224,3,114,57,0,1223,1221,1,0,0,0,1223,
        1222,1,0,0,0,1224,1225,1,0,0,0,1225,1226,5,6,0,0,1226,1237,3,68,
        34,0,1227,1230,5,5,0,0,1228,1231,3,192,96,0,1229,1231,3,114,57,0,
        1230,1228,1,0,0,0,1230,1229,1,0,0,0,1231,1232,1,0,0,0,1232,1233,
        5,6,0,0,1233,1234,3,68,34,0,1234,1236,1,0,0,0,1235,1227,1,0,0,0,
        1236,1239,1,0,0,0,1237,1235,1,0,0,0,1237,1238,1,0,0,0,1238,1242,
        1,0,0,0,1239,1237,1,0,0,0,1240,1241,5,148,0,0,1241,1243,3,68,34,
        0,1242,1240,1,0,0,0,1242,1243,1,0,0,0,1243,1245,1,0,0,0,1244,1218,
        1,0,0,0,1244,1219,1,0,0,0,1245,83,1,0,0,0,1246,1250,5,112,0,0,1247,
        1248,3,186,93,0,1248,1249,5,2,0,0,1249,1251,1,0,0,0,1250,1247,1,
        0,0,0,1250,1251,1,0,0,0,1251,1252,1,0,0,0,1252,1259,3,206,103,0,
        1253,1254,5,6,0,0,1254,1260,3,86,43,0,1255,1256,5,3,0,0,1256,1257,
        3,86,43,0,1257,1258,5,4,0,0,1258,1260,1,0,0,0,1259,1253,1,0,0,0,
        1259,1255,1,0,0,0,1259,1260,1,0,0,0,1260,85,1,0,0,0,1261,1265,3,
        38,19,0,1262,1265,3,182,91,0,1263,1265,5,188,0,0,1264,1261,1,0,0,
        0,1264,1262,1,0,0,0,1264,1263,1,0,0,0,1265,87,1,0,0,0,1266,1277,
        5,119,0,0,1267,1278,3,194,97,0,1268,1269,3,186,93,0,1269,1270,5,
        2,0,0,1270,1272,1,0,0,0,1271,1268,1,0,0,0,1271,1272,1,0,0,0,1272,
        1275,1,0,0,0,1273,1276,3,188,94,0,1274,1276,3,198,99,0,1275,1273,
        1,0,0,0,1275,1274,1,0,0,0,1276,1278,1,0,0,0,1277,1267,1,0,0,0,1277,
        1271,1,0,0,0,1277,1278,1,0,0,0,1278,89,1,0,0,0,1279,1281,3,138,69,
        0,1280,1279,1,0,0,0,1280,1281,1,0,0,0,1281,1282,1,0,0,0,1282,1288,
        3,94,47,0,1283,1284,3,110,55,0,1284,1285,3,94,47,0,1285,1287,1,0,
        0,0,1286,1283,1,0,0,0,1287,1290,1,0,0,0,1288,1286,1,0,0,0,1288,1289,
        1,0,0,0,1289,1292,1,0,0,0,1290,1288,1,0,0,0,1291,1293,3,140,70,0,
        1292,1291,1,0,0,0,1292,1293,1,0,0,0,1293,1295,1,0,0,0,1294,1296,
        3,142,71,0,1295,1294,1,0,0,0,1295,1296,1,0,0,0,1296,91,1,0,0,0,1297,
        1305,3,102,51,0,1298,1299,3,106,53,0,1299,1301,3,102,51,0,1300,1302,
        3,108,54,0,1301,1300,1,0,0,0,1301,1302,1,0,0,0,1302,1304,1,0,0,0,
        1303,1298,1,0,0,0,1304,1307,1,0,0,0,1305,1303,1,0,0,0,1305,1306,
        1,0,0,0,1306,93,1,0,0,0,1307,1305,1,0,0,0,1308,1310,5,130,0,0,1309,
        1311,7,16,0,0,1310,1309,1,0,0,0,1310,1311,1,0,0,0,1311,1312,1,0,
        0,0,1312,1317,3,104,52,0,1313,1314,5,5,0,0,1314,1316,3,104,52,0,
        1315,1313,1,0,0,0,1316,1319,1,0,0,0,1317,1315,1,0,0,0,1317,1318,
        1,0,0,0,1318,1332,1,0,0,0,1319,1317,1,0,0,0,1320,1330,5,75,0,0,1321,
        1326,3,102,51,0,1322,1323,5,5,0,0,1323,1325,3,102,51,0,1324,1322,
        1,0,0,0,1325,1328,1,0,0,0,1326,1324,1,0,0,0,1326,1327,1,0,0,0,1327,
        1331,1,0,0,0,1328,1326,1,0,0,0,1329,1331,3,92,46,0,1330,1321,1,0,
        0,0,1330,1329,1,0,0,0,1331,1333,1,0,0,0,1332,1320,1,0,0,0,1332,1333,
        1,0,0,0,1333,1336,1,0,0,0,1334,1335,5,148,0,0,1335,1337,3,68,34,
        0,1336,1334,1,0,0,0,1336,1337,1,0,0,0,1337,1352,1,0,0,0,1338,1339,
        5,78,0,0,1339,1340,5,40,0,0,1340,1345,3,68,34,0,1341,1342,5,5,0,
        0,1342,1344,3,68,34,0,1343,1341,1,0,0,0,1344,1347,1,0,0,0,1345,1343,
        1,0,0,0,1345,1346,1,0,0,0,1346,1350,1,0,0,0,1347,1345,1,0,0,0,1348,
        1349,5,79,0,0,1349,1351,3,68,34,0,1350,1348,1,0,0,0,1350,1351,1,
        0,0,0,1351,1353,1,0,0,0,1352,1338,1,0,0,0,1352,1353,1,0,0,0,1353,
        1368,1,0,0,0,1354,1355,5,174,0,0,1355,1356,3,214,107,0,1356,1357,
        5,33,0,0,1357,1365,3,124,62,0,1358,1359,5,5,0,0,1359,1360,3,214,
        107,0,1360,1361,5,33,0,0,1361,1362,3,124,62,0,1362,1364,1,0,0,0,
        1363,1358,1,0,0,0,1364,1367,1,0,0,0,1365,1363,1,0,0,0,1365,1366,
        1,0,0,0,1366,1369,1,0,0,0,1367,1365,1,0,0,0,1368,1354,1,0,0,0,1368,
        1369,1,0,0,0,1369,1372,1,0,0,0,1370,1372,3,76,38,0,1371,1308,1,0,
        0,0,1371,1370,1,0,0,0,1372,95,1,0,0,0,1373,1374,3,90,45,0,1374,97,
        1,0,0,0,1375,1377,3,138,69,0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,
        1377,1378,1,0,0,0,1378,1380,3,94,47,0,1379,1381,3,140,70,0,1380,
        1379,1,0,0,0,1380,1381,1,0,0,0,1381,1383,1,0,0,0,1382,1384,3,142,
        71,0,1383,1382,1,0,0,0,1383,1384,1,0,0,0,1384,99,1,0,0,0,1385,1387,
        3,138,69,0,1386,1385,1,0,0,0,1386,1387,1,0,0,0,1387,1388,1,0,0,0,
        1388,1398,3,94,47,0,1389,1391,5,139,0,0,1390,1392,5,29,0,0,1391,
        1390,1,0,0,0,1391,1392,1,0,0,0,1392,1396,1,0,0,0,1393,1396,5,90,
        0,0,1394,1396,5,68,0,0,1395,1389,1,0,0,0,1395,1393,1,0,0,0,1395,
        1394,1,0,0,0,1396,1397,1,0,0,0,1397,1399,3,94,47,0,1398,1395,1,0,
        0,0,1399,1400,1,0,0,0,1400,1398,1,0,0,0,1400,1401,1,0,0,0,1401,1403,
        1,0,0,0,1402,1404,3,140,70,0,1403,1402,1,0,0,0,1403,1404,1,0,0,0,
        1404,1406,1,0,0,0,1405,1407,3,142,71,0,1406,1405,1,0,0,0,1406,1407,
        1,0,0,0,1407,101,1,0,0,0,1408,1409,3,186,93,0,1409,1410,5,2,0,0,
        1410,1412,1,0,0,0,1411,1408,1,0,0,0,1411,1412,1,0,0,0,1412,1413,
        1,0,0,0,1413,1418,3,188,94,0,1414,1416,5,33,0,0,1415,1414,1,0,0,
        0,1415,1416,1,0,0,0,1416,1417,1,0,0,0,1417,1419,3,210,105,0,1418,
        1415,1,0,0,0,1418,1419,1,0,0,0,1419,1425,1,0,0,0,1420,1421,5,85,
        0,0,1421,1422,5,40,0,0,1422,1426,3,198,99,0,1423,1424,5,102,0,0,
        1424,1426,5,85,0,0,1425,1420,1,0,0,0,1425,1423,1,0,0,0,1425,1426,
        1,0,0,0,1426,1473,1,0,0,0,1427,1428,3,186,93,0,1428,1429,5,2,0,0,
        1429,1431,1,0,0,0,1430,1427,1,0,0,0,1430,1431,1,0,0,0,1431,1432,
        1,0,0,0,1432,1433,3,226,113,0,1433,1434,5,3,0,0,1434,1439,3,68,34,
        0,1435,1436,5,5,0,0,1436,1438,3,68,34,0,1437,1435,1,0,0,0,1438,1441,
        1,0,0,0,1439,1437,1,0,0,0,1439,1440,1,0,0,0,1440,1442,1,0,0,0,1441,
        1439,1,0,0,0,1442,1447,5,4,0,0,1443,1445,5,33,0,0,1444,1443,1,0,
        0,0,1444,1445,1,0,0,0,1445,1446,1,0,0,0,1446,1448,3,210,105,0,1447,
        1444,1,0,0,0,1447,1448,1,0,0,0,1448,1473,1,0,0,0,1449,1459,5,3,0,
        0,1450,1455,3,102,51,0,1451,1452,5,5,0,0,1452,1454,3,102,51,0,1453,
        1451,1,0,0,0,1454,1457,1,0,0,0,1455,1453,1,0,0,0,1455,1456,1,0,0,
        0,1456,1460,1,0,0,0,1457,1455,1,0,0,0,1458,1460,3,92,46,0,1459,1450,
        1,0,0,0,1459,1458,1,0,0,0,1460,1461,1,0,0,0,1461,1462,5,4,0,0,1462,
        1473,1,0,0,0,1463,1464,5,3,0,0,1464,1465,3,90,45,0,1465,1470,5,4,
        0,0,1466,1468,5,33,0,0,1467,1466,1,0,0,0,1467,1468,1,0,0,0,1468,
        1469,1,0,0,0,1469,1471,3,210,105,0,1470,1467,1,0,0,0,1470,1471,1,
        0,0,0,1471,1473,1,0,0,0,1472,1411,1,0,0,0,1472,1430,1,0,0,0,1472,
        1449,1,0,0,0,1472,1463,1,0,0,0,1473,103,1,0,0,0,1474,1487,5,7,0,
        0,1475,1476,3,188,94,0,1476,1477,5,2,0,0,1477,1478,5,7,0,0,1478,
        1487,1,0,0,0,1479,1484,3,68,34,0,1480,1482,5,33,0,0,1481,1480,1,
        0,0,0,1481,1482,1,0,0,0,1482,1483,1,0,0,0,1483,1485,3,178,89,0,1484,
        1481,1,0,0,0,1484,1485,1,0,0,0,1485,1487,1,0,0,0,1486,1474,1,0,0,
        0,1486,1475,1,0,0,0,1486,1479,1,0,0,0,1487,105,1,0,0,0,1488,1502,
        5,5,0,0,1489,1491,5,100,0,0,1490,1489,1,0,0,0,1490,1491,1,0,0,0,
        1491,1498,1,0,0,0,1492,1494,7,17,0,0,1493,1495,5,110,0,0,1494,1493,
        1,0,0,0,1494,1495,1,0,0,0,1495,1499,1,0,0,0,1496,1499,5,87,0,0,1497,
        1499,5,51,0,0,1498,1492,1,0,0,0,1498,1496,1,0,0,0,1498,1497,1,0,
        0,0,1498,1499,1,0,0,0,1499,1500,1,0,0,0,1500,1502,5,94,0,0,1501,
        1488,1,0,0,0,1501,1490,1,0,0,0,1502,107,1,0,0,0,1503,1504,5,107,
        0,0,1504,1518,3,68,34,0,1505,1506,5,142,0,0,1506,1507,5,3,0,0,1507,
        1512,3,192,96,0,1508,1509,5,5,0,0,1509,1511,3,192,96,0,1510,1508,
        1,0,0,0,1511,1514,1,0,0,0,1512,1510,1,0,0,0,1512,1513,1,0,0,0,1513,
        1515,1,0,0,0,1514,1512,1,0,0,0,1515,1516,5,4,0,0,1516,1518,1,0,0,
        0,1517,1503,1,0,0,0,1517,1505,1,0,0,0,1518,109,1,0,0,0,1519,1521,
        5,139,0,0,1520,1522,5,29,0,0,1521,1520,1,0,0,0,1521,1522,1,0,0,0,
        1522,1526,1,0,0,0,1523,1526,5,90,0,0,1524,1526,5,68,0,0,1525,1519,
        1,0,0,0,1525,1523,1,0,0,0,1525,1524,1,0,0,0,1526,111,1,0,0,0,1527,
        1529,3,52,26,0,1528,1527,1,0,0,0,1528,1529,1,0,0,0,1529,1530,1,0,
        0,0,1530,1533,5,141,0,0,1531,1532,5,108,0,0,1532,1534,7,8,0,0,1533,
        1531,1,0,0,0,1533,1534,1,0,0,0,1534,1535,1,0,0,0,1535,1536,3,118,
        59,0,1536,1539,5,131,0,0,1537,1540,3,192,96,0,1538,1540,3,114,57,
        0,1539,1537,1,0,0,0,1539,1538,1,0,0,0,1540,1541,1,0,0,0,1541,1542,
        5,6,0,0,1542,1553,3,68,34,0,1543,1546,5,5,0,0,1544,1547,3,192,96,
        0,1545,1547,3,114,57,0,1546,1544,1,0,0,0,1546,1545,1,0,0,0,1547,
        1548,1,0,0,0,1548,1549,5,6,0,0,1549,1550,3,68,34,0,1550,1552,1,0,
        0,0,1551,1543,1,0,0,0,1552,1555,1,0,0,0,1553,1551,1,0,0,0,1553,1554,
        1,0,0,0,1554,1568,1,0,0,0,1555,1553,1,0,0,0,1556,1566,5,75,0,0,1557,
        1562,3,102,51,0,1558,1559,5,5,0,0,1559,1561,3,102,51,0,1560,1558,
        1,0,0,0,1561,1564,1,0,0,0,1562,1560,1,0,0,0,1562,1563,1,0,0,0,1563,
        1567,1,0,0,0,1564,1562,1,0,0,0,1565,1567,3,92,46,0,1566,1557,1,0,
        0,0,1566,1565,1,0,0,0,1567,1569,1,0,0,0,1568,1556,1,0,0,0,1568,1569,
        1,0,0,0,1569,1572,1,0,0,0,1570,1571,5,148,0,0,1571,1573,3,68,34,
        0,1572,1570,1,0,0,0,1572,1573,1,0,0,0,1573,1575,1,0,0,0,1574,1576,
        3,80,40,0,1575,1574,1,0,0,0,1575,1576,1,0,0,0,1576,113,1,0,0,0,1577,
        1578,5,3,0,0,1578,1583,3,192,96,0,1579,1580,5,5,0,0,1580,1582,3,
        192,96,0,1581,1579,1,0,0,0,1582,1585,1,0,0,0,1583,1581,1,0,0,0,1583,
        1584,1,0,0,0,1584,1586,1,0,0,0,1585,1583,1,0,0,0,1586,1587,5,4,0,
        0,1587,115,1,0,0,0,1588,1590,3,52,26,0,1589,1588,1,0,0,0,1589,1590,
        1,0,0,0,1590,1591,1,0,0,0,1591,1594,5,141,0,0,1592,1593,5,108,0,
        0,1593,1595,7,8,0,0,1594,1592,1,0,0,0,1594,1595,1,0,0,0,1595,1596,
        1,0,0,0,1596,1597,3,118,59,0,1597,1600,5,131,0,0,1598,1601,3,192,
        96,0,1599,1601,3,114,57,0,1600,1598,1,0,0,0,1600,1599,1,0,0,0,1601,
        1602,1,0,0,0,1602,1603,5,6,0,0,1603,1614,3,68,34,0,1604,1607,5,5,
        0,0,1605,1608,3,192,96,0,1606,1608,3,114,57,0,1607,1605,1,0,0,0,
        1607,1606,1,0,0,0,1608,1609,1,0,0,0,1609,1610,5,6,0,0,1610,1611,
        3,68,34,0,1611,1613,1,0,0,0,1612,1604,1,0,0,0,1613,1616,1,0,0,0,
        1614,1612,1,0,0,0,1614,1615,1,0,0,0,1615,1619,1,0,0,0,1616,1614,
        1,0,0,0,1617,1618,5,148,0,0,1618,1620,3,68,34,0,1619,1617,1,0,0,
        0,1619,1620,1,0,0,0,1620,1622,1,0,0,0,1621,1623,3,80,40,0,1622,1621,
        1,0,0,0,1622,1623,1,0,0,0,1623,1628,1,0,0,0,1624,1626,3,140,70,0,
        1625,1624,1,0,0,0,1625,1626,1,0,0,0,1626,1627,1,0,0,0,1627,1629,
        3,142,71,0,1628,1625,1,0,0,0,1628,1629,1,0,0,0,1629,117,1,0,0,0,
        1630,1631,3,186,93,0,1631,1632,5,2,0,0,1632,1634,1,0,0,0,1633,1630,
        1,0,0,0,1633,1634,1,0,0,0,1634,1635,1,0,0,0,1635,1638,3,188,94,0,
        1636,1637,5,33,0,0,1637,1639,3,216,108,0,1638,1636,1,0,0,0,1638,
        1639,1,0,0,0,1639,1645,1,0,0,0,1640,1641,5,85,0,0,1641,1642,5,40,
        0,0,1642,1646,3,198,99,0,1643,1644,5,102,0,0,1644,1646,5,85,0,0,
        1645,1640,1,0,0,0,1645,1643,1,0,0,0,1645,1646,1,0,0,0,1646,119,1,
        0,0,0,1647,1649,5,143,0,0,1648,1650,3,186,93,0,1649,1648,1,0,0,0,
        1649,1650,1,0,0,0,1650,1653,1,0,0,0,1651,1652,5,91,0,0,1652,1654,
        3,218,109,0,1653,1651,1,0,0,0,1653,1654,1,0,0,0,1654,121,1,0,0,0,
        1655,1656,5,178,0,0,1656,1657,5,3,0,0,1657,1658,5,148,0,0,1658,1659,
        3,68,34,0,1659,1660,5,4,0,0,1660,123,1,0,0,0,1661,1663,5,3,0,0,1662,
        1664,3,220,110,0,1663,1662,1,0,0,0,1663,1664,1,0,0,0,1664,1675,1,
        0,0,0,1665,1666,5,153,0,0,1666,1667,5,40,0,0,1667,1672,3,68,34,0,
        1668,1669,5,5,0,0,1669,1671,3,68,34,0,1670,1668,1,0,0,0,1671,1674,
        1,0,0,0,1672,1670,1,0,0,0,1672,1673,1,0,0,0,1673,1676,1,0,0,0,1674,
        1672,1,0,0,0,1675,1665,1,0,0,0,1675,1676,1,0,0,0,1676,1677,1,0,0,
        0,1677,1678,5,109,0,0,1678,1679,5,40,0,0,1679,1684,3,144,72,0,1680,
        1681,5,5,0,0,1681,1683,3,144,72,0,1682,1680,1,0,0,0,1683,1686,1,
        0,0,0,1684,1682,1,0,0,0,1684,1685,1,0,0,0,1685,1688,1,0,0,0,1686,
        1684,1,0,0,0,1687,1689,3,128,64,0,1688,1687,1,0,0,0,1688,1689,1,
        0,0,0,1689,1690,1,0,0,0,1690,1691,5,4,0,0,1691,125,1,0,0,0,1692,
        1726,5,152,0,0,1693,1727,3,214,107,0,1694,1696,5,3,0,0,1695,1697,
        3,220,110,0,1696,1695,1,0,0,0,1696,1697,1,0,0,0,1697,1708,1,0,0,
        0,1698,1699,5,153,0,0,1699,1700,5,40,0,0,1700,1705,3,68,34,0,1701,
        1702,5,5,0,0,1702,1704,3,68,34,0,1703,1701,1,0,0,0,1704,1707,1,0,
        0,0,1705,1703,1,0,0,0,1705,1706,1,0,0,0,1706,1709,1,0,0,0,1707,1705,
        1,0,0,0,1708,1698,1,0,0,0,1708,1709,1,0,0,0,1709,1720,1,0,0,0,1710,
        1711,5,109,0,0,1711,1712,5,40,0,0,1712,1717,3,144,72,0,1713,1714,
        5,5,0,0,1714,1716,3,144,72,0,1715,1713,1,0,0,0,1716,1719,1,0,0,0,
        1717,1715,1,0,0,0,1717,1718,1,0,0,0,1718,1721,1,0,0,0,1719,1717,
        1,0,0,0,1720,1710,1,0,0,0,1720,1721,1,0,0,0,1721,1723,1,0,0,0,1722,
        1724,3,128,64,0,1723,1722,1,0,0,0,1723,1724,1,0,0,0,1724,1725,1,
        0,0,0,1725,1727,5,4,0,0,1726,1693,1,0,0,0,1726,1694,1,0,0,0,1727,
        127,1,0,0,0,1728,1738,3,130,65,0,1729,1736,5,180,0,0,1730,1731,5,
        101,0,0,1731,1737,5,182,0,0,1732,1733,5,157,0,0,1733,1737,5,127,
        0,0,1734,1737,5,78,0,0,1735,1737,5,181,0,0,1736,1730,1,0,0,0,1736,
        1732,1,0,0,0,1736,1734,1,0,0,0,1736,1735,1,0,0,0,1737,1739,1,0,0,
        0,1738,1729,1,0,0,0,1738,1739,1,0,0,0,1739,129,1,0,0,0,1740,1747,
        7,18,0,0,1741,1748,3,152,76,0,1742,1743,5,39,0,0,1743,1744,3,148,
        74,0,1744,1745,5,32,0,0,1745,1746,3,150,75,0,1746,1748,1,0,0,0,1747,
        1741,1,0,0,0,1747,1742,1,0,0,0,1748,131,1,0,0,0,1749,1750,3,222,
        111,0,1750,1760,5,3,0,0,1751,1756,3,68,34,0,1752,1753,5,5,0,0,1753,
        1755,3,68,34,0,1754,1752,1,0,0,0,1755,1758,1,0,0,0,1756,1754,1,0,
        0,0,1756,1757,1,0,0,0,1757,1761,1,0,0,0,1758,1756,1,0,0,0,1759,1761,
        5,7,0,0,1760,1751,1,0,0,0,1760,1759,1,0,0,0,1761,1762,1,0,0,0,1762,
        1763,5,4,0,0,1763,133,1,0,0,0,1764,1765,3,224,112,0,1765,1778,5,
        3,0,0,1766,1768,5,62,0,0,1767,1766,1,0,0,0,1767,1768,1,0,0,0,1768,
        1769,1,0,0,0,1769,1774,3,68,34,0,1770,1771,5,5,0,0,1771,1773,3,68,
        34,0,1772,1770,1,0,0,0,1773,1776,1,0,0,0,1774,1772,1,0,0,0,1774,
        1775,1,0,0,0,1775,1779,1,0,0,0,1776,1774,1,0,0,0,1777,1779,5,7,0,
        0,1778,1767,1,0,0,0,1778,1777,1,0,0,0,1778,1779,1,0,0,0,1779,1780,
        1,0,0,0,1780,1782,5,4,0,0,1781,1783,3,122,61,0,1782,1781,1,0,0,0,
        1782,1783,1,0,0,0,1783,135,1,0,0,0,1784,1785,3,154,77,0,1785,1795,
        5,3,0,0,1786,1791,3,68,34,0,1787,1788,5,5,0,0,1788,1790,3,68,34,
        0,1789,1787,1,0,0,0,1790,1793,1,0,0,0,1791,1789,1,0,0,0,1791,1792,
        1,0,0,0,1792,1796,1,0,0,0,1793,1791,1,0,0,0,1794,1796,5,7,0,0,1795,
        1786,1,0,0,0,1795,1794,1,0,0,0,1795,1796,1,0,0,0,1796,1797,1,0,0,
        0,1797,1799,5,4,0,0,1798,1800,3,122,61,0,1799,1798,1,0,0,0,1799,
        1800,1,0,0,0,1800,1801,1,0,0,0,1801,1804,5,152,0,0,1802,1805,3,124,
        62,0,1803,1805,3,214,107,0,1804,1802,1,0,0,0,1804,1803,1,0,0,0,1805,
        137,1,0,0,0,1806,1808,5,149,0,0,1807,1809,5,116,0,0,1808,1807,1,
        0,0,0,1808,1809,1,0,0,0,1809,1810,1,0,0,0,1810,1815,3,58,29,0,1811,
        1812,5,5,0,0,1812,1814,3,58,29,0,1813,1811,1,0,0,0,1814,1817,1,0,
        0,0,1815,1813,1,0,0,0,1815,1816,1,0,0,0,1816,139,1,0,0,0,1817,1815,
        1,0,0,0,1818,1819,5,109,0,0,1819,1820,5,40,0,0,1820,1825,3,144,72,
        0,1821,1822,5,5,0,0,1822,1824,3,144,72,0,1823,1821,1,0,0,0,1824,
        1827,1,0,0,0,1825,1823,1,0,0,0,1825,1826,1,0,0,0,1826,141,1,0,0,
        0,1827,1825,1,0,0,0,1828,1829,5,98,0,0,1829,1832,3,68,34,0,1830,
        1831,7,19,0,0,1831,1833,3,68,34,0,1832,1830,1,0,0,0,1832,1833,1,
        0,0,0,1833,143,1,0,0,0,1834,1837,3,68,34,0,1835,1836,5,45,0,0,1836,
        1838,3,194,97,0,1837,1835,1,0,0,0,1837,1838,1,0,0,0,1838,1840,1,
        0,0,0,1839,1841,3,146,73,0,1840,1839,1,0,0,0,1840,1841,1,0,0,0,1841,
        1844,1,0,0,0,1842,1843,5,175,0,0,1843,1845,7,20,0,0,1844,1842,1,
        0,0,0,1844,1845,1,0,0,0,1845,145,1,0,0,0,1846,1847,7,21,0,0,1847,
        147,1,0,0,0,1848,1849,3,68,34,0,1849,1850,5,155,0,0,1850,1859,1,
        0,0,0,1851,1852,3,68,34,0,1852,1853,5,158,0,0,1853,1859,1,0,0,0,
        1854,1855,5,157,0,0,1855,1859,5,127,0,0,1856,1857,5,156,0,0,1857,
        1859,5,155,0,0,1858,1848,1,0,0,0,1858,1851,1,0,0,0,1858,1854,1,0,
        0,0,1858,1856,1,0,0,0,1859,149,1,0,0,0,1860,1861,3,68,34,0,1861,
        1862,5,155,0,0,1862,1871,1,0,0,0,1863,1864,3,68,34,0,1864,1865,5,
        158,0,0,1865,1871,1,0,0,0,1866,1867,5,157,0,0,1867,1871,5,127,0,
        0,1868,1869,5,156,0,0,1869,1871,5,158,0,0,1870,1860,1,0,0,0,1870,
        1863,1,0,0,0,1870,1866,1,0,0,0,1870,1868,1,0,0,0,1871,151,1,0,0,
        0,1872,1873,3,68,34,0,1873,1874,5,155,0,0,1874,1880,1,0,0,0,1875,
        1876,5,156,0,0,1876,1880,5,155,0,0,1877,1878,5,157,0,0,1878,1880,
        5,127,0,0,1879,1872,1,0,0,0,1879,1875,1,0,0,0,1879,1877,1,0,0,0,
        1880,153,1,0,0,0,1881,1882,7,22,0,0,1882,1883,5,3,0,0,1883,1884,
        3,68,34,0,1884,1885,5,4,0,0,1885,1886,5,152,0,0,1886,1888,5,3,0,
        0,1887,1889,3,160,80,0,1888,1887,1,0,0,0,1888,1889,1,0,0,0,1889,
        1890,1,0,0,0,1890,1892,3,164,82,0,1891,1893,3,130,65,0,1892,1891,
        1,0,0,0,1892,1893,1,0,0,0,1893,1894,1,0,0,0,1894,1895,5,4,0,0,1895,
        1967,1,0,0,0,1896,1897,7,23,0,0,1897,1898,5,3,0,0,1898,1899,5,4,
        0,0,1899,1900,5,152,0,0,1900,1902,5,3,0,0,1901,1903,3,160,80,0,1902,
        1901,1,0,0,0,1902,1903,1,0,0,0,1903,1905,1,0,0,0,1904,1906,3,162,
        81,0,1905,1904,1,0,0,0,1905,1906,1,0,0,0,1906,1907,1,0,0,0,1907,
        1967,5,4,0,0,1908,1909,7,24,0,0,1909,1910,5,3,0,0,1910,1911,5,4,
        0,0,1911,1912,5,152,0,0,1912,1914,5,3,0,0,1913,1915,3,160,80,0,1914,
        1913,1,0,0,0,1914,1915,1,0,0,0,1915,1916,1,0,0,0,1916,1917,3,164,
        82,0,1917,1918,5,4,0,0,1918,1967,1,0,0,0,1919,1920,7,25,0,0,1920,
        1921,5,3,0,0,1921,1923,3,68,34,0,1922,1924,3,156,78,0,1923,1922,
        1,0,0,0,1923,1924,1,0,0,0,1924,1926,1,0,0,0,1925,1927,3,158,79,0,
        1926,1925,1,0,0,0,1926,1927,1,0,0,0,1927,1928,1,0,0,0,1928,1929,
        5,4,0,0,1929,1930,5,152,0,0,1930,1932,5,3,0,0,1931,1933,3,160,80,
        0,1932,1931,1,0,0,0,1932,1933,1,0,0,0,1933,1934,1,0,0,0,1934,1935,
        3,164,82,0,1935,1936,5,4,0,0,1936,1967,1,0,0,0,1937,1938,5,164,0,
        0,1938,1939,5,3,0,0,1939,1940,3,68,34,0,1940,1941,5,5,0,0,1941,1942,
        3,38,19,0,1942,1943,5,4,0,0,1943,1944,5,152,0,0,1944,1946,5,3,0,
        0,1945,1947,3,160,80,0,1946,1945,1,0,0,0,1946,1947,1,0,0,0,1947,
        1948,1,0,0,0,1948,1950,3,164,82,0,1949,1951,3,130,65,0,1950,1949,
        1,0,0,0,1950,1951,1,0,0,0,1951,1952,1,0,0,0,1952,1953,5,4,0,0,1953,
        1967,1,0,0,0,1954,1955,5,165,0,0,1955,1956,5,3,0,0,1956,1957,3,68,
        34,0,1957,1958,5,4,0,0,1958,1959,5,152,0,0,1959,1961,5,3,0,0,1960,
        1962,3,160,80,0,1961,1960,1,0,0,0,1961,1962,1,0,0,0,1962,1963,1,
        0,0,0,1963,1964,3,164,82,0,1964,1965,5,4,0,0,1965,1967,1,0,0,0,1966,
        1881,1,0,0,0,1966,1896,1,0,0,0,1966,1908,1,0,0,0,1966,1919,1,0,0,
        0,1966,1937,1,0,0,0,1966,1954,1,0,0,0,1967,155,1,0,0,0,1968,1969,
        5,5,0,0,1969,1970,3,38,19,0,1970,157,1,0,0,0,1971,1972,5,5,0,0,1972,
        1973,3,38,19,0,1973,159,1,0,0,0,1974,1975,5,153,0,0,1975,1977,5,
        40,0,0,1976,1978,3,68,34,0,1977,1976,1,0,0,0,1978,1979,1,0,0,0,1979,
        1977,1,0,0,0,1979,1980,1,0,0,0,1980,161,1,0,0,0,1981,1982,5,109,
        0,0,1982,1984,5,40,0,0,1983,1985,3,68,34,0,1984,1983,1,0,0,0,1985,
        1986,1,0,0,0,1986,1984,1,0,0,0,1986,1987,1,0,0,0,1987,163,1,0,0,
        0,1988,1989,5,109,0,0,1989,1990,5,40,0,0,1990,1991,3,166,83,0,1991,
        165,1,0,0,0,1992,1994,3,68,34,0,1993,1995,3,146,73,0,1994,1993,1,
        0,0,0,1994,1995,1,0,0,0,1995,2003,1,0,0,0,1996,1997,5,5,0,0,1997,
        1999,3,68,34,0,1998,2000,3,146,73,0,1999,1998,1,0,0,0,1999,2000,
        1,0,0,0,2000,2002,1,0,0,0,2001,1996,1,0,0,0,2002,2005,1,0,0,0,2003,
        2001,1,0,0,0,2003,2004,1,0,0,0,2004,167,1,0,0,0,2005,2003,1,0,0,
        0,2006,2007,3,90,45,0,2007,169,1,0,0,0,2008,2009,3,90,45,0,2009,
        171,1,0,0,0,2010,2011,7,26,0,0,2011,173,1,0,0,0,2012,2013,5,188,
        0,0,2013,175,1,0,0,0,2014,2017,3,68,34,0,2015,2017,3,32,16,0,2016,
        2014,1,0,0,0,2016,2015,1,0,0,0,2017,177,1,0,0,0,2018,2019,7,27,0,
        0,2019,179,1,0,0,0,2020,2021,7,28,0,0,2021,181,1,0,0,0,2022,2023,
        3,228,114,0,2023,183,1,0,0,0,2024,2025,3,228,114,0,2025,185,1,0,
        0,0,2026,2027,3,228,114,0,2027,187,1,0,0,0,2028,2029,3,228,114,0,
        2029,189,1,0,0,0,2030,2031,3,228,114,0,2031,191,1,0,0,0,2032,2033,
        3,228,114,0,2033,193,1,0,0,0,2034,2035,3,228,114,0,2035,195,1,0,
        0,0,2036,2037,3,228,114,0,2037,197,1,0,0,0,2038,2039,3,228,114,0,
        2039,199,1,0,0,0,2040,2041,3,228,114,0,2041,201,1,0,0,0,2042,2043,
        3,228,114,0,2043,203,1,0,0,0,2044,2045,3,228,114,0,2045,205,1,0,
        0,0,2046,2047,3,228,114,0,2047,207,1,0,0,0,2048,2049,3,228,114,0,
        2049,209,1,0,0,0,2050,2051,3,228,114,0,2051,211,1,0,0,0,2052,2053,
        3,228,114,0,2053,213,1,0,0,0,2054,2055,3,228,114,0,2055,215,1,0,
        0,0,2056,2057,3,228,114,0,2057,217,1,0,0,0,2058,2059,3,228,114,0,
        2059,219,1,0,0,0,2060,2061,3,228,114,0,2061,221,1,0,0,0,2062,2063,
        3,228,114,0,2063,223,1,0,0,0,2064,2065,3,228,114,0,2065,225,1,0,
        0,0,2066,2067,3,228,114,0,2067,227,1,0,0,0,2068,2076,5,185,0,0,2069,
        2076,3,180,90,0,2070,2076,5,188,0,0,2071,2072,5,3,0,0,2072,2073,
        3,228,114,0,2073,2074,5,4,0,0,2074,2076,1,0,0,0,2075,2068,1,0,0,
        0,2075,2069,1,0,0,0,2075,2070,1,0,0,0,2075,2071,1,0,0,0,2076,229,
        1,0,0,0,299,233,240,245,253,260,265,271,277,279,305,312,319,325,
        329,334,337,344,347,351,359,363,365,369,373,377,380,387,393,399,
        404,415,421,425,429,432,436,442,447,456,463,469,473,477,482,488,
        500,504,509,512,515,518,522,525,539,546,553,555,558,564,569,577,
        582,597,603,613,618,628,632,634,638,643,645,653,659,664,671,682,
        685,687,694,698,705,711,717,723,728,737,742,753,758,769,774,778,
        794,804,809,817,829,834,842,849,852,855,862,865,868,871,875,883,
        888,898,903,912,919,923,927,930,938,951,954,962,971,975,980,1007,
        1016,1028,1033,1045,1051,1058,1062,1072,1075,1081,1087,1096,1099,
        1103,1105,1107,1116,1128,1139,1143,1150,1156,1161,1169,1174,1178,
        1181,1185,1188,1196,1207,1213,1215,1223,1230,1237,1242,1244,1250,
        1259,1264,1271,1275,1277,1280,1288,1292,1295,1301,1305,1310,1317,
        1326,1330,1332,1336,1345,1350,1352,1365,1368,1371,1376,1380,1383,
        1386,1391,1395,1400,1403,1406,1411,1415,1418,1425,1430,1439,1444,
        1447,1455,1459,1467,1470,1472,1481,1484,1486,1490,1494,1498,1501,
        1512,1517,1521,1525,1528,1533,1539,1546,1553,1562,1566,1568,1572,
        1575,1583,1589,1594,1600,1607,1614,1619,1622,1625,1628,1633,1638,
        1645,1649,1653,1663,1672,1675,1684,1688,1696,1705,1708,1717,1720,
        1723,1726,1736,1738,1747,1756,1760,1767,1774,1778,1782,1791,1795,
        1799,1804,1808,1815,1825,1832,1837,1840,1844,1858,1870,1879,1888,
        1892,1902,1905,1914,1923,1926,1932,1946,1950,1961,1966,1979,1986,
        1994,1999,2003,2016,2075
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SQLiteParser.__ATN) {
            SQLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(SQLiteParser._serializedATN);
        }

        return SQLiteParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SQLiteParser.literalNames, SQLiteParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SQLiteParser.vocabulary;
    }

    private static readonly decisionsToDFA = SQLiteParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.EOF, 0)!;
    }
    public sql_stmt_list(): Sql_stmt_listContext[];
    public sql_stmt_list(i: number): Sql_stmt_listContext | null;
    public sql_stmt_list(i?: number): Sql_stmt_listContext[] | Sql_stmt_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmt_listContext);
        }

        return this.getRuleContext(i, Sql_stmt_listContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_program;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sql_stmt(): Sql_stmtContext {
        return this.getRuleContext(0, Sql_stmtContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_singleStmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSingleStmt) {
             listener.enterSingleStmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSingleStmt) {
             listener.exitSingleStmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSingleStmt) {
            return visitor.visitSingleStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.EOF, 0)!;
    }
    public sql_stmt_list(): Sql_stmt_listContext[];
    public sql_stmt_list(i: number): Sql_stmt_listContext | null;
    public sql_stmt_list(i?: number): Sql_stmt_listContext[] | Sql_stmt_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmt_listContext);
        }

        return this.getRuleContext(i, Sql_stmt_listContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_parse;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterParse) {
             listener.enterParse(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitParse) {
             listener.exitParse(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Sql_stmt_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sql_stmt(): Sql_stmtContext[];
    public sql_stmt(i: number): Sql_stmtContext | null;
    public sql_stmt(i?: number): Sql_stmtContext[] | Sql_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmtContext);
        }

        return this.getRuleContext(i, Sql_stmtContext);
    }
    public SCOL(): antlr.TerminalNode[];
    public SCOL(i: number): antlr.TerminalNode | null;
    public SCOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.SCOL);
    	} else {
    		return this.getToken(SQLiteParser.SCOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_sql_stmt_list;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSql_stmt_list) {
             listener.enterSql_stmt_list(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSql_stmt_list) {
             listener.exitSql_stmt_list(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSql_stmt_list) {
            return visitor.visitSql_stmt_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Sql_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public alter_table_stmt(): Alter_table_stmtContext | null {
        return this.getRuleContext(0, Alter_table_stmtContext);
    }
    public analyze_stmt(): Analyze_stmtContext | null {
        return this.getRuleContext(0, Analyze_stmtContext);
    }
    public attach_stmt(): Attach_stmtContext | null {
        return this.getRuleContext(0, Attach_stmtContext);
    }
    public begin_stmt(): Begin_stmtContext | null {
        return this.getRuleContext(0, Begin_stmtContext);
    }
    public commit_stmt(): Commit_stmtContext | null {
        return this.getRuleContext(0, Commit_stmtContext);
    }
    public create_index_stmt(): Create_index_stmtContext | null {
        return this.getRuleContext(0, Create_index_stmtContext);
    }
    public create_table_stmt(): Create_table_stmtContext | null {
        return this.getRuleContext(0, Create_table_stmtContext);
    }
    public create_trigger_stmt(): Create_trigger_stmtContext | null {
        return this.getRuleContext(0, Create_trigger_stmtContext);
    }
    public create_view_stmt(): Create_view_stmtContext | null {
        return this.getRuleContext(0, Create_view_stmtContext);
    }
    public create_virtual_table_stmt(): Create_virtual_table_stmtContext | null {
        return this.getRuleContext(0, Create_virtual_table_stmtContext);
    }
    public delete_stmt(): Delete_stmtContext | null {
        return this.getRuleContext(0, Delete_stmtContext);
    }
    public delete_stmt_limited(): Delete_stmt_limitedContext | null {
        return this.getRuleContext(0, Delete_stmt_limitedContext);
    }
    public detach_stmt(): Detach_stmtContext | null {
        return this.getRuleContext(0, Detach_stmtContext);
    }
    public drop_stmt(): Drop_stmtContext | null {
        return this.getRuleContext(0, Drop_stmtContext);
    }
    public insert_stmt(): Insert_stmtContext | null {
        return this.getRuleContext(0, Insert_stmtContext);
    }
    public pragma_stmt(): Pragma_stmtContext | null {
        return this.getRuleContext(0, Pragma_stmtContext);
    }
    public reindex_stmt(): Reindex_stmtContext | null {
        return this.getRuleContext(0, Reindex_stmtContext);
    }
    public release_stmt(): Release_stmtContext | null {
        return this.getRuleContext(0, Release_stmtContext);
    }
    public rollback_stmt(): Rollback_stmtContext | null {
        return this.getRuleContext(0, Rollback_stmtContext);
    }
    public savepoint_stmt(): Savepoint_stmtContext | null {
        return this.getRuleContext(0, Savepoint_stmtContext);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public update_stmt(): Update_stmtContext | null {
        return this.getRuleContext(0, Update_stmtContext);
    }
    public update_stmt_limited(): Update_stmt_limitedContext | null {
        return this.getRuleContext(0, Update_stmt_limitedContext);
    }
    public vacuum_stmt(): Vacuum_stmtContext | null {
        return this.getRuleContext(0, Vacuum_stmtContext);
    }
    public EXPLAIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXPLAIN_, 0);
    }
    public QUERY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.QUERY_, 0);
    }
    public PLAN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLAN_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_sql_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSql_stmt) {
             listener.enterSql_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSql_stmt) {
             listener.exitSql_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSql_stmt) {
            return visitor.visitSql_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Alter_table_stmtContext extends antlr.ParserRuleContext {
    public _new_table_name?: Table_nameContext;
    public _old_column_name?: Column_nameContext;
    public _new_column_name?: Column_nameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALTER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ALTER_, 0)!;
    }
    public TABLE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TABLE_, 0)!;
    }
    public table_name(): Table_nameContext[];
    public table_name(i: number): Table_nameContext | null;
    public table_name(i?: number): Table_nameContext[] | Table_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_nameContext);
        }

        return this.getRuleContext(i, Table_nameContext);
    }
    public RENAME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RENAME_, 0);
    }
    public ADD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ADD_, 0);
    }
    public column_def(): Column_defContext | null {
        return this.getRuleContext(0, Column_defContext);
    }
    public DROP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DROP_, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public TO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    public COLUMN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLUMN_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_alter_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAlter_table_stmt) {
             listener.enterAlter_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAlter_table_stmt) {
             listener.exitAlter_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAlter_table_stmt) {
            return visitor.visitAlter_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Analyze_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ANALYZE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ANALYZE_, 0)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public table_or_index_name(): Table_or_index_nameContext | null {
        return this.getRuleContext(0, Table_or_index_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_analyze_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAnalyze_stmt) {
             listener.enterAnalyze_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAnalyze_stmt) {
             listener.exitAnalyze_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAnalyze_stmt) {
            return visitor.visitAnalyze_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Attach_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ATTACH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ATTACH_, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public schema_name(): Schema_nameContext {
        return this.getRuleContext(0, Schema_nameContext)!;
    }
    public DATABASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_attach_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAttach_stmt) {
             listener.enterAttach_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAttach_stmt) {
             listener.exitAttach_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAttach_stmt) {
            return visitor.visitAttach_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Begin_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BEGIN_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BEGIN_, 0)!;
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public DEFERRED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    public IMMEDIATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    public EXCLUSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
    }
    public transaction_name(): Transaction_nameContext | null {
        return this.getRuleContext(0, Transaction_nameContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_begin_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterBegin_stmt) {
             listener.enterBegin_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitBegin_stmt) {
             listener.exitBegin_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitBegin_stmt) {
            return visitor.visitBegin_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Commit_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMIT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMIT_, 0);
    }
    public END_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.END_, 0);
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_commit_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCommit_stmt) {
             listener.enterCommit_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCommit_stmt) {
             listener.exitCommit_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCommit_stmt) {
            return visitor.visitCommit_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Rollback_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROLLBACK_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ROLLBACK_, 0)!;
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public TO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    public savepoint_name(): Savepoint_nameContext | null {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    public SAVEPOINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_rollback_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRollback_stmt) {
             listener.enterRollback_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRollback_stmt) {
             listener.exitRollback_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRollback_stmt) {
            return visitor.visitRollback_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Savepoint_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAVEPOINT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0)!;
    }
    public savepoint_name(): Savepoint_nameContext {
        return this.getRuleContext(0, Savepoint_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_savepoint_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSavepoint_stmt) {
             listener.enterSavepoint_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSavepoint_stmt) {
             listener.exitSavepoint_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSavepoint_stmt) {
            return visitor.visitSavepoint_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Release_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RELEASE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.RELEASE_, 0)!;
    }
    public savepoint_name(): Savepoint_nameContext {
        return this.getRuleContext(0, Savepoint_nameContext)!;
    }
    public SAVEPOINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_release_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRelease_stmt) {
             listener.enterRelease_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRelease_stmt) {
             listener.exitRelease_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRelease_stmt) {
            return visitor.visitRelease_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_index_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public INDEX_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.INDEX_, 0)!;
    }
    public index_name(): Index_nameContext {
        return this.getRuleContext(0, Index_nameContext)!;
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public indexed_column(): Indexed_columnContext[];
    public indexed_column(i: number): Indexed_columnContext | null;
    public indexed_column(i?: number): Indexed_columnContext[] | Indexed_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }

        return this.getRuleContext(i, Indexed_columnContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_index_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_index_stmt) {
             listener.enterCreate_index_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_index_stmt) {
             listener.exitCreate_index_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_index_stmt) {
            return visitor.visitCreate_index_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Indexed_columnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public column_name(): Column_nameContext | null {
        return this.getRuleContext(0, Column_nameContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public asc_desc(): Asc_descContext | null {
        return this.getRuleContext(0, Asc_descContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_indexed_column;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterIndexed_column) {
             listener.enterIndexed_column(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitIndexed_column) {
             listener.exitIndexed_column(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitIndexed_column) {
            return visitor.visitIndexed_column(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_table_stmtContext extends antlr.ParserRuleContext {
    public _row_ROW_ID?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public TABLE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TABLE_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_def(): Column_defContext[];
    public column_def(i: number): Column_defContext | null;
    public column_def(i?: number): Column_defContext[] | Column_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_defContext);
        }

        return this.getRuleContext(i, Column_defContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public table_constraint(): Table_constraintContext[];
    public table_constraint(i: number): Table_constraintContext | null;
    public table_constraint(i?: number): Table_constraintContext[] | Table_constraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_constraintContext);
        }

        return this.getRuleContext(i, Table_constraintContext);
    }
    public WITHOUT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WITHOUT_, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_table_stmt) {
             listener.enterCreate_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_table_stmt) {
             listener.exitCreate_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_table_stmt) {
            return visitor.visitCreate_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public column_name(): Column_nameContext {
        return this.getRuleContext(0, Column_nameContext)!;
    }
    public type_name(): Type_nameContext | null {
        return this.getRuleContext(0, Type_nameContext);
    }
    public column_constraint(): Column_constraintContext[];
    public column_constraint(i: number): Column_constraintContext | null;
    public column_constraint(i?: number): Column_constraintContext[] | Column_constraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_constraintContext);
        }

        return this.getRuleContext(i, Column_constraintContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_def;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_def) {
             listener.enterColumn_def(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_def) {
             listener.exitColumn_def(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_def) {
            return visitor.visitColumn_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Type_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext[];
    public name(i: number): NameContext | null;
    public name(i?: number): NameContext[] | NameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }

        return this.getRuleContext(i, NameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public signed_number(): Signed_numberContext[];
    public signed_number(i: number): Signed_numberContext | null;
    public signed_number(i?: number): Signed_numberContext[] | Signed_numberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Signed_numberContext);
        }

        return this.getRuleContext(i, Signed_numberContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_type_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterType_name) {
             listener.enterType_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitType_name) {
             listener.exitType_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitType_name) {
            return visitor.visitType_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_constraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHECK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public DEFAULT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public foreign_key_clause(): Foreign_key_clauseContext | null {
        return this.getRuleContext(0, Foreign_key_clauseContext);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public CONSTRAINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public PRIMARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    public KEY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    public NULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public signed_number(): Signed_numberContext | null {
        return this.getRuleContext(0, Signed_numberContext);
    }
    public literal_value(): Literal_valueContext | null {
        return this.getRuleContext(0, Literal_valueContext);
    }
    public conflict_clause(): Conflict_clauseContext | null {
        return this.getRuleContext(0, Conflict_clauseContext);
    }
    public GENERATED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GENERATED_, 0);
    }
    public ALWAYS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALWAYS_, 0);
    }
    public STORED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STORED_, 0);
    }
    public VIRTUAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    public asc_desc(): Asc_descContext | null {
        return this.getRuleContext(0, Asc_descContext);
    }
    public AUTOINCREMENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_constraint;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_constraint) {
             listener.enterColumn_constraint(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_constraint) {
             listener.exitColumn_constraint(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_constraint) {
            return visitor.visitColumn_constraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Signed_numberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERIC_LITERAL(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_signed_number;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSigned_number) {
             listener.enterSigned_number(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSigned_number) {
             listener.exitSigned_number(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSigned_number) {
            return visitor.visitSigned_number(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_constraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public indexed_column(): Indexed_columnContext[];
    public indexed_column(i: number): Indexed_columnContext | null;
    public indexed_column(i?: number): Indexed_columnContext[] | Indexed_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }

        return this.getRuleContext(i, Indexed_columnContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public CHECK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public FOREIGN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOREIGN_, 0);
    }
    public KEY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public foreign_key_clause(): Foreign_key_clauseContext | null {
        return this.getRuleContext(0, Foreign_key_clauseContext);
    }
    public CONSTRAINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public PRIMARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public conflict_clause(): Conflict_clauseContext | null {
        return this.getRuleContext(0, Conflict_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_constraint;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_constraint) {
             listener.enterTable_constraint(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_constraint) {
             listener.exitTable_constraint(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_constraint) {
            return visitor.visitTable_constraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Foreign_key_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REFERENCES_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.REFERENCES_, 0)!;
    }
    public foreign_table(): Foreign_tableContext {
        return this.getRuleContext(0, Foreign_tableContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public ON_(): antlr.TerminalNode[];
    public ON_(i: number): antlr.TerminalNode | null;
    public ON_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ON_);
    	} else {
    		return this.getToken(SQLiteParser.ON_, i);
    	}
    }
    public MATCH_(): antlr.TerminalNode[];
    public MATCH_(i: number): antlr.TerminalNode | null;
    public MATCH_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.MATCH_);
    	} else {
    		return this.getToken(SQLiteParser.MATCH_, i);
    	}
    }
    public name(): NameContext[];
    public name(i: number): NameContext | null;
    public name(i?: number): NameContext[] | NameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }

        return this.getRuleContext(i, NameContext);
    }
    public DEFERRABLE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRABLE_, 0);
    }
    public DELETE_(): antlr.TerminalNode[];
    public DELETE_(i: number): antlr.TerminalNode | null;
    public DELETE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DELETE_);
    	} else {
    		return this.getToken(SQLiteParser.DELETE_, i);
    	}
    }
    public UPDATE_(): antlr.TerminalNode[];
    public UPDATE_(i: number): antlr.TerminalNode | null;
    public UPDATE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.UPDATE_);
    	} else {
    		return this.getToken(SQLiteParser.UPDATE_, i);
    	}
    }
    public SET_(): antlr.TerminalNode[];
    public SET_(i: number): antlr.TerminalNode | null;
    public SET_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.SET_);
    	} else {
    		return this.getToken(SQLiteParser.SET_, i);
    	}
    }
    public CASCADE_(): antlr.TerminalNode[];
    public CASCADE_(i: number): antlr.TerminalNode | null;
    public CASCADE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.CASCADE_);
    	} else {
    		return this.getToken(SQLiteParser.CASCADE_, i);
    	}
    }
    public RESTRICT_(): antlr.TerminalNode[];
    public RESTRICT_(i: number): antlr.TerminalNode | null;
    public RESTRICT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.RESTRICT_);
    	} else {
    		return this.getToken(SQLiteParser.RESTRICT_, i);
    	}
    }
    public NO_(): antlr.TerminalNode[];
    public NO_(i: number): antlr.TerminalNode | null;
    public NO_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NO_);
    	} else {
    		return this.getToken(SQLiteParser.NO_, i);
    	}
    }
    public ACTION_(): antlr.TerminalNode[];
    public ACTION_(i: number): antlr.TerminalNode | null;
    public ACTION_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ACTION_);
    	} else {
    		return this.getToken(SQLiteParser.ACTION_, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public NULL_(): antlr.TerminalNode[];
    public NULL_(i: number): antlr.TerminalNode | null;
    public NULL_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NULL_);
    	} else {
    		return this.getToken(SQLiteParser.NULL_, i);
    	}
    }
    public DEFAULT_(): antlr.TerminalNode[];
    public DEFAULT_(i: number): antlr.TerminalNode | null;
    public DEFAULT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DEFAULT_);
    	} else {
    		return this.getToken(SQLiteParser.DEFAULT_, i);
    	}
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public INITIALLY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INITIALLY_, 0);
    }
    public DEFERRED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    public IMMEDIATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_foreign_key_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterForeign_key_clause) {
             listener.enterForeign_key_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitForeign_key_clause) {
             listener.exitForeign_key_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitForeign_key_clause) {
            return visitor.visitForeign_key_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Conflict_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public CONFLICT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CONFLICT_, 0)!;
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_conflict_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterConflict_clause) {
             listener.enterConflict_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitConflict_clause) {
             listener.exitConflict_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitConflict_clause) {
            return visitor.visitConflict_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_trigger_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public TRIGGER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TRIGGER_, 0)!;
    }
    public trigger_name(): Trigger_nameContext {
        return this.getRuleContext(0, Trigger_nameContext)!;
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public BEGIN_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BEGIN_, 0)!;
    }
    public END_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.END_, 0)!;
    }
    public DELETE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    public INSERT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    public UPDATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public BEFORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BEFORE_, 0);
    }
    public AFTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AFTER_, 0);
    }
    public INSTEAD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSTEAD_, 0);
    }
    public OF_(): antlr.TerminalNode[];
    public OF_(i: number): antlr.TerminalNode | null;
    public OF_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OF_);
    	} else {
    		return this.getToken(SQLiteParser.OF_, i);
    	}
    }
    public FOR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOR_, 0);
    }
    public EACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EACH_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public WHEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHEN_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public SCOL(): antlr.TerminalNode[];
    public SCOL(i: number): antlr.TerminalNode | null;
    public SCOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.SCOL);
    	} else {
    		return this.getToken(SQLiteParser.SCOL, i);
    	}
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public update_stmt(): Update_stmtContext[];
    public update_stmt(i: number): Update_stmtContext | null;
    public update_stmt(i?: number): Update_stmtContext[] | Update_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Update_stmtContext);
        }

        return this.getRuleContext(i, Update_stmtContext);
    }
    public insert_stmt(): Insert_stmtContext[];
    public insert_stmt(i: number): Insert_stmtContext | null;
    public insert_stmt(i?: number): Insert_stmtContext[] | Insert_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Insert_stmtContext);
        }

        return this.getRuleContext(i, Insert_stmtContext);
    }
    public delete_stmt(): Delete_stmtContext[];
    public delete_stmt(i: number): Delete_stmtContext | null;
    public delete_stmt(i?: number): Delete_stmtContext[] | Delete_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Delete_stmtContext);
        }

        return this.getRuleContext(i, Delete_stmtContext);
    }
    public select_stmt(): Select_stmtContext[];
    public select_stmt(i: number): Select_stmtContext | null;
    public select_stmt(i?: number): Select_stmtContext[] | Select_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }

        return this.getRuleContext(i, Select_stmtContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_trigger_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_trigger_stmt) {
             listener.enterCreate_trigger_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_trigger_stmt) {
             listener.exitCreate_trigger_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_trigger_stmt) {
            return visitor.visitCreate_trigger_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_view_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public VIEW_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VIEW_, 0)!;
    }
    public view_name(): View_nameContext {
        return this.getRuleContext(0, View_nameContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_view_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_view_stmt) {
             listener.enterCreate_view_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_view_stmt) {
             listener.exitCreate_view_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_view_stmt) {
            return visitor.visitCreate_view_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_virtual_table_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public VIRTUAL_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VIRTUAL_, 0)!;
    }
    public TABLE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TABLE_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public USING_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.USING_, 0)!;
    }
    public module_name(): Module_nameContext {
        return this.getRuleContext(0, Module_nameContext)!;
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public module_argument(): Module_argumentContext[];
    public module_argument(i: number): Module_argumentContext | null;
    public module_argument(i?: number): Module_argumentContext[] | Module_argumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_argumentContext);
        }

        return this.getRuleContext(i, Module_argumentContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_virtual_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_virtual_table_stmt) {
             listener.enterCreate_virtual_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_virtual_table_stmt) {
             listener.exitCreate_virtual_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_virtual_table_stmt) {
            return visitor.visitCreate_virtual_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class With_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.WITH_, 0)!;
    }
    public cte_table_name(): Cte_table_nameContext[];
    public cte_table_name(i: number): Cte_table_nameContext | null;
    public cte_table_name(i?: number): Cte_table_nameContext[] | Cte_table_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Cte_table_nameContext);
        }

        return this.getRuleContext(i, Cte_table_nameContext);
    }
    public AS_(): antlr.TerminalNode[];
    public AS_(i: number): antlr.TerminalNode | null;
    public AS_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AS_);
    	} else {
    		return this.getToken(SQLiteParser.AS_, i);
    	}
    }
    public OPEN_PAR(): antlr.TerminalNode[];
    public OPEN_PAR(i: number): antlr.TerminalNode | null;
    public OPEN_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OPEN_PAR);
    	} else {
    		return this.getToken(SQLiteParser.OPEN_PAR, i);
    	}
    }
    public select_stmt(): Select_stmtContext[];
    public select_stmt(i: number): Select_stmtContext | null;
    public select_stmt(i?: number): Select_stmtContext[] | Select_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }

        return this.getRuleContext(i, Select_stmtContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode[];
    public CLOSE_PAR(i: number): antlr.TerminalNode | null;
    public CLOSE_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.CLOSE_PAR);
    	} else {
    		return this.getToken(SQLiteParser.CLOSE_PAR, i);
    	}
    }
    public RECURSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_with_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWith_clause) {
             listener.enterWith_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWith_clause) {
             listener.exitWith_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWith_clause) {
            return visitor.visitWith_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cte_table_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_cte_table_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCte_table_name) {
             listener.enterCte_table_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCte_table_name) {
             listener.exitCte_table_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCte_table_name) {
            return visitor.visitCte_table_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Recursive_cteContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public cte_table_name(): Cte_table_nameContext {
        return this.getRuleContext(0, Cte_table_nameContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public initial_select(): Initial_selectContext {
        return this.getRuleContext(0, Initial_selectContext)!;
    }
    public UNION_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.UNION_, 0)!;
    }
    public recursive_select(): Recursive_selectContext {
        return this.getRuleContext(0, Recursive_selectContext)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public ALL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_recursive_cte;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRecursive_cte) {
             listener.enterRecursive_cte(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRecursive_cte) {
             listener.exitRecursive_cte(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRecursive_cte) {
            return visitor.visitRecursive_cte(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Common_table_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode[];
    public OPEN_PAR(i: number): antlr.TerminalNode | null;
    public OPEN_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OPEN_PAR);
    	} else {
    		return this.getToken(SQLiteParser.OPEN_PAR, i);
    	}
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode[];
    public CLOSE_PAR(i: number): antlr.TerminalNode | null;
    public CLOSE_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.CLOSE_PAR);
    	} else {
    		return this.getToken(SQLiteParser.CLOSE_PAR, i);
    	}
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_common_table_expression;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCommon_table_expression) {
             listener.enterCommon_table_expression(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCommon_table_expression) {
             listener.exitCommon_table_expression(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCommon_table_expression) {
            return visitor.visitCommon_table_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Delete_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DELETE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DELETE_, 0)!;
    }
    public FROM_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.FROM_, 0)!;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        return this.getRuleContext(0, Qualified_table_nameContext)!;
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_delete_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDelete_stmt) {
             listener.enterDelete_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDelete_stmt) {
             listener.exitDelete_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDelete_stmt) {
            return visitor.visitDelete_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Delete_stmt_limitedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DELETE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DELETE_, 0)!;
    }
    public FROM_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.FROM_, 0)!;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        return this.getRuleContext(0, Qualified_table_nameContext)!;
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public limit_stmt(): Limit_stmtContext | null {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    public order_by_stmt(): Order_by_stmtContext | null {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_delete_stmt_limited;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDelete_stmt_limited) {
             listener.enterDelete_stmt_limited(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDelete_stmt_limited) {
             listener.exitDelete_stmt_limited(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDelete_stmt_limited) {
            return visitor.visitDelete_stmt_limited(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Detach_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DETACH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DETACH_, 0)!;
    }
    public schema_name(): Schema_nameContext {
        return this.getRuleContext(0, Schema_nameContext)!;
    }
    public DATABASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_detach_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDetach_stmt) {
             listener.enterDetach_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDetach_stmt) {
             listener.exitDetach_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDetach_stmt) {
            return visitor.visitDetach_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Drop_stmtContext extends antlr.ParserRuleContext {
    public _object?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DROP_, 0)!;
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public INDEX_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEX_, 0);
    }
    public TABLE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    public TRIGGER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    public VIEW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_drop_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDrop_stmt) {
             listener.enterDrop_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDrop_stmt) {
             listener.exitDrop_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDrop_stmt) {
            return visitor.visitDrop_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal_value(): Literal_valueContext | null {
        return this.getRuleContext(0, Literal_valueContext);
    }
    public BIND_PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BIND_PARAMETER, 0);
    }
    public column_name(): Column_nameContext | null {
        return this.getRuleContext(0, Column_nameContext);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DOT);
    	} else {
    		return this.getToken(SQLiteParser.DOT, i);
    	}
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public unary_operator(): Unary_operatorContext | null {
        return this.getRuleContext(0, Unary_operatorContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public function_name(): Function_nameContext | null {
        return this.getRuleContext(0, Function_nameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public filter_clause(): Filter_clauseContext | null {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    public over_clause(): Over_clauseContext | null {
        return this.getRuleContext(0, Over_clauseContext);
    }
    public DISTINCT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public CAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CAST_, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public type_name(): Type_nameContext | null {
        return this.getRuleContext(0, Type_nameContext);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public CASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CASE_, 0);
    }
    public END_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.END_, 0);
    }
    public WHEN_(): antlr.TerminalNode[];
    public WHEN_(i: number): antlr.TerminalNode | null;
    public WHEN_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.WHEN_);
    	} else {
    		return this.getToken(SQLiteParser.WHEN_, i);
    	}
    }
    public THEN_(): antlr.TerminalNode[];
    public THEN_(i: number): antlr.TerminalNode | null;
    public THEN_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.THEN_);
    	} else {
    		return this.getToken(SQLiteParser.THEN_, i);
    	}
    }
    public ELSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ELSE_, 0);
    }
    public raise_function(): Raise_functionContext | null {
        return this.getRuleContext(0, Raise_functionContext);
    }
    public PIPE2(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PIPE2, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MOD, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    public LT2(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LT2, 0);
    }
    public GT2(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GT2, 0);
    }
    public AMP(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AMP, 0);
    }
    public PIPE(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PIPE, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LT, 0);
    }
    public LT_EQ(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LT_EQ, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GT, 0);
    }
    public GT_EQ(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GT_EQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASSIGN, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EQ, 0);
    }
    public NOT_EQ1(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_EQ1, 0);
    }
    public NOT_EQ2(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_EQ2, 0);
    }
    public IS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IS_, 0);
    }
    public FROM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    public IN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IN_, 0);
    }
    public LIKE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LIKE_, 0);
    }
    public GLOB_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GLOB_, 0);
    }
    public MATCH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MATCH_, 0);
    }
    public REGEXP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REGEXP_, 0);
    }
    public AND_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public BETWEEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public ESCAPE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ESCAPE_, 0);
    }
    public ISNULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ISNULL_, 0);
    }
    public NOTNULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOTNULL_, 0);
    }
    public NULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    public table_function_name(): Table_function_nameContext | null {
        return this.getRuleContext(0, Table_function_nameContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Raise_functionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RAISE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.RAISE_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public error_message(): Error_messageContext | null {
        return this.getRuleContext(0, Error_messageContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_raise_function;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRaise_function) {
             listener.enterRaise_function(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRaise_function) {
             listener.exitRaise_function(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRaise_function) {
            return visitor.visitRaise_function(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Literal_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERIC_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public BLOB_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BLOB_LITERAL, 0);
    }
    public NULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    public TRUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRUE_, 0);
    }
    public FALSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FALSE_, 0);
    }
    public CURRENT_TIME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
    }
    public CURRENT_DATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
    }
    public CURRENT_TIMESTAMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_literal_value;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterLiteral_value) {
             listener.enterLiteral_value(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitLiteral_value) {
             listener.exitLiteral_value(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral_value) {
            return visitor.visitLiteral_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Value_rowContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_value_row;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterValue_row) {
             listener.enterValue_row(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitValue_row) {
             listener.exitValue_row(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitValue_row) {
            return visitor.visitValue_row(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Values_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VALUES_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VALUES_, 0)!;
    }
    public value_row(): Value_rowContext[];
    public value_row(i: number): Value_rowContext | null;
    public value_row(i?: number): Value_rowContext[] | Value_rowContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Value_rowContext);
        }

        return this.getRuleContext(i, Value_rowContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_values_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterValues_clause) {
             listener.enterValues_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitValues_clause) {
             listener.exitValues_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitValues_clause) {
            return visitor.visitValues_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Insert_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTO_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.INTO_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public INSERT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public DEFAULT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    public VALUES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VALUES_, 0);
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public table_alias(): Table_aliasContext | null {
        return this.getRuleContext(0, Table_aliasContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public values_clause(): Values_clauseContext | null {
        return this.getRuleContext(0, Values_clauseContext);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public upsert_clause(): Upsert_clauseContext | null {
        return this.getRuleContext(0, Upsert_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_insert_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterInsert_stmt) {
             listener.enterInsert_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitInsert_stmt) {
             listener.exitInsert_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitInsert_stmt) {
            return visitor.visitInsert_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Returning_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURNING_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.RETURNING_, 0)!;
    }
    public result_column(): Result_columnContext[];
    public result_column(i: number): Result_columnContext | null;
    public result_column(i?: number): Result_columnContext[] | Result_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }

        return this.getRuleContext(i, Result_columnContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_returning_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterReturning_clause) {
             listener.enterReturning_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitReturning_clause) {
             listener.exitReturning_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitReturning_clause) {
            return visitor.visitReturning_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Upsert_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public CONFLICT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CONFLICT_, 0)!;
    }
    public DO_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DO_, 0)!;
    }
    public NOTHING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOTHING_, 0);
    }
    public UPDATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    public SET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public indexed_column(): Indexed_columnContext[];
    public indexed_column(i: number): Indexed_columnContext | null;
    public indexed_column(i?: number): Indexed_columnContext[] | Indexed_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }

        return this.getRuleContext(i, Indexed_columnContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public ASSIGN(): antlr.TerminalNode[];
    public ASSIGN(i: number): antlr.TerminalNode | null;
    public ASSIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ASSIGN);
    	} else {
    		return this.getToken(SQLiteParser.ASSIGN, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public WHERE_(): antlr.TerminalNode[];
    public WHERE_(i: number): antlr.TerminalNode | null;
    public WHERE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.WHERE_);
    	} else {
    		return this.getToken(SQLiteParser.WHERE_, i);
    	}
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public column_name_list(): Column_name_listContext[];
    public column_name_list(i: number): Column_name_listContext | null;
    public column_name_list(i?: number): Column_name_listContext[] | Column_name_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }

        return this.getRuleContext(i, Column_name_listContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_upsert_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterUpsert_clause) {
             listener.enterUpsert_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitUpsert_clause) {
             listener.exitUpsert_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitUpsert_clause) {
            return visitor.visitUpsert_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pragma_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRAGMA_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.PRAGMA_, 0)!;
    }
    public pragma_name(): Pragma_nameContext {
        return this.getRuleContext(0, Pragma_nameContext)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASSIGN, 0);
    }
    public pragma_value(): Pragma_valueContext | null {
        return this.getRuleContext(0, Pragma_valueContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_pragma_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPragma_stmt) {
             listener.enterPragma_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPragma_stmt) {
             listener.exitPragma_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPragma_stmt) {
            return visitor.visitPragma_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pragma_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public signed_number(): Signed_numberContext | null {
        return this.getRuleContext(0, Signed_numberContext);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_pragma_value;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPragma_value) {
             listener.enterPragma_value(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPragma_value) {
             listener.exitPragma_value(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPragma_value) {
            return visitor.visitPragma_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Reindex_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REINDEX_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.REINDEX_, 0)!;
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public index_name(): Index_nameContext | null {
        return this.getRuleContext(0, Index_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_reindex_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterReindex_stmt) {
             listener.enterReindex_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitReindex_stmt) {
             listener.exitReindex_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitReindex_stmt) {
            return visitor.visitReindex_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Select_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_core(): Select_coreContext[];
    public select_core(i: number): Select_coreContext | null;
    public select_core(i?: number): Select_coreContext[] | Select_coreContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }

        return this.getRuleContext(i, Select_coreContext);
    }
    public common_table_stmt(): Common_table_stmtContext | null {
        return this.getRuleContext(0, Common_table_stmtContext);
    }
    public compound_operator(): Compound_operatorContext[];
    public compound_operator(i: number): Compound_operatorContext | null;
    public compound_operator(i?: number): Compound_operatorContext[] | Compound_operatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Compound_operatorContext);
        }

        return this.getRuleContext(i, Compound_operatorContext);
    }
    public order_by_stmt(): Order_by_stmtContext | null {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    public limit_stmt(): Limit_stmtContext | null {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_select_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSelect_stmt) {
             listener.enterSelect_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSelect_stmt) {
             listener.exitSelect_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSelect_stmt) {
            return visitor.visitSelect_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_or_subquery(): Table_or_subqueryContext[];
    public table_or_subquery(i: number): Table_or_subqueryContext | null;
    public table_or_subquery(i?: number): Table_or_subqueryContext[] | Table_or_subqueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }

        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    public join_operator(): Join_operatorContext[];
    public join_operator(i: number): Join_operatorContext | null;
    public join_operator(i?: number): Join_operatorContext[] | Join_operatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Join_operatorContext);
        }

        return this.getRuleContext(i, Join_operatorContext);
    }
    public join_constraint(): Join_constraintContext[];
    public join_constraint(i: number): Join_constraintContext | null;
    public join_constraint(i?: number): Join_constraintContext[] | Join_constraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Join_constraintContext);
        }

        return this.getRuleContext(i, Join_constraintContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_clause) {
             listener.enterJoin_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_clause) {
             listener.exitJoin_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_clause) {
            return visitor.visitJoin_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Select_coreContext extends antlr.ParserRuleContext {
    public _whereExpr?: ExprContext;
    public _expr?: ExprContext;
    public _groupByExpr: ExprContext[] = [];
    public _havingExpr?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SELECT_, 0);
    }
    public result_column(): Result_columnContext[];
    public result_column(i: number): Result_columnContext | null;
    public result_column(i?: number): Result_columnContext[] | Result_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }

        return this.getRuleContext(i, Result_columnContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public FROM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public GROUP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public WINDOW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WINDOW_, 0);
    }
    public window_name(): Window_nameContext[];
    public window_name(i: number): Window_nameContext | null;
    public window_name(i?: number): Window_nameContext[] | Window_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Window_nameContext);
        }

        return this.getRuleContext(i, Window_nameContext);
    }
    public AS_(): antlr.TerminalNode[];
    public AS_(i: number): antlr.TerminalNode | null;
    public AS_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AS_);
    	} else {
    		return this.getToken(SQLiteParser.AS_, i);
    	}
    }
    public window_defn(): Window_defnContext[];
    public window_defn(i: number): Window_defnContext | null;
    public window_defn(i?: number): Window_defnContext[] | Window_defnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Window_defnContext);
        }

        return this.getRuleContext(i, Window_defnContext);
    }
    public DISTINCT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    public ALL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public table_or_subquery(): Table_or_subqueryContext[];
    public table_or_subquery(i: number): Table_or_subqueryContext | null;
    public table_or_subquery(i?: number): Table_or_subqueryContext[] | Table_or_subqueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }

        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    public join_clause(): Join_clauseContext | null {
        return this.getRuleContext(0, Join_clauseContext);
    }
    public HAVING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.HAVING_, 0);
    }
    public values_clause(): Values_clauseContext | null {
        return this.getRuleContext(0, Values_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_select_core;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSelect_core) {
             listener.enterSelect_core(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSelect_core) {
             listener.exitSelect_core(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSelect_core) {
            return visitor.visitSelect_core(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Factored_select_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_factored_select_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFactored_select_stmt) {
             listener.enterFactored_select_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFactored_select_stmt) {
             listener.exitFactored_select_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFactored_select_stmt) {
            return visitor.visitFactored_select_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Simple_select_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_core(): Select_coreContext {
        return this.getRuleContext(0, Select_coreContext)!;
    }
    public common_table_stmt(): Common_table_stmtContext | null {
        return this.getRuleContext(0, Common_table_stmtContext);
    }
    public order_by_stmt(): Order_by_stmtContext | null {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    public limit_stmt(): Limit_stmtContext | null {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_simple_select_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSimple_select_stmt) {
             listener.enterSimple_select_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSimple_select_stmt) {
             listener.exitSimple_select_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSimple_select_stmt) {
            return visitor.visitSimple_select_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Compound_select_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_core(): Select_coreContext[];
    public select_core(i: number): Select_coreContext | null;
    public select_core(i?: number): Select_coreContext[] | Select_coreContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }

        return this.getRuleContext(i, Select_coreContext);
    }
    public common_table_stmt(): Common_table_stmtContext | null {
        return this.getRuleContext(0, Common_table_stmtContext);
    }
    public order_by_stmt(): Order_by_stmtContext | null {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    public limit_stmt(): Limit_stmtContext | null {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    public UNION_(): antlr.TerminalNode[];
    public UNION_(i: number): antlr.TerminalNode | null;
    public UNION_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.UNION_);
    	} else {
    		return this.getToken(SQLiteParser.UNION_, i);
    	}
    }
    public INTERSECT_(): antlr.TerminalNode[];
    public INTERSECT_(i: number): antlr.TerminalNode | null;
    public INTERSECT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.INTERSECT_);
    	} else {
    		return this.getToken(SQLiteParser.INTERSECT_, i);
    	}
    }
    public EXCEPT_(): antlr.TerminalNode[];
    public EXCEPT_(i: number): antlr.TerminalNode | null;
    public EXCEPT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.EXCEPT_);
    	} else {
    		return this.getToken(SQLiteParser.EXCEPT_, i);
    	}
    }
    public ALL_(): antlr.TerminalNode[];
    public ALL_(i: number): antlr.TerminalNode | null;
    public ALL_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ALL_);
    	} else {
    		return this.getToken(SQLiteParser.ALL_, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_compound_select_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCompound_select_stmt) {
             listener.enterCompound_select_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCompound_select_stmt) {
             listener.exitCompound_select_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCompound_select_stmt) {
            return visitor.visitCompound_select_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_or_subqueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public table_alias(): Table_aliasContext | null {
        return this.getRuleContext(0, Table_aliasContext);
    }
    public INDEXED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public index_name(): Index_nameContext | null {
        return this.getRuleContext(0, Index_nameContext);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public table_function_name(): Table_function_nameContext | null {
        return this.getRuleContext(0, Table_function_nameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public table_or_subquery(): Table_or_subqueryContext[];
    public table_or_subquery(i: number): Table_or_subqueryContext | null;
    public table_or_subquery(i?: number): Table_or_subqueryContext[] | Table_or_subqueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }

        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    public join_clause(): Join_clauseContext | null {
        return this.getRuleContext(0, Join_clauseContext);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_or_subquery;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_or_subquery) {
             listener.enterTable_or_subquery(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_or_subquery) {
             listener.exitTable_or_subquery(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_or_subquery) {
            return visitor.visitTable_or_subquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Result_columnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public column_alias(): Column_aliasContext | null {
        return this.getRuleContext(0, Column_aliasContext);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_result_column;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterResult_column) {
             listener.enterResult_column(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitResult_column) {
             listener.exitResult_column(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitResult_column) {
            return visitor.visitResult_column(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_operatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public JOIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.JOIN_, 0);
    }
    public NATURAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NATURAL_, 0);
    }
    public INNER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INNER_, 0);
    }
    public CROSS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CROSS_, 0);
    }
    public LEFT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LEFT_, 0);
    }
    public RIGHT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RIGHT_, 0);
    }
    public FULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FULL_, 0);
    }
    public OUTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OUTER_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_operator;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_operator) {
             listener.enterJoin_operator(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_operator) {
             listener.exitJoin_operator(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_operator) {
            return visitor.visitJoin_operator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_constraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public USING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.USING_, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_constraint;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_constraint) {
             listener.enterJoin_constraint(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_constraint) {
             listener.exitJoin_constraint(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_constraint) {
            return visitor.visitJoin_constraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Compound_operatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    public ALL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    public INTERSECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTERSECT_, 0);
    }
    public EXCEPT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCEPT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_compound_operator;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCompound_operator) {
             listener.enterCompound_operator(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCompound_operator) {
             listener.exitCompound_operator(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCompound_operator) {
            return visitor.visitCompound_operator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Update_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.UPDATE_, 0)!;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        return this.getRuleContext(0, Qualified_table_nameContext)!;
    }
    public SET_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.SET_, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode[];
    public ASSIGN(i: number): antlr.TerminalNode | null;
    public ASSIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ASSIGN);
    	} else {
    		return this.getToken(SQLiteParser.ASSIGN, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public column_name_list(): Column_name_listContext[];
    public column_name_list(i: number): Column_name_listContext | null;
    public column_name_list(i?: number): Column_name_listContext[] | Column_name_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }

        return this.getRuleContext(i, Column_name_listContext);
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public FROM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public table_or_subquery(): Table_or_subqueryContext[];
    public table_or_subquery(i: number): Table_or_subqueryContext | null;
    public table_or_subquery(i?: number): Table_or_subqueryContext[] | Table_or_subqueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }

        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    public join_clause(): Join_clauseContext | null {
        return this.getRuleContext(0, Join_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_update_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterUpdate_stmt) {
             listener.enterUpdate_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitUpdate_stmt) {
             listener.exitUpdate_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitUpdate_stmt) {
            return visitor.visitUpdate_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_name_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_name_list;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_name_list) {
             listener.enterColumn_name_list(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_name_list) {
             listener.exitColumn_name_list(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_name_list) {
            return visitor.visitColumn_name_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Update_stmt_limitedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.UPDATE_, 0)!;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        return this.getRuleContext(0, Qualified_table_nameContext)!;
    }
    public SET_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.SET_, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode[];
    public ASSIGN(i: number): antlr.TerminalNode | null;
    public ASSIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ASSIGN);
    	} else {
    		return this.getToken(SQLiteParser.ASSIGN, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public column_name_list(): Column_name_listContext[];
    public column_name_list(i: number): Column_name_listContext | null;
    public column_name_list(i?: number): Column_name_listContext[] | Column_name_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }

        return this.getRuleContext(i, Column_name_listContext);
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public limit_stmt(): Limit_stmtContext | null {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public order_by_stmt(): Order_by_stmtContext | null {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_update_stmt_limited;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterUpdate_stmt_limited) {
             listener.enterUpdate_stmt_limited(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitUpdate_stmt_limited) {
             listener.exitUpdate_stmt_limited(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitUpdate_stmt_limited) {
            return visitor.visitUpdate_stmt_limited(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Qualified_table_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public INDEXED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public index_name(): Index_nameContext | null {
        return this.getRuleContext(0, Index_nameContext);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_qualified_table_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterQualified_table_name) {
             listener.enterQualified_table_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitQualified_table_name) {
             listener.exitQualified_table_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitQualified_table_name) {
            return visitor.visitQualified_table_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Vacuum_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VACUUM_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VACUUM_, 0)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public INTO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTO_, 0);
    }
    public filename(): FilenameContext | null {
        return this.getRuleContext(0, FilenameContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_vacuum_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterVacuum_stmt) {
             listener.enterVacuum_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitVacuum_stmt) {
             listener.exitVacuum_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitVacuum_stmt) {
            return visitor.visitVacuum_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Filter_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILTER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.FILTER_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public WHERE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.WHERE_, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_filter_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFilter_clause) {
             listener.enterFilter_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFilter_clause) {
             listener.exitFilter_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFilter_clause) {
            return visitor.visitFilter_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Window_defnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public ORDER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    public BY_(): antlr.TerminalNode[];
    public BY_(i: number): antlr.TerminalNode | null;
    public BY_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.BY_);
    	} else {
    		return this.getToken(SQLiteParser.BY_, i);
    	}
    }
    public ordering_term(): Ordering_termContext[];
    public ordering_term(i: number): Ordering_termContext | null;
    public ordering_term(i?: number): Ordering_termContext[] | Ordering_termContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }

        return this.getRuleContext(i, Ordering_termContext);
    }
    public base_window_name(): Base_window_nameContext | null {
        return this.getRuleContext(0, Base_window_nameContext);
    }
    public PARTITION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public frame_spec(): Frame_specContext | null {
        return this.getRuleContext(0, Frame_specContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_window_defn;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWindow_defn) {
             listener.enterWindow_defn(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWindow_defn) {
             listener.exitWindow_defn(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWindow_defn) {
            return visitor.visitWindow_defn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Over_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OVER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OVER_, 0)!;
    }
    public window_name(): Window_nameContext | null {
        return this.getRuleContext(0, Window_nameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public base_window_name(): Base_window_nameContext | null {
        return this.getRuleContext(0, Base_window_nameContext);
    }
    public PARTITION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    public BY_(): antlr.TerminalNode[];
    public BY_(i: number): antlr.TerminalNode | null;
    public BY_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.BY_);
    	} else {
    		return this.getToken(SQLiteParser.BY_, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public ORDER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    public ordering_term(): Ordering_termContext[];
    public ordering_term(i: number): Ordering_termContext | null;
    public ordering_term(i?: number): Ordering_termContext[] | Ordering_termContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }

        return this.getRuleContext(i, Ordering_termContext);
    }
    public frame_spec(): Frame_specContext | null {
        return this.getRuleContext(0, Frame_specContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_over_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOver_clause) {
             listener.enterOver_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOver_clause) {
             listener.exitOver_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOver_clause) {
            return visitor.visitOver_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_specContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public frame_clause(): Frame_clauseContext {
        return this.getRuleContext(0, Frame_clauseContext)!;
    }
    public EXCLUDE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUDE_, 0);
    }
    public NO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NO_, 0);
    }
    public OTHERS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OTHERS_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public GROUP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    public TIES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TIES_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_spec;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_spec) {
             listener.enterFrame_spec(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_spec) {
             listener.exitFrame_spec(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_spec) {
            return visitor.visitFrame_spec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RANGE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RANGE_, 0);
    }
    public ROWS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROWS_, 0);
    }
    public GROUPS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUPS_, 0);
    }
    public frame_single(): Frame_singleContext | null {
        return this.getRuleContext(0, Frame_singleContext);
    }
    public BETWEEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    public frame_left(): Frame_leftContext | null {
        return this.getRuleContext(0, Frame_leftContext);
    }
    public AND_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    public frame_right(): Frame_rightContext | null {
        return this.getRuleContext(0, Frame_rightContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_clause) {
             listener.enterFrame_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_clause) {
             listener.exitFrame_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_clause) {
            return visitor.visitFrame_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Simple_function_invocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simple_func(): Simple_funcContext {
        return this.getRuleContext(0, Simple_funcContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_simple_function_invocation;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSimple_function_invocation) {
             listener.enterSimple_function_invocation(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSimple_function_invocation) {
             listener.exitSimple_function_invocation(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSimple_function_invocation) {
            return visitor.visitSimple_function_invocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Aggregate_function_invocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aggregate_func(): Aggregate_funcContext {
        return this.getRuleContext(0, Aggregate_funcContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public filter_clause(): Filter_clauseContext | null {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    public DISTINCT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_aggregate_function_invocation;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAggregate_function_invocation) {
             listener.enterAggregate_function_invocation(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAggregate_function_invocation) {
             listener.exitAggregate_function_invocation(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAggregate_function_invocation) {
            return visitor.visitAggregate_function_invocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Window_function_invocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public window_function(): Window_functionContext {
        return this.getRuleContext(0, Window_functionContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public OVER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OVER_, 0)!;
    }
    public window_defn(): Window_defnContext | null {
        return this.getRuleContext(0, Window_defnContext);
    }
    public window_name(): Window_nameContext | null {
        return this.getRuleContext(0, Window_nameContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public filter_clause(): Filter_clauseContext | null {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_window_function_invocation;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWindow_function_invocation) {
             listener.enterWindow_function_invocation(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWindow_function_invocation) {
             listener.exitWindow_function_invocation(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWindow_function_invocation) {
            return visitor.visitWindow_function_invocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Common_table_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.WITH_, 0)!;
    }
    public common_table_expression(): Common_table_expressionContext[];
    public common_table_expression(i: number): Common_table_expressionContext | null;
    public common_table_expression(i?: number): Common_table_expressionContext[] | Common_table_expressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }

        return this.getRuleContext(i, Common_table_expressionContext);
    }
    public RECURSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_common_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCommon_table_stmt) {
             listener.enterCommon_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCommon_table_stmt) {
             listener.exitCommon_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCommon_table_stmt) {
            return visitor.visitCommon_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Order_by_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ORDER_, 0)!;
    }
    public BY_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BY_, 0)!;
    }
    public ordering_term(): Ordering_termContext[];
    public ordering_term(i: number): Ordering_termContext | null;
    public ordering_term(i?: number): Ordering_termContext[] | Ordering_termContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }

        return this.getRuleContext(i, Ordering_termContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_order_by_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOrder_by_stmt) {
             listener.enterOrder_by_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOrder_by_stmt) {
             listener.exitOrder_by_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOrder_by_stmt) {
            return visitor.visitOrder_by_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Limit_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.LIMIT_, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public OFFSET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OFFSET_, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_limit_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterLimit_stmt) {
             listener.enterLimit_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitLimit_stmt) {
             listener.exitLimit_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitLimit_stmt) {
            return visitor.visitLimit_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Ordering_termContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public asc_desc(): Asc_descContext | null {
        return this.getRuleContext(0, Asc_descContext);
    }
    public NULLS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULLS_, 0);
    }
    public FIRST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FIRST_, 0);
    }
    public LAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAST_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_ordering_term;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOrdering_term) {
             listener.enterOrdering_term(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOrdering_term) {
             listener.exitOrdering_term(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOrdering_term) {
            return visitor.visitOrdering_term(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Asc_descContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASC_, 0);
    }
    public DESC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DESC_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_asc_desc;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAsc_desc) {
             listener.enterAsc_desc(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAsc_desc) {
             listener.exitAsc_desc(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAsc_desc) {
            return visitor.visitAsc_desc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_leftContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public FOLLOWING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public UNBOUNDED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_left;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_left) {
             listener.enterFrame_left(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_left) {
             listener.exitFrame_left(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_left) {
            return visitor.visitFrame_left(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_rightContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public FOLLOWING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public UNBOUNDED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_right;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_right) {
             listener.enterFrame_right(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_right) {
             listener.exitFrame_right(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_right) {
            return visitor.visitFrame_right(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_singleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public UNBOUNDED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_single;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_single) {
             listener.enterFrame_single(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_single) {
             listener.exitFrame_single(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_single) {
            return visitor.visitFrame_single(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Window_functionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode[];
    public OPEN_PAR(i: number): antlr.TerminalNode | null;
    public OPEN_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OPEN_PAR);
    	} else {
    		return this.getToken(SQLiteParser.OPEN_PAR, i);
    	}
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode[];
    public CLOSE_PAR(i: number): antlr.TerminalNode | null;
    public CLOSE_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.CLOSE_PAR);
    	} else {
    		return this.getToken(SQLiteParser.CLOSE_PAR, i);
    	}
    }
    public OVER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OVER_, 0)!;
    }
    public order_by_expr_asc_desc(): Order_by_expr_asc_descContext | null {
        return this.getRuleContext(0, Order_by_expr_asc_descContext);
    }
    public FIRST_VALUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
    }
    public LAST_VALUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAST_VALUE_, 0);
    }
    public partition_by(): Partition_byContext | null {
        return this.getRuleContext(0, Partition_byContext);
    }
    public frame_clause(): Frame_clauseContext | null {
        return this.getRuleContext(0, Frame_clauseContext);
    }
    public CUME_DIST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CUME_DIST_, 0);
    }
    public PERCENT_RANK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
    }
    public order_by_expr(): Order_by_exprContext | null {
        return this.getRuleContext(0, Order_by_exprContext);
    }
    public DENSE_RANK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DENSE_RANK_, 0);
    }
    public RANK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RANK_, 0);
    }
    public ROW_NUMBER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
    }
    public LAG_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAG_, 0);
    }
    public LEAD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LEAD_, 0);
    }
    public offset(): OffsetContext | null {
        return this.getRuleContext(0, OffsetContext);
    }
    public default_value(): Default_valueContext | null {
        return this.getRuleContext(0, Default_valueContext);
    }
    public NTH_VALUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NTH_VALUE_, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public signed_number(): Signed_numberContext | null {
        return this.getRuleContext(0, Signed_numberContext);
    }
    public NTILE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NTILE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_window_function;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWindow_function) {
             listener.enterWindow_function(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWindow_function) {
             listener.exitWindow_function(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWindow_function) {
            return visitor.visitWindow_function(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OffsetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.COMMA, 0)!;
    }
    public signed_number(): Signed_numberContext {
        return this.getRuleContext(0, Signed_numberContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_offset;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOffset) {
             listener.enterOffset(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOffset) {
             listener.exitOffset(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOffset) {
            return visitor.visitOffset(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Default_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.COMMA, 0)!;
    }
    public signed_number(): Signed_numberContext {
        return this.getRuleContext(0, Signed_numberContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_default_value;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDefault_value) {
             listener.enterDefault_value(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDefault_value) {
             listener.exitDefault_value(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDefault_value) {
            return visitor.visitDefault_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Partition_byContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.PARTITION_, 0)!;
    }
    public BY_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BY_, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_partition_by;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPartition_by) {
             listener.enterPartition_by(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPartition_by) {
             listener.exitPartition_by(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPartition_by) {
            return visitor.visitPartition_by(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Order_by_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ORDER_, 0)!;
    }
    public BY_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BY_, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_order_by_expr;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOrder_by_expr) {
             listener.enterOrder_by_expr(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOrder_by_expr) {
             listener.exitOrder_by_expr(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOrder_by_expr) {
            return visitor.visitOrder_by_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Order_by_expr_asc_descContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ORDER_, 0)!;
    }
    public BY_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BY_, 0)!;
    }
    public expr_asc_desc(): Expr_asc_descContext {
        return this.getRuleContext(0, Expr_asc_descContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_order_by_expr_asc_desc;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOrder_by_expr_asc_desc) {
             listener.enterOrder_by_expr_asc_desc(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOrder_by_expr_asc_desc) {
             listener.exitOrder_by_expr_asc_desc(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOrder_by_expr_asc_desc) {
            return visitor.visitOrder_by_expr_asc_desc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_asc_descContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public asc_desc(): Asc_descContext[];
    public asc_desc(i: number): Asc_descContext | null;
    public asc_desc(i?: number): Asc_descContext[] | Asc_descContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Asc_descContext);
        }

        return this.getRuleContext(i, Asc_descContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_asc_desc;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_asc_desc) {
             listener.enterExpr_asc_desc(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_asc_desc) {
             listener.exitExpr_asc_desc(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_asc_desc) {
            return visitor.visitExpr_asc_desc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Initial_selectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_initial_select;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterInitial_select) {
             listener.enterInitial_select(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitInitial_select) {
             listener.exitInitial_select(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitInitial_select) {
            return visitor.visitInitial_select(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Recursive_selectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_recursive_select;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRecursive_select) {
             listener.enterRecursive_select(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRecursive_select) {
             listener.exitRecursive_select(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRecursive_select) {
            return visitor.visitRecursive_select(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Unary_operatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    public TILDE(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TILDE, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_unary_operator;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterUnary_operator) {
             listener.enterUnary_operator(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitUnary_operator) {
             listener.exitUnary_operator(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitUnary_operator) {
            return visitor.visitUnary_operator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Error_messageContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_error_message;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterError_message) {
             listener.enterError_message(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitError_message) {
             listener.exitError_message(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitError_message) {
            return visitor.visitError_message(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_argumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public column_def(): Column_defContext | null {
        return this.getRuleContext(0, Column_defContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_module_argument;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterModule_argument) {
             listener.enterModule_argument(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitModule_argument) {
             listener.exitModule_argument(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitModule_argument) {
            return visitor.visitModule_argument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_aliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_alias;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_alias) {
             listener.enterColumn_alias(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_alias) {
             listener.exitColumn_alias(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_alias) {
            return visitor.visitColumn_alias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public ACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ACTION_, 0);
    }
    public ADD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ADD_, 0);
    }
    public AFTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AFTER_, 0);
    }
    public ALL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    public ALTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALTER_, 0);
    }
    public ANALYZE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ANALYZE_, 0);
    }
    public AND_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public ASC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASC_, 0);
    }
    public ATTACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ATTACH_, 0);
    }
    public AUTOINCREMENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
    }
    public BEFORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BEFORE_, 0);
    }
    public BEGIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BEGIN_, 0);
    }
    public BETWEEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public CASCADE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CASCADE_, 0);
    }
    public CASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CASE_, 0);
    }
    public CAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CAST_, 0);
    }
    public CHECK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public COLUMN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLUMN_, 0);
    }
    public COMMIT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMIT_, 0);
    }
    public CONFLICT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONFLICT_, 0);
    }
    public CONSTRAINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    public CREATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    public CROSS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CROSS_, 0);
    }
    public CURRENT_DATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
    }
    public CURRENT_TIME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
    }
    public CURRENT_TIMESTAMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
    }
    public DATABASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    public DEFAULT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    public DEFERRABLE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRABLE_, 0);
    }
    public DEFERRED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    public DELETE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    public DESC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DESC_, 0);
    }
    public DETACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DETACH_, 0);
    }
    public DISTINCT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    public DROP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DROP_, 0);
    }
    public EACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EACH_, 0);
    }
    public ELSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ELSE_, 0);
    }
    public END_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.END_, 0);
    }
    public ESCAPE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ESCAPE_, 0);
    }
    public EXCEPT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCEPT_, 0);
    }
    public EXCLUSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public EXPLAIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXPLAIN_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public FOR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOR_, 0);
    }
    public FOREIGN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOREIGN_, 0);
    }
    public FROM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    public FULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FULL_, 0);
    }
    public GLOB_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GLOB_, 0);
    }
    public GROUP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    public HAVING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.HAVING_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public IMMEDIATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    public IN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IN_, 0);
    }
    public INDEX_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEX_, 0);
    }
    public INDEXED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    public INITIALLY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INITIALLY_, 0);
    }
    public INNER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INNER_, 0);
    }
    public INSERT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    public INSTEAD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSTEAD_, 0);
    }
    public INTERSECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTERSECT_, 0);
    }
    public INTO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTO_, 0);
    }
    public IS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IS_, 0);
    }
    public ISNULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ISNULL_, 0);
    }
    public JOIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.JOIN_, 0);
    }
    public KEY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    public LEFT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LEFT_, 0);
    }
    public LIKE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LIKE_, 0);
    }
    public LIMIT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LIMIT_, 0);
    }
    public MATCH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MATCH_, 0);
    }
    public NATURAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NATURAL_, 0);
    }
    public NO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NO_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public NOTNULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOTNULL_, 0);
    }
    public NULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    public OF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OF_, 0);
    }
    public OFFSET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OFFSET_, 0);
    }
    public ON_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public ORDER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    public OUTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OUTER_, 0);
    }
    public PLAN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLAN_, 0);
    }
    public PRAGMA_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRAGMA_, 0);
    }
    public PRIMARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    public QUERY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.QUERY_, 0);
    }
    public RAISE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RAISE_, 0);
    }
    public RECURSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    public REFERENCES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REFERENCES_, 0);
    }
    public REGEXP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REGEXP_, 0);
    }
    public REINDEX_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REINDEX_, 0);
    }
    public RELEASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RELEASE_, 0);
    }
    public RENAME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RENAME_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public RESTRICT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RESTRICT_, 0);
    }
    public RIGHT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RIGHT_, 0);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public ROWS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROWS_, 0);
    }
    public SAVEPOINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    public SELECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SELECT_, 0);
    }
    public SET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    public TABLE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public THEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.THEN_, 0);
    }
    public TO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public TRIGGER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    public UNION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public UPDATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    public USING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.USING_, 0);
    }
    public VACUUM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VACUUM_, 0);
    }
    public VALUES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VALUES_, 0);
    }
    public VIEW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    public VIRTUAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    public WHEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHEN_, 0);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public WITH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WITH_, 0);
    }
    public WITHOUT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WITHOUT_, 0);
    }
    public FIRST_VALUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
    }
    public OVER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OVER_, 0);
    }
    public PARTITION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    public RANGE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RANGE_, 0);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public UNBOUNDED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public FOLLOWING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    public CUME_DIST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CUME_DIST_, 0);
    }
    public DENSE_RANK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DENSE_RANK_, 0);
    }
    public LAG_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAG_, 0);
    }
    public LAST_VALUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAST_VALUE_, 0);
    }
    public LEAD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LEAD_, 0);
    }
    public NTH_VALUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NTH_VALUE_, 0);
    }
    public NTILE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NTILE_, 0);
    }
    public PERCENT_RANK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
    }
    public RANK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RANK_, 0);
    }
    public ROW_NUMBER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
    }
    public GENERATED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GENERATED_, 0);
    }
    public ALWAYS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALWAYS_, 0);
    }
    public STORED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STORED_, 0);
    }
    public TRUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRUE_, 0);
    }
    public FALSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FALSE_, 0);
    }
    public WINDOW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WINDOW_, 0);
    }
    public NULLS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULLS_, 0);
    }
    public FIRST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FIRST_, 0);
    }
    public LAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAST_, 0);
    }
    public FILTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FILTER_, 0);
    }
    public GROUPS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUPS_, 0);
    }
    public EXCLUDE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUDE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_keyword;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterKeyword) {
             listener.enterKeyword(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitKeyword) {
             listener.exitKeyword(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterName) {
             listener.enterName(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitName) {
             listener.exitName(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitName) {
            return visitor.visitName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Function_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_function_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFunction_name) {
             listener.enterFunction_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFunction_name) {
             listener.exitFunction_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFunction_name) {
            return visitor.visitFunction_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Schema_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_schema_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSchema_name) {
             listener.enterSchema_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSchema_name) {
             listener.exitSchema_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSchema_name) {
            return visitor.visitSchema_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_name) {
             listener.enterTable_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_name) {
             listener.exitTable_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_name) {
            return visitor.visitTable_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_or_index_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_or_index_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_or_index_name) {
             listener.enterTable_or_index_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_or_index_name) {
             listener.exitTable_or_index_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_or_index_name) {
            return visitor.visitTable_or_index_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_name) {
             listener.enterColumn_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_name) {
             listener.exitColumn_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_name) {
            return visitor.visitColumn_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Collation_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_collation_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCollation_name) {
             listener.enterCollation_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCollation_name) {
             listener.exitCollation_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCollation_name) {
            return visitor.visitCollation_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Foreign_tableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_foreign_table;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterForeign_table) {
             listener.enterForeign_table(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitForeign_table) {
             listener.exitForeign_table(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitForeign_table) {
            return visitor.visitForeign_table(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Index_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_index_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterIndex_name) {
             listener.enterIndex_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitIndex_name) {
             listener.exitIndex_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitIndex_name) {
            return visitor.visitIndex_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Trigger_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_trigger_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTrigger_name) {
             listener.enterTrigger_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTrigger_name) {
             listener.exitTrigger_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTrigger_name) {
            return visitor.visitTrigger_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class View_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_view_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterView_name) {
             listener.enterView_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitView_name) {
             listener.exitView_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitView_name) {
            return visitor.visitView_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_module_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterModule_name) {
             listener.enterModule_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitModule_name) {
             listener.exitModule_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitModule_name) {
            return visitor.visitModule_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pragma_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_pragma_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPragma_name) {
             listener.enterPragma_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPragma_name) {
             listener.exitPragma_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPragma_name) {
            return visitor.visitPragma_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Savepoint_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_savepoint_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSavepoint_name) {
             listener.enterSavepoint_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSavepoint_name) {
             listener.exitSavepoint_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSavepoint_name) {
            return visitor.visitSavepoint_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_aliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_alias;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_alias) {
             listener.enterTable_alias(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_alias) {
             listener.exitTable_alias(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_alias) {
            return visitor.visitTable_alias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Transaction_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_transaction_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTransaction_name) {
             listener.enterTransaction_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTransaction_name) {
             listener.exitTransaction_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTransaction_name) {
            return visitor.visitTransaction_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Window_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_window_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWindow_name) {
             listener.enterWindow_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWindow_name) {
             listener.exitWindow_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWindow_name) {
            return visitor.visitWindow_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_alias;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAlias) {
             listener.enterAlias(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAlias) {
             listener.exitAlias(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilenameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_filename;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFilename) {
             listener.enterFilename(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFilename) {
             listener.exitFilename(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFilename) {
            return visitor.visitFilename(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Base_window_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_base_window_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterBase_window_name) {
             listener.enterBase_window_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitBase_window_name) {
             listener.exitBase_window_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitBase_window_name) {
            return visitor.visitBase_window_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Simple_funcContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_simple_func;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSimple_func) {
             listener.enterSimple_func(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSimple_func) {
             listener.exitSimple_func(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSimple_func) {
            return visitor.visitSimple_func(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Aggregate_funcContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_aggregate_func;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAggregate_func) {
             listener.enterAggregate_func(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAggregate_func) {
             listener.exitAggregate_func(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAggregate_func) {
            return visitor.visitAggregate_func(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_function_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_function_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_function_name) {
             listener.enterTable_function_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_function_name) {
             listener.exitTable_function_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_function_name) {
            return visitor.visitTable_function_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Any_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public any_name(): Any_nameContext | null {
        return this.getRuleContext(0, Any_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_any_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAny_name) {
             listener.enterAny_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAny_name) {
             listener.exitAny_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAny_name) {
            return visitor.visitAny_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
