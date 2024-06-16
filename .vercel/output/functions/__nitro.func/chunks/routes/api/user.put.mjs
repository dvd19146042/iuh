import { d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { U as User } from '../../_/user.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const user_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const date = new Date(Date.now());
  const data = {
    name: body.name,
    gender: body.gender,
    email: body.email,
    mobile: body.mobile,
    date,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };
  try {
    return await User.updateOne({ _id: body._id }, data);
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user"
    });
  }
});

export { user_put as default };
//# sourceMappingURL=user.put.mjs.map
