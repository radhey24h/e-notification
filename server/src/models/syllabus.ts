import mongoose from "mongoose";

const SyllabusSchema = new mongoose.Schema({
   category:String,
   title:String,
   url:String
}, { versionKey: false , timestamps: true});

//Creating our model
export const Syllabus = mongoose.model("Syllabus", SyllabusSchema, 'syllabus');
