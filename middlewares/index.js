import { decodeToken } from "../utils/index.js";
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: "Token missing" });
    }
    const getToken = token.split(" ")[1];
    const verify = decodeToken(getToken);
    if (!verify) throw new Error("Verification failed!");
    next();
};
export {authenticateToken}