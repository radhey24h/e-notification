"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_controller_1 = require("../controllers/state.controller");
var StateRoutes = /** @class */ (function () {
    function StateRoutes() {
        this.stateController = new state_controller_1.StateController();
    }
    StateRoutes.prototype.routes = function (app) {
        app.route('/api/getState/:id').get(this.stateController.getState);
        app.route('/api/getAllState').get(this.stateController.getAllState);
        app.route('/api/updateState').put(this.stateController.updateState);
        app.route('/api/addState').post(this.stateController.addState);
        app.route('/api/deleteState').post(this.stateController.deleteState);
    };
    return StateRoutes;
}());
exports.StateRoutes = StateRoutes;
//# sourceMappingURL=state.routes.js.map