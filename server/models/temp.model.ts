import { Schema, model } from "mongoose";

const TempSchema = new Schema({
  code: String,
});

export const Temp = model("Temp", TempSchema);
