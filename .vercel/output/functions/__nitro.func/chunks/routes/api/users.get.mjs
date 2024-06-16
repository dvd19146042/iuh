import { d as defineEventHandler } from '../../runtime.mjs';
import { U as User } from '../../_/user.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const users_get = defineEventHandler(async (event) => {
  return await User.find();
});

export { users_get as default };
//# sourceMappingURL=users.get.mjs.map
