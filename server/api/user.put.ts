import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const date = new Date(Date.now())

  const data = {
    name: body.name,
    gender: body.gender,
    email: body.email,
    mobile: body.mobile,
    date: date,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };
  try {
   return await User.updateOne({_id:body._id},data);
    
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user",
    });
  }

});
