import { Auth } from "../models/authentication.model";
import { User } from "../models/user.model";
import { createToken } from "../utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = {
      email: body.email,
      password: body.password,
    };
    const user = await Auth.insertMany(data);
    if (user) return { token: await createToken({ email: user[0].email }) };
    throw createError({
      statusCode: 400,
      statusMessage: "UnAuthorize",
    });
  } catch (error) {
    return error;
  }
});
