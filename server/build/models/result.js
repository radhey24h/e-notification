"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ResultSchema = new mongoose_1.default.Schema({
    resultType: String,
    title: String,
    url: String
}, { versionKey: false, timestamps: true });
//Creating our model
exports.Result = mongoose_1.default.model("Result", ResultSchema, 'results');
//# sourceMappingURL=result.js.map