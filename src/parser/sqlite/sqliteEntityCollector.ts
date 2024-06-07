import type {
    Table_nameContext as TableNameContext,
    View_nameContext as ViewNameContext,
    SingleStmtContext as SingleStatementContext,
    Create_table_stmtContext as QueryCreateTableContext,
    Create_view_stmtContext as CreateViewContext,
    Insert_stmtContext as InsertStatementContext,
    Select_stmtContext as SelectStatementContext,
    Simple_select_stmtContext as SimpleSelectStatementContext,
} from '../../lib/sqlite/SQLiteParser';
import type { SQLiteParserListener } from '../../lib/sqlite/SQLiteParserListener';
import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';

export class SQLiteEntityCollector extends EntityCollector implements SQLiteParserListener {
    /** ====== Entity Begin */

    // exitDatabaseName(ctx: DatabaseNameContext) {
    //     this.pushEntity(ctx, EntityContextType.DATABASE);
    // }

    // exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
    //     this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    // }

    exitTable_name(ctx: TableNameContext) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }

    // exitTableNameCreate(ctx: TableNameCreateContext) {
    //     this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    // }

    exitView_name(ctx: ViewNameContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    /** ===== Statement begin */
    enterSingleStmt(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStmt(ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreate_table_stmt(ctx: QueryCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreate_table_stmt(ctx: QueryCreateTableContext) {
        this.popStmt();
    }

    enterCreate_view_stmt(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreate_view_stmt(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterSimple_select_stmt(ctx: SimpleSelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSimple_select_stmt(ctx: SimpleSelectStatementContext) {
        this.popStmt();
    }

    enterSelect_stmt(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelect_stmt(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterInsert_stmt(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsert_stmt(ctx: InsertStatementContext) {
        this.popStmt();
    }
}
