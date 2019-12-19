"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var updates_dao_1 = require("../data-access-object/updates.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var UpdatesController = /** @class */ (function () {
    function UpdatesController() {
    }
    UpdatesController.prototype.authenticate = function (req, res, next) {
        logger_1.default.info('authenticate :: user');
        var updatesDAO = new updates_dao_1.UpdatesDAO();
        updatesDAO.authenticate(req, res, next);
    };
    return UpdatesController;
}());
exports.UpdatesController = UpdatesController;
//# sourceMappingURL=updates.controller.js.map