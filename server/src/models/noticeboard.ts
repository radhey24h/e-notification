import mongoose from "mongoose";

const NoticeboardSchema = new mongoose.Schema({
    notificationType:String,
    title:String,
    description:String,
    url:String
}, { versionKey: false , timestamps: true});

//Creating our model
export const Noticeboard = mongoose.model("Noticeboard", NoticeboardSchema, "noticeboard");
