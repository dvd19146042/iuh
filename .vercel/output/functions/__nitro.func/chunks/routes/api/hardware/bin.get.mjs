import { d as defineEventHandler, g as getQuery } from '../../../runtime.mjs';
import { H as Hardware } from '../../../_/hardware.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const bin_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id;
  try {
    const bin = await Hardware.findOne({ id });
    return bin;
  } catch (error) {
    return error;
  }
});

export { bin_get as default };
//# sourceMappingURL=bin.get.mjs.map
