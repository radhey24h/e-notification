"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var university_dao_1 = require("../data-access-object/university.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var UniversityController = /** @class */ (function () {
    function UniversityController() {
    }
    UniversityController.prototype.getAllUniversity = function (req, res, next) {
        logger_1.default.info('getUniversitys :: Universitys');
        var universitysDAO = new university_dao_1.UniversityDAO();
        universitysDAO.getAllUniversity(req, res, next);
    };
    UniversityController.prototype.getUniversity = function (req, res, next) {
        logger_1.default.info('getUniversity :: Universitys');
        var universitysDAO = new university_dao_1.UniversityDAO();
        universitysDAO.getUniversity(req, res, next);
    };
    UniversityController.prototype.addUniversity = function (req, res, next) {
        logger_1.default.info('addUniversitys :: Universitys');
        var universitysDAO = new university_dao_1.UniversityDAO();
        universitysDAO.addUniversity(req, res, next);
    };
    UniversityController.prototype.updateUniversity = function (req, res, next) {
        logger_1.default.info('updateUniversitys :: Universitys');
        var universitysDAO = new university_dao_1.UniversityDAO();
        universitysDAO.updateUniversity(req, res, next);
    };
    UniversityController.prototype.deleteUniversity = function (req, res, next) {
        logger_1.default.info('deleteUniversitys :: Universitys');
        var universitysDAO = new university_dao_1.UniversityDAO();
        universitysDAO.deleteUniversity(req, res, next);
    };
    return UniversityController;
}());
exports.UniversityController = UniversityController;
//# sourceMappingURL=university.controller.js.map