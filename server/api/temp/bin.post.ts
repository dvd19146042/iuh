import { Temp } from "~/server/models/temp.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = {
    code: body.code,
  };
  try {
    const recored =await Temp.find();
    if (!recored.length) {
      return await Temp.insertMany(data);
    
    }
    return await Temp.updateOne({_id:recored[0]._id},data);
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user",
    });
  }
});
