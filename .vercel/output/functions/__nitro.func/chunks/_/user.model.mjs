import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  gender: String,
  email: String,
  mobile: String,
  code: String,
  time: String,
  date: String
});
const User = model("User", UserSchema);

export { User as U };
//# sourceMappingURL=user.model.mjs.map
