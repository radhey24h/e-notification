import mongoose from "mongoose";

const StateSchema = new mongoose.Schema({
    stateName:String,
    zipCode:Number
}, { versionKey: false , timestamps: true});

//Creating our model
export const State = mongoose.model("State", StateSchema, 'state');
