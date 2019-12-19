"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var examination_dao_1 = require("../data-access-object/examination.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var ExaminationController = /** @class */ (function () {
    function ExaminationController() {
    }
    ExaminationController.prototype.getAllExamination = function (req, res, next) {
        logger_1.default.info('getExaminations :: Examinations');
        var examinationsDAO = new examination_dao_1.ExaminationDAO();
        examinationsDAO.getAllExamination(req, res, next);
    };
    ExaminationController.prototype.getExamination = function (req, res, next) {
        logger_1.default.info('getExamination :: Examinations');
        var examinationsDAO = new examination_dao_1.ExaminationDAO();
        examinationsDAO.getExamination(req, res, next);
    };
    ExaminationController.prototype.addExamination = function (req, res, next) {
        logger_1.default.info('addExaminations :: Examinations');
        var examinationsDAO = new examination_dao_1.ExaminationDAO();
        examinationsDAO.addExamination(req, res, next);
    };
    ExaminationController.prototype.updateExamination = function (req, res, next) {
        logger_1.default.info('updateExaminations :: Examinations');
        var examinationsDAO = new examination_dao_1.ExaminationDAO();
        examinationsDAO.updateExamination(req, res, next);
    };
    ExaminationController.prototype.deleteExamination = function (req, res, next) {
        logger_1.default.info('deleteExaminations :: Examinations');
        var examinationsDAO = new examination_dao_1.ExaminationDAO();
        examinationsDAO.deleteExamination(req, res, next);
    };
    return ExaminationController;
}());
exports.ExaminationController = ExaminationController;
//# sourceMappingURL=examination.controller.js.map