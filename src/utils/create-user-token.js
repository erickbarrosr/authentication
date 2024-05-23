import jwt from "jsonwebtoken";

async function createUserToken(user) {
  if (!user || !user._id || !user.name) {
    throw new Error("Invalid user object provided");
  }

  const secret = process.env.SECRET;
  if (!secret) {
    throw new Error("Secret key is not provided");
  }

  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    secret,
    {
      expiresIn: "1d",
      algorithm: "HS256",
    }
  );

  return token;
}

export default createUserToken;
