"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_controller_1 = require("../controllers/result.controller");
var ResultRoutes = /** @class */ (function () {
    function ResultRoutes() {
        this.resultController = new result_controller_1.ResultController();
    }
    ResultRoutes.prototype.routes = function (app) {
        app.route('/api/getResult/:id').get(this.resultController.getResult);
        app.route('/api/getAllResult').get(this.resultController.getAllResult);
        app.route('/api/updateResult').put(this.resultController.updateResult);
        app.route('/api/addResult').post(this.resultController.addResult);
        app.route('/api/deleteResult').post(this.resultController.deleteResult);
    };
    return ResultRoutes;
}());
exports.ResultRoutes = ResultRoutes;
//# sourceMappingURL=result.routes.js.map