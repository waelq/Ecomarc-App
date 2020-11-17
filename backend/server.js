import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is runing");
});
app.use("/api/products", productRoutes);
// middle ware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  // console.log(req.originalUrl);
  // next();
});
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold
  )
);
