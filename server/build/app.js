"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = require("./routes/index");
var error_handler_1 = __importDefault(require("./utilities/error.handler"));
var mongoose_1 = __importDefault(require("mongoose"));
var app_settings_1 = require("./configuration/app-settings");
var App = /** @class */ (function () {
    function App() {
        this.router = new index_1.RestRouter();
        this.app = express_1.default();
        this.connectToTheDatabase();
        this.crossOriginConfiguration();
        this.initializeMiddlewares();
        this.router.routes(this.app);
        this.initializeErrorHandling();
    }
    App.prototype.crossOriginConfiguration = function () {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
            next();
        });
    };
    App.prototype.initializeMiddlewares = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.initializeErrorHandling = function () {
        this.app.use(error_handler_1.default);
    };
    App.prototype.connectToTheDatabase = function () {
        // mongoose.Promise = global.Promise;
        // //using our constant instead of the hard coded String
        // mongoose.connect(MongosDB.URL, {
        //     useNewUrlParser: true
        // });
        mongoose_1.default.connect(app_settings_1.MongosDB.URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log("Successfully db Connected!");
            }
        });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map