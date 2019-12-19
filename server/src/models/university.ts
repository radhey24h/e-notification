import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
    stateName:String,
    universityName:String,
    url:String
}, { versionKey: false , timestamps: true});

//Creating our model
export const University = mongoose.model("University", UniversitySchema, 'university');
