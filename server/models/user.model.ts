import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  gender: String,
  email: String,
  mobile: String,
  code: String,
  time: String,
  date: String,
});

export const User = model("User", UserSchema);
