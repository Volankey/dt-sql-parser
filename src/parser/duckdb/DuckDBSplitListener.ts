import { SingleStmtContext } from '../../lib/duckdb/DuckDBParser';
import { DuckDBParserListener } from '../../lib/duckdb/DuckDBParserListener';
import { SplitListener } from '../common/splitListener';

export class DuckDBSplitListener
    extends SplitListener<SingleStmtContext>
    implements DuckDBParserListener
{
    exitSingleStmt(ctx: SingleStmtContext) {
        this._statementsContext.push(ctx);
    }
}
