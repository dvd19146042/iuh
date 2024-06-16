import { d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { A as Auth } from '../../_/authentication.model.mjs';
import { U as User } from '../../_/user.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const user_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const date = new Date(Date.now());
  const data = {
    name: body.name,
    gender: body.gender,
    email: body.email,
    mobile: body.mobile,
    code: body.code,
    date,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };
  const auth = {
    email: body.email,
    password: body.password
  };
  try {
    const user = await User.findOne({ code: data.code });
    if (user) {
      throw createError({
        statusCode: 400,
        statusMessage: "Not create user"
      });
    }
    await User.insertMany(data);
    await Auth.insertMany(auth);
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user"
    });
  }
  return data;
});

export { user_post as default };
//# sourceMappingURL=user.post.mjs.map
