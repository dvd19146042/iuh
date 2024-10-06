import { Schema, model } from "mongoose";

const HardwareSchema = new Schema({
  code: String,
  id: String,
});

export const Hardware = model("Hardware", HardwareSchema);
