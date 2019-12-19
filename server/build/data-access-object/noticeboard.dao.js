"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noticeboard_1 = require("../models/noticeboard");
var NoticeboardDAO = /** @class */ (function () {
    function NoticeboardDAO() {
    }
    NoticeboardDAO.prototype.getAllNoticeboard = function (req, res, next) {
        noticeboard_1.Noticeboard.find({}, function (error, Noticeboards) {
            if (error) {
                res.send(error);
            }
            res.json(Noticeboards);
        });
    };
    NoticeboardDAO.prototype.getNoticeboard = function (req, res, next) {
        var noticeboard = noticeboard_1.Noticeboard.findById(req.params.id, function (err, Noticeboard) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(Noticeboard);
            }
        });
    };
    NoticeboardDAO.prototype.addNoticeboard = function (req, res, next) {
        var noticeboard = new noticeboard_1.Noticeboard(req.body);
        noticeboard.save(function (error, pokemon) {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    };
    NoticeboardDAO.prototype.updateNoticeboard = function (req, res, next) {
        var noticeboardId = req.params.id;
        noticeboard_1.Noticeboard.findByIdAndUpdate(noticeboardId, req.body, function (error, Noticeboard) {
            if (error) {
                res.send(error);
            }
            var message = Noticeboard
                ? 'Updated successfully'
                : 'Noticeboard not found :(';
            res.send(message);
        });
    };
    NoticeboardDAO.prototype.deleteNoticeboard = function (req, res, next) {
        var noticeboardID = req.params.id;
        noticeboard_1.Noticeboard.findByIdAndDelete(noticeboardID, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'Noticeboards not found :(';
            res.send(message);
        });
    };
    return NoticeboardDAO;
}());
exports.NoticeboardDAO = NoticeboardDAO;
//# sourceMappingURL=noticeboard.dao.js.map