"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noticeboard_controller_1 = require("../controllers/noticeboard.controller");
var NoticeboardRoutes = /** @class */ (function () {
    function NoticeboardRoutes() {
        this.NoticeboardController = new noticeboard_controller_1.NoticeboardController();
    }
    NoticeboardRoutes.prototype.routes = function (app) {
        app.route('/api/getNoticeboard/:id').get(this.NoticeboardController.getNoticeboard);
        app.route('/api/getAllNoticeboard').get(this.NoticeboardController.getAllNoticeboard);
        app.route('/api/addNoticeboard').post(this.NoticeboardController.addNoticeboard);
        app.route('/api/updateNoticeboard/:id').put(this.NoticeboardController.updateNoticeboard);
        app.route('/api/deleteNoticeboard/:id').delete(this.NoticeboardController.deleteNoticeboard);
    };
    return NoticeboardRoutes;
}());
exports.NoticeboardRoutes = NoticeboardRoutes;
//# sourceMappingURL=noticeboard.routes.js.map