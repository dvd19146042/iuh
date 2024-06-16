import { Hardware } from "~/server/models/hardware.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = {
    id: body.id,
    code: body.code,
  };

  try {
    await Hardware.insertMany(data);

  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Not create user",
    });
  }
  return data; // ... Do whatever you want here
});
