"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var result_dao_1 = require("../data-access-object/result.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var ResultController = /** @class */ (function () {
    function ResultController() {
    }
    ResultController.prototype.getAllResult = function (req, res, next) {
        logger_1.default.info('getresults :: results');
        var resultsDAO = new result_dao_1.ResultDAO();
        resultsDAO.getAllResult(req, res, next);
    };
    ResultController.prototype.getResult = function (req, res, next) {
        logger_1.default.info('getresults:: results');
        var resultsDAO = new result_dao_1.ResultDAO();
        resultsDAO.getResult(req, res, next);
    };
    ResultController.prototype.addResult = function (req, res, next) {
        logger_1.default.info('addresults :: results');
        var resultsDAO = new result_dao_1.ResultDAO();
        resultsDAO.addResult(req, res, next);
    };
    ResultController.prototype.updateResult = function (req, res, next) {
        logger_1.default.info('updateresults :: results');
        var resultsDAO = new result_dao_1.ResultDAO();
        resultsDAO.updateResult(req, res, next);
    };
    ResultController.prototype.deleteResult = function (req, res, next) {
        logger_1.default.info('deleteresults :: results');
        var resultsDAO = new result_dao_1.ResultDAO();
        resultsDAO.deleteResult(req, res, next);
    };
    return ResultController;
}());
exports.ResultController = ResultController;
//# sourceMappingURL=result.controller.js.map