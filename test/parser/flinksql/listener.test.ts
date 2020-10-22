import SQLParser, { PlSqlParserListener } from '../../../src/parser/plsql';
// todo 校验关键字提取
describe('PLSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SQLParser();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends PlSqlParserListener {
            enterTable_ref_list(ctx): void {
                result = ctx.getText().toLowerCase();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
