"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var UserDAO = /** @class */ (function () {
    function UserDAO() {
    }
    UserDAO.prototype.getAllUser = function (req, res, next) {
        user_1.User.find({}, function (error, users) {
            if (error) {
                res.send(error);
            }
            res.json(users);
        });
    };
    UserDAO.prototype.getUser = function (req, res, next) {
        var user = user_1.User.findById(req.params.id, function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(user);
            }
        });
    };
    UserDAO.prototype.addUser = function (req, res, next) {
        var user = new user_1.User(req.body);
        user.save(function (error, pokemon) {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    };
    UserDAO.prototype.updateUser = function (req, res, next) {
        var userId = req.params.id;
        user_1.User.findByIdAndUpdate(userId, req.body, function (error, User) {
            if (error) {
                res.send(error);
            }
            var message = User
                ? 'Updated successfully'
                : 'User not found :(';
            res.send(message);
        });
    };
    UserDAO.prototype.deleteUser = function (req, res, next) {
        var userID = req.params.id;
        user_1.User.findByIdAndDelete(userID, function (error, deleted) {
            if (error) {
                res.send(error);
            }
            var message = deleted ? 'Deleted successfully' : 'Users not found :(';
            res.send(message);
        });
    };
    return UserDAO;
}());
exports.UserDAO = UserDAO;
//# sourceMappingURL=user.dao.js.map