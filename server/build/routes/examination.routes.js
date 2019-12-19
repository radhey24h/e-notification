"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var examination_controller_1 = require("../controllers/examination.controller");
var ExaminationRoutes = /** @class */ (function () {
    function ExaminationRoutes() {
        this.examinationController = new examination_controller_1.ExaminationController();
    }
    ExaminationRoutes.prototype.routes = function (app) {
        app.route('/api/getExamination/:id').get(this.examinationController.getExamination);
        app.route('/api/getAllExamination').get(this.examinationController.getAllExamination);
        app.route('/api/updateExamination').put(this.examinationController.updateExamination);
        app.route('/api/addExamination').post(this.examinationController.addExamination);
        app.route('/api/deleteExamination').post(this.examinationController.deleteExamination);
    };
    return ExaminationRoutes;
}());
exports.ExaminationRoutes = ExaminationRoutes;
//# sourceMappingURL=examination.routes.js.map