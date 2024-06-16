import { d as defineEventHandler } from '../../../runtime.mjs';
import { T as Temp } from '../../../_/temp.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const bin_get = defineEventHandler(async (event) => {
  try {
    const bin = await Temp.find();
    return bin[0];
  } catch (error) {
    return error;
  }
});

export { bin_get as default };
//# sourceMappingURL=bin.get.mjs.map
