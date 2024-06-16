import { Auth } from "../models/authentication.model";
import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const date = new Date(Date.now())
  const data = {
    name: body.name,
    gender: body.gender,
    email: body.email,
    mobile: body.mobile,
    code: body.code,
    date: date,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };
  const auth = {
    email: body.email,
    password: body.password,
  }
  try {
    const user =await User.findOne({code:data.code})
    if(user){
      throw createError({
        statusCode: 400,
        statusMessage: "Not create user",
      });
    }
    await User.insertMany(data);
    await Auth.insertMany(auth);

  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user",
    });
  }
  return data; // ... Do whatever you want here
});
