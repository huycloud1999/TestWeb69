const SECRET_CODE="SieuBuong"
import jwt from "jsonwebtoken";
const resClientData = (res, statusCode, data, message) => {
    res.status(statusCode).send({
      data: data ? data : null,
      message: message ? message : data ? "Complete" : "Failed",
      success: data ? true : false,
    });
  };
  const generateJwt = (data) => {
    const token = jwt.sign(data, SECRET_CODE, {
      expiresIn: "1d",
    });
    return token;
  };
  
  const decodeToken = (token) => {
    const verifyToken = jwt.verify(token, SECRET_CODE);
    return verifyToken;
  };
  export {resClientData,generateJwt,decodeToken}