import { Schema, model } from 'mongoose';

const AuthSchema = new Schema({
  email: String,
  password: String
});
const Auth = model("Auth", AuthSchema);

export { Auth as A };
//# sourceMappingURL=authentication.model.mjs.map
