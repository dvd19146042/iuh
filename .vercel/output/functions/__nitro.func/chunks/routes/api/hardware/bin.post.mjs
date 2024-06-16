import { d as defineEventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
import { H as Hardware } from '../../../_/hardware.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const bin_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = {
    id: body.id,
    code: body.code
  };
  try {
    await Hardware.insertMany(data);
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user"
    });
  }
  return data;
});

export { bin_post as default };
//# sourceMappingURL=bin.post.mjs.map
