import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import { U as User } from '../../_/user.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const user_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id;
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (error) {
    return error;
  }
});

export { user_get as default };
//# sourceMappingURL=user.get.mjs.map
