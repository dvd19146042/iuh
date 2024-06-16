import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import { T as Temp } from '../../_/temp.model.mjs';
import { U as User } from '../../_/user.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';

const userCode_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code;
  try {
    const user = await User.findOne({ code });
    const temp = await Temp.findOne({ code });
    if (user && temp) {
      if (user._id.toString() === temp._id.toString()) {
        return 1;
      } else {
        return 0;
      }
    }
    return null;
  } catch (error) {
    return error;
  }
});

export { userCode_get as default };
//# sourceMappingURL=user-code.get.mjs.map
