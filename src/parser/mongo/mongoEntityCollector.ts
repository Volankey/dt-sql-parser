// import { ParserRuleContext } from 'antlr4ng';
// import {MongoCommandsContext } from '../../lib/mongo/mongoParser';
import type { mongoListener as MongoParserListener } from '../../lib/mongo/mongoListener';
// import { DbFunctionCallContext } from '../../lib/mongo/mongoParser';
import { EntityCollector } from '../common/entityCollector';
// import { EntityContextType } from '../common/types';
// import { EntityContextType } from '../common/types';
// import { CommandsContext } from '../../lib/mongo/mongoParser';
// import { DbCollectionFunctionCallContext } from '../../lib/mongo/mongoParser';
// import { DbFunctionCallContext } from '../../lib/mongo/mongoParser';

export class MongoEntityCollector extends EntityCollector implements MongoParserListener {
    // exitPropertyValue(ctx) {
    // 	this.pushEntity(ctx, EntityContextType.PROPERTY_VAL);
    // }
    // exitPropertyName(ctx) {
    // 	this.pushEntity(ctx, EntityContextType.PROPERTY_NAME);
    // }
    // exitCollection(ctx) {
    // 	this.pushEntity(ctx, EntityContextType.COLLECTION);
    // }
    // //
    // // exitFunctionCall(ctx) {
    // // 	this.popStmt();
    // // }
    // enterFunctionCall(ctx) {
    // 	this.pushEntity(ctx, EntityContextType.FUNCTION);
    // 	// this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    // }
    // enterArgumentList(ctx) {
    // 	this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    // }
    // enterDbCollectionFunctionCall(ctx) {
    // 	this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    // }
    // enterDbFunctionCall(ctx) {
    // 	this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    // }
    // exitDbCollectionFunctionCall(ctx) {
    // 	this.popStmt();
    // }
    // exitDbFunctionCall(ctx) {
    // 	this.popStmt();
    // }
    // // enterArgumentList(ctx) {
    // // 	this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    // // }
    // exitArgumentList(ctx) {
    // 	this.popStmt();
    // }
}
