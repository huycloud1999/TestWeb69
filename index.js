import express from "express";
import mongoose from "mongoose";
import Inventory from "./Models/Inventory.js";
import Order from "./Models/Order.js";
import User from "./Models/Users.js";
import { order,inventory,users } from "./data.js";
import CombineRouter from "./routers/index.js";
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://huycloud1999:e4bJw61geCHvbXed@testweb69.3negyyr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {

//    Inventory.insertMany(inventory)
        // Order.insertMany(order)
        // User.insertMany(users)
    app.listen(8888, () => console.log("Server Port 8888"));
  })
  .catch((error) => console.log("lỗi"));
  app.use('/api/v1',CombineRouter)