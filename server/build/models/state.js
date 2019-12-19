"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var StateSchema = new mongoose_1.default.Schema({
    stateName: String,
    zipCode: Number
}, { versionKey: false, timestamps: true });
//Creating our model
exports.State = mongoose_1.default.model("State", StateSchema, 'state');
//# sourceMappingURL=state.js.map