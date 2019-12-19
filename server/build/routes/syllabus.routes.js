"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var syllabus_controller_1 = require("../controllers/syllabus.controller");
var SyllabusRoutes = /** @class */ (function () {
    function SyllabusRoutes() {
        this.syllabusController = new syllabus_controller_1.SyllabusController();
    }
    SyllabusRoutes.prototype.routes = function (app) {
        app.route('/api/getSyllabus/:id').get(this.syllabusController.getSyllabus);
        app.route('/api/getAllSyllabus').get(this.syllabusController.getAllSyllabus);
        app.route('/api/updateSyllabus').put(this.syllabusController.updateSyllabus);
        app.route('/api/addSyllabus').post(this.syllabusController.addSyllabus);
        app.route('/api/deleteSyllabus').post(this.syllabusController.deleteSyllabus);
    };
    return SyllabusRoutes;
}());
exports.SyllabusRoutes = SyllabusRoutes;
//# sourceMappingURL=syllabus.routes.js.map