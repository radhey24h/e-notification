"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ExaminationSchema = new mongoose_1.default.Schema({
    examinationType: String,
    title: String,
    description: String,
    url: String,
    attachment: String
}, { versionKey: false, timestamps: true });
//Creating our model
exports.Examination = mongoose_1.default.model("Examination", ExaminationSchema, 'examination');
//# sourceMappingURL=examination.js.map