import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorisation.split(" ")[1];

    let decodedData;
    decodedData = jwt.verify(token, secret);
    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
