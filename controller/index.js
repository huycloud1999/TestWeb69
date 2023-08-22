import { resClientData } from "../utils/index.js";
import Inventory from "../Models/Inventory.js";
import Order from "../Models/Order.js";
import User from "../Models/Users.js";
import { generateJwt } from "../utils/index.js";
import { log } from "console";
//bài1
export const getAllProducts = async (req, res) => {
  try {
    const products = await Inventory.find();
    resClientData(res, 200, products, "Lấy dữ liệu thành công");
  } catch (error) {
    resClientData(res, 500, [], "Lấy dữ liệu thấy bại");
  }
};
//bài 2
export const getProductLow = async (req, res) => {
  try {
    const lowQuantityProducts = await Inventory.find({ instock: { $lt: 100 } });
    resClientData(res, 200, lowQuantityProducts, "Lấy dữ liệu thành công");
  } catch (error) {
    resClientData(res, 500, [], "Lấy dữ liệu thấy bại");
  }
};
//bài3
export const SignIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
      return resClientData(res, 400, null, "Sai pass hoặc mật khẩu");
    }
    console.log(user)
    const token = generateJwt({
      _id: user._id,
      username:user.username,
    });
    console.log(token)
    resClientData(res, 200, { token }, "Login successfully");
  } catch (error) {
    resClientData(res, 500, [], "Lấy dữ liệu thấy bại");
  }
};
//bài4
export const getProductDescriptions = async (req, res) => {
    try {
        const ordersWithProducts = await Order.find().populate('item', 'description');
      resClientData(res, 200, ordersWithProducts, "Lấy dữ liệu thành công");
    } catch (error) {
      resClientData(res, 500, [], "Lấy dữ liệu thấy bại");
    }
  };