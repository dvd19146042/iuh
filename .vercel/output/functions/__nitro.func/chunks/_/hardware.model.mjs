import { Schema, model } from 'mongoose';

const HardwareSchema = new Schema({
  code: String,
  id: String
});
const Hardware = model("Hardware", HardwareSchema);

export { Hardware as H };
//# sourceMappingURL=hardware.model.mjs.map
