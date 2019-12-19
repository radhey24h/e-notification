"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var university_1 = require("../models/university");
var UniversityDAO = /** @class */ (function () {
    function UniversityDAO() {
    }
    UniversityDAO.prototype.getAllUniversity = function (req, res, next) {
        university_1.University.find({}, function (error, Universitys) {
            if (error) {
                res.send(error);
            }
            res.json(Universitys);
        });
    };
    UniversityDAO.prototype.getUniversity = function (req, res, next) {
        var university = university_1.University.findById(req.params.id, function (err, University) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(University);
            }
        });
    };
    UniversityDAO.prototype.addUniversity = function (req, res, next) {
        var university = new university_1.University(req.body);
        university.save(function (error, pokemon) {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    };
    UniversityDAO.prototype.updateUniversity = function (req, res, next) {
        var universityId = req.params.id;
        university_1.University.findByIdAndUpdate(universityId, req.body, function (error, University) {
            if (error) {
                res.send(error);
            }
            var message = University
                ? 'Updated successfully'
                : 'University not found :(';
            res.send(message);
        });
    };
    UniversityDAO.prototype.deleteUniversity = function (req, res, next) {
        var universityId = req.params.id;
        university_1.University.findByIdAndDelete(universityId, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'Universitys not found :(';
            res.send(message);
        });
    };
    return UniversityDAO;
}());
exports.UniversityDAO = UniversityDAO;
//# sourceMappingURL=university.dao.js.map