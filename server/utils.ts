import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createToken = async (user: any) => {
  // const config = useRuntimeConfig();
  return await jwt.sign(
    {
      email: user.email,
    },
    "TOKEN_"
  );
};

export const verifyPassword = async (password: string, hash: string) => {
  const compare = await bcrypt.compare(password, hash);
  if (!compare) {
    throw new Error("Password does not match");
  }
  return compare;
};
