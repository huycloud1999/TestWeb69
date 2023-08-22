import { Router } from "express";
import { authenticateToken } from "../middlewares/index.js";

import { SignIn, getAllProducts, getProductDescriptions, getProductLow } from "../controller/index.js";
const CombineRouter =Router();
CombineRouter.get('/products',authenticateToken,getAllProducts)
CombineRouter.get('/products/low-quantity',authenticateToken,getProductLow)
CombineRouter.get('/products/orders-with-products',authenticateToken,getProductDescriptions)
CombineRouter.post('/signin',SignIn)
export default CombineRouter