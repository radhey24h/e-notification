"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updates_controller_1 = require("../controllers/updates.controller");
var AnnouncementRoutes = /** @class */ (function () {
    function AnnouncementRoutes() {
        this.updatesController = new updates_controller_1.UpdatesController();
    }
    AnnouncementRoutes.prototype.routes = function (app) {
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
    };
    return AnnouncementRoutes;
}());
exports.AnnouncementRoutes = AnnouncementRoutes;
//# sourceMappingURL=announcement.routes.js.map