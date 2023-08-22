import { Router } from "express";
import { authenticateToken } from "../middlewares/index.js";

import { SignIn, getAllProducts, getProductDescriptions, getProductLow } from "../controller/index.js";
const CombineRouter =Router();
CombineRouter.get('/products',authenticateToken,getAllProducts)
CombineRouter.get('/products/low-quantity',getProductLow)
CombineRouter.get('/products/orders-with-products',getProductDescriptions)
CombineRouter.post('/signin',SignIn)
export default CombineRouter