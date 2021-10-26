import jwt from "jsonwebtoken";
//generateToken to get user data and retunr a token
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_KEY || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};
