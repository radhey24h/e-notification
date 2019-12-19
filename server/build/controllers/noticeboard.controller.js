"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var noticeboard_dao_1 = require("../data-access-object/noticeboard.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var NoticeboardController = /** @class */ (function () {
    function NoticeboardController() {
    }
    NoticeboardController.prototype.getAllNoticeboard = function (req, res, next) {
        logger_1.default.info('getNoticeboards :: Noticeboards');
        var noticeboardsDAO = new noticeboard_dao_1.NoticeboardDAO();
        noticeboardsDAO.getAllNoticeboard(req, res, next);
    };
    NoticeboardController.prototype.getNoticeboard = function (req, res, next) {
        logger_1.default.info('getNoticeboard :: Noticeboards');
        var noticeboardsDAO = new noticeboard_dao_1.NoticeboardDAO();
        noticeboardsDAO.getNoticeboard(req, res, next);
    };
    NoticeboardController.prototype.addNoticeboard = function (req, res, next) {
        logger_1.default.info('addNoticeboards :: Noticeboards');
        var noticeboardsDAO = new noticeboard_dao_1.NoticeboardDAO();
        noticeboardsDAO.addNoticeboard(req, res, next);
    };
    NoticeboardController.prototype.updateNoticeboard = function (req, res, next) {
        logger_1.default.info('updateNoticeboards :: Noticeboards');
        var noticeboardsDAO = new noticeboard_dao_1.NoticeboardDAO();
        noticeboardsDAO.updateNoticeboard(req, res, next);
    };
    NoticeboardController.prototype.deleteNoticeboard = function (req, res, next) {
        logger_1.default.info('deleteNoticeboards :: Noticeboards');
        var noticeboardsDAO = new noticeboard_dao_1.NoticeboardDAO();
        noticeboardsDAO.deleteNoticeboard(req, res, next);
    };
    return NoticeboardController;
}());
exports.NoticeboardController = NoticeboardController;
//# sourceMappingURL=noticeboard.controller.js.map