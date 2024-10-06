import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
      return await User.find()
});
