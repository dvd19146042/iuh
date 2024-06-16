import { Auth } from "../models/authentication.model";
import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id;
  try {
    const user = await User.findOneAndDelete({ _id:id });
    if (user) {
      // await Auth.deleteOne({ email: user.email });
      return { mesage: user.email + " Deleted" };
    }
  } catch (error) {
    return error;
  }
});
