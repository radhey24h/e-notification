"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UniversitySchema = new mongoose_1.default.Schema({
    stateName: String,
    universityName: String,
    url: String
}, { versionKey: false, timestamps: true });
//Creating our model
exports.University = mongoose_1.default.model("University", UniversitySchema, 'university');
//# sourceMappingURL=university.js.map