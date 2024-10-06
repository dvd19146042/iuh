import { Hardware } from "~/server/models/hardware.model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id;
  try {
    const bin = await Hardware.findOne({ id:id });
    return bin
  } catch (error) {
    return error;
  }
});
