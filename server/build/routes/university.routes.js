"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var university_controller_1 = require("../controllers/university.controller");
var UniversityRoutes = /** @class */ (function () {
    function UniversityRoutes() {
        this.universityController = new university_controller_1.UniversityController();
    }
    UniversityRoutes.prototype.routes = function (app) {
        app.route('/api/getUniversity/:id').get(this.universityController.getUniversity);
        app.route('/api/getAllUniversity').get(this.universityController.getAllUniversity);
        app.route('/api/updateUniversity').put(this.universityController.updateUniversity);
        app.route('/api/addUniversity').post(this.universityController.addUniversity);
        app.route('/api/deleteUniversity').post(this.universityController.deleteUniversity);
    };
    return UniversityRoutes;
}());
exports.UniversityRoutes = UniversityRoutes;
//# sourceMappingURL=university.routes.js.map