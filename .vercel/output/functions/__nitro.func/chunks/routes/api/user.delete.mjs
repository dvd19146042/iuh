import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import { U as User } from '../../_/user.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const user_delete = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    if (user) {
      return { mesage: user.email + " Deleted" };
    }
  } catch (error) {
    return error;
  }
});

export { user_delete as default };
//# sourceMappingURL=user.delete.mjs.map
