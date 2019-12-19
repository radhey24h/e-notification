"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var NoticeboardSchema = new mongoose_1.default.Schema({
    notificationType: String,
    title: String,
    description: String,
    url: String
}, { versionKey: false, timestamps: true });
//Creating our model
exports.Noticeboard = mongoose_1.default.model("Noticeboard", NoticeboardSchema, "noticeboard");
//# sourceMappingURL=noticeboard.js.map