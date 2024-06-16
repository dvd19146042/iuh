import { Schema, model } from 'mongoose';

const TempSchema = new Schema({
  code: String
});
const Temp = model("Temp", TempSchema);

export { Temp as T };
//# sourceMappingURL=temp.model.mjs.map
