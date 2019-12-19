"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdatesDAO = /** @class */ (function () {
    function UpdatesDAO() {
    }
    UpdatesDAO.prototype.authenticate = function (req, res, next) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
    };
    return UpdatesDAO;
}());
exports.UpdatesDAO = UpdatesDAO;
//# sourceMappingURL=updates.dao.js.map