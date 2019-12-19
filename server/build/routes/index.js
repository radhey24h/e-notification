"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_routes_1 = require("./api.routes");
var user_routes_1 = require("./user.routes");
var noticeboard_routes_1 = require("./noticeboard.routes");
var syllabus_routes_1 = require("./syllabus.routes");
var result_routes_1 = require("./result.routes");
var examination_routes_1 = require("./examination.routes");
var university_routes_1 = require("./university.routes");
var state_routes_1 = require("./state.routes");
var RestRouter = /** @class */ (function () {
    function RestRouter() {
        this.apiRoute = new api_routes_1.ApiRoutes();
        this.userRoute = new user_routes_1.UserRoutes();
        this.noticeboardRoutes = new noticeboard_routes_1.NoticeboardRoutes();
        this.stateRoute = new state_routes_1.StateRoutes();
        this.universityRoute = new university_routes_1.UniversityRoutes();
        this.examinationRoute = new examination_routes_1.ExaminationRoutes();
        this.resultRoute = new result_routes_1.ResultRoutes();
        this.syllabusRoute = new syllabus_routes_1.SyllabusRoutes();
    }
    RestRouter.prototype.routes = function (app) {
        this.apiRoute.routes(app);
        this.userRoute.routes(app);
        this.noticeboardRoutes.routes(app);
        this.stateRoute.routes(app);
        this.universityRoute.routes(app);
        this.examinationRoute.routes(app);
        this.resultRoute.routes(app);
        this.syllabusRoute.routes(app);
    };
    return RestRouter;
}());
exports.RestRouter = RestRouter;
//# sourceMappingURL=index.js.map