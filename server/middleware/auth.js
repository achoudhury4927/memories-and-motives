import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    console.log(`This is the secret ${secret}`);
    console.log(req.headers);
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
