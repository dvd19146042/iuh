import jwt from 'jsonwebtoken';

const createToken = async (user) => {
  return await jwt.sign(
    {
      email: user.email
    },
    "TOKEN_"
  );
};

export { createToken as c };
//# sourceMappingURL=utils.mjs.map
