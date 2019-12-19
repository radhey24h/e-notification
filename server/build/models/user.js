"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: Number,
    intrestArea: String,
    password: String,
    userType: String
}, { versionKey: false, timestamps: true });
//Creating our model
exports.User = mongoose_1.default.model("User", UserSchema, 'user');
//# sourceMappingURL=user.js.map