"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var examination_1 = require("../models/examination");
var ExaminationDAO = /** @class */ (function () {
    function ExaminationDAO() {
    }
    ExaminationDAO.prototype.getAllExamination = function (req, res, next) {
        examination_1.Examination.find({}, function (error, Examinations) {
            if (error) {
                res.send(error);
            }
            res.json(Examinations);
        });
    };
    ExaminationDAO.prototype.getExamination = function (req, res, next) {
        var examination = examination_1.Examination.findById(req.params.id, function (err, Examination) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(Examination);
            }
        });
    };
    ExaminationDAO.prototype.addExamination = function (req, res, next) {
        var examination = new examination_1.Examination(req.body);
        examination.save(function (error, pokemon) {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    };
    ExaminationDAO.prototype.updateExamination = function (req, res, next) {
        var examinationId = req.params.id;
        examination_1.Examination.findByIdAndUpdate(examinationId, req.body, function (error, Examination) {
            if (error) {
                res.send(error);
            }
            var message = Examination
                ? 'Updated successfully'
                : 'Examination not found :(';
            res.send(message);
        });
    };
    ExaminationDAO.prototype.deleteExamination = function (req, res, next) {
        var examinationID = req.params.id;
        examination_1.Examination.findByIdAndDelete(examinationID, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'Examinations not found :(';
            res.send(message);
        });
    };
    return ExaminationDAO;
}());
exports.ExaminationDAO = ExaminationDAO;
//# sourceMappingURL=examination.dao.js.map