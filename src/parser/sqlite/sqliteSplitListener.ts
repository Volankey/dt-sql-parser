import { SingleStmtContext } from '../../lib/sqlite/SQLiteParser';
import { SQLiteParserListener } from '../../lib/sqlite/SQLiteParserListener';
import { SplitListener } from '../common/splitListener';

export class SQLiteSplitListener
    extends SplitListener<SingleStmtContext>
    implements SQLiteParserListener
{
    exitSingleStmt(ctx: SingleStmtContext) {
        this._statementsContext.push(ctx);
    }
}
