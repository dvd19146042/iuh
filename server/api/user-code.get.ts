import { Temp } from "../models/temp.model";
import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code;
  try {
    const user = await User.findOne({ code: code });
    const temp = await Temp.findOne({ code: code });
    if (user && temp) {
      // Check if the IDs match
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
