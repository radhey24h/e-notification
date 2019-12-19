"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var state_dao_1 = require("../data-access-object/state.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var StateController = /** @class */ (function () {
    function StateController() {
    }
    StateController.prototype.getAllState = function (req, res, next) {
        logger_1.default.info('getStates :: States');
        var statesDAO = new state_dao_1.StateDAO();
        statesDAO.getAllState(req, res, next);
    };
    StateController.prototype.getState = function (req, res, next) {
        logger_1.default.info('getState :: States');
        var statesDAO = new state_dao_1.StateDAO();
        statesDAO.getState(req, res, next);
    };
    StateController.prototype.addState = function (req, res, next) {
        logger_1.default.info('addStates :: States');
        var statesDAO = new state_dao_1.StateDAO();
        statesDAO.addState(req, res, next);
    };
    StateController.prototype.updateState = function (req, res, next) {
        logger_1.default.info('updateStates :: States');
        var statesDAO = new state_dao_1.StateDAO();
        statesDAO.updateState(req, res, next);
    };
    StateController.prototype.deleteState = function (req, res, next) {
        logger_1.default.info('deleteStates :: States');
        var statesDAO = new state_dao_1.StateDAO();
        statesDAO.deleteState(req, res, next);
    };
    return StateController;
}());
exports.StateController = StateController;
//# sourceMappingURL=state.controller.js.map