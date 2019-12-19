"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../models/result");
var ResultDAO = /** @class */ (function () {
    function ResultDAO() {
    }
    ResultDAO.prototype.getAllResult = function (req, res, next) {
        result_1.Result.find({}, function (error, results) {
            if (error) {
                res.send(error);
            }
            res.json(results);
        });
    };
    ResultDAO.prototype.getResult = function (req, res, next) {
        var result = result_1.Result.findById(req.params.id, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(result);
            }
        });
    };
    ResultDAO.prototype.addResult = function (req, res, next) {
        var result = new result_1.Result(req.body);
        result.save(function (error, result) {
            if (error) {
                res.send(error);
            }
            res.json(result);
        });
    };
    ResultDAO.prototype.updateResult = function (req, res, next) {
        var resultsId = req.params.id;
        result_1.Result.findByIdAndUpdate(resultsId, req.body, function (error, Results) {
            if (error) {
                res.send(error);
            }
            var message = Results
                ? 'Updated successfully'
                : 'Results not found :(';
            res.send(message);
        });
    };
    ResultDAO.prototype.deleteResult = function (req, res, next) {
        var resultId = req.params.id;
        result_1.Result.findByIdAndDelete(resultId, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'Result not found :(';
            res.send(message);
        });
    };
    return ResultDAO;
}());
exports.ResultDAO = ResultDAO;
//# sourceMappingURL=result.dao.js.map