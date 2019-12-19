import mongoose from "mongoose";

const ExaminationSchema = new mongoose.Schema({
    examinationType: String,
    title:String,
    description:String,
    url:String,
    attachment:String
}, { versionKey: false , timestamps: true});

//Creating our model
export const Examination = mongoose.model("Examination", ExaminationSchema,'examination');
