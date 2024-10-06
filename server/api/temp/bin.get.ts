import { Temp } from "~/server/models/temp.model";

export default defineEventHandler(async (event) => {
  try {
    const bin = await Temp.find();
    return bin[0]
  } catch (error) {
    return error;
  }
});
