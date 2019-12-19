"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var syllabus_1 = require("../models/syllabus");
var SyllabusDAO = /** @class */ (function () {
    function SyllabusDAO() {
    }
    SyllabusDAO.prototype.getAllSyllabus = function (req, res, next) {
        syllabus_1.Syllabus.find({}, function (error, Syllabuss) {
            if (error) {
                res.send(error);
            }
            res.json(Syllabuss);
        });
    };
    SyllabusDAO.prototype.getSyllabus = function (req, res, next) {
        var syllabus = syllabus_1.Syllabus.findById(req.params.id, function (err, Syllabus) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(Syllabus);
            }
        });
    };
    SyllabusDAO.prototype.addSyllabus = function (req, res, next) {
        var syllabus = new syllabus_1.Syllabus(req.body);
        syllabus.save(function (error, syllabus) {
            if (error) {
                res.send(error);
            }
            res.json(syllabus);
        });
    };
    SyllabusDAO.prototype.updateSyllabus = function (req, res, next) {
        var syllabusId = req.params.id;
        syllabus_1.Syllabus.findByIdAndUpdate(syllabusId, req.body, function (error, Syllabus) {
            if (error) {
                res.send(error);
            }
            var message = Syllabus
                ? 'Updated successfully'
                : 'Syllabus not found :(';
            res.send(message);
        });
    };
    SyllabusDAO.prototype.deleteSyllabus = function (req, res, next) {
        var syllabusID = req.params.id;
        syllabus_1.Syllabus.findByIdAndDelete(syllabusID, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'Syllabuss not found :(';
            res.send(message);
        });
    };
    return SyllabusDAO;
}());
exports.SyllabusDAO = SyllabusDAO;
//# sourceMappingURL=syllabus.dao.js.map