import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
    resultType:String,
    title:String,
    url:String
}, { versionKey: false , timestamps: true});

//Creating our model
export const Result = mongoose.model("Result", ResultSchema,'results');
