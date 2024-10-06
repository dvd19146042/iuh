import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id;
  try {
    const user = await User.findOne({ _id:id });
    return user
  } catch (error) {
    return error;
  }
});
