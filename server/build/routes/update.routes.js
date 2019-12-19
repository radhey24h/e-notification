"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updates_controller_1 = require("../controllers/updates.controller");
var UpdatesRoutes = /** @class */ (function () {
    function UpdatesRoutes() {
        this.updatesController = new updates_controller_1.UpdatesController();
    }
    UpdatesRoutes.prototype.routes = function (app) {
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
        app.route('/api/authenticate').post(this.updatesController.authenticate);
    };
    return UpdatesRoutes;
}());
exports.UpdatesRoutes = UpdatesRoutes;
//# sourceMappingURL=update.routes.js.map