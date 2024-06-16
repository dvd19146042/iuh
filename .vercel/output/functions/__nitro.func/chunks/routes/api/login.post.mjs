import { d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { A as Auth } from '../../_/authentication.model.mjs';
import { c as createToken } from '../../_/utils.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'jsonwebtoken';

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = {
      email: body.email,
      password: body.password
    };
    const user = await Auth.find(data);
    if (user)
      return { token: await createToken({ email: user[0].email }) };
    throw createError({
      statusCode: 401,
      statusMessage: "UnAuthorize"
    });
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: "UnAuthorize"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
