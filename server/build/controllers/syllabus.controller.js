"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var syllabus_dao_1 = require("../data-access-object/syllabus.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var SyllabusController = /** @class */ (function () {
    function SyllabusController() {
    }
    SyllabusController.prototype.getAllSyllabus = function (req, res, next) {
        logger_1.default.info('getSyllabuss :: Syllabuss');
        var syllabussDAO = new syllabus_dao_1.SyllabusDAO();
        syllabussDAO.getAllSyllabus(req, res, next);
    };
    SyllabusController.prototype.getSyllabus = function (req, res, next) {
        logger_1.default.info('getSyllabus :: Syllabuss');
        var syllabussDAO = new syllabus_dao_1.SyllabusDAO();
        syllabussDAO.getSyllabus(req, res, next);
    };
    SyllabusController.prototype.addSyllabus = function (req, res, next) {
        logger_1.default.info('addSyllabuss :: Syllabuss');
        var syllabussDAO = new syllabus_dao_1.SyllabusDAO();
        syllabussDAO.addSyllabus(req, res, next);
    };
    SyllabusController.prototype.updateSyllabus = function (req, res, next) {
        logger_1.default.info('updateSyllabuss :: Syllabuss');
        var syllabussDAO = new syllabus_dao_1.SyllabusDAO();
        syllabussDAO.updateSyllabus(req, res, next);
    };
    SyllabusController.prototype.deleteSyllabus = function (req, res, next) {
        logger_1.default.info('deleteSyllabuss :: Syllabuss');
        var syllabussDAO = new syllabus_dao_1.SyllabusDAO();
        syllabussDAO.deleteSyllabus(req, res, next);
    };
    return SyllabusController;
}());
exports.SyllabusController = SyllabusController;
//# sourceMappingURL=syllabus.controller.js.map