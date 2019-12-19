"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("../models/state");
var StateDAO = /** @class */ (function () {
    function StateDAO() {
    }
    StateDAO.prototype.getAllState = function (req, res, next) {
        state_1.State.find({}, function (error, States) {
            if (error) {
                res.send(error);
            }
            res.json(States);
        });
    };
    StateDAO.prototype.getState = function (req, res, next) {
        var state = state_1.State.findById(req.params.id, function (err, State) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(State);
            }
        });
    };
    StateDAO.prototype.addState = function (req, res, next) {
        var state = new state_1.State(req.body);
        state.save(function (error, pokemon) {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    };
    StateDAO.prototype.updateState = function (req, res, next) {
        var stateId = req.params.id;
        state_1.State.findByIdAndUpdate(stateId, req.body, function (error, State) {
            if (error) {
                res.send(error);
            }
            var message = State
                ? 'Updated successfully'
                : 'State not found :(';
            res.send(message);
        });
    };
    StateDAO.prototype.deleteState = function (req, res, next) {
        var stateID = req.params.id;
        state_1.State.findByIdAndDelete(stateID, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'States not found :(';
            res.send(message);
        });
    };
    return StateDAO;
}());
exports.StateDAO = StateDAO;
//# sourceMappingURL=state.dao.js.map