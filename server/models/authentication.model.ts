import { Schema, model } from "mongoose";

const AuthSchema = new Schema({
  email: String,
  password: String,

});

export const Auth = model("Auth", AuthSchema);
