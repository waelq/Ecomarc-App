import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import Products from "../models/Products.js";
// @desc Fetch All products
// @route GET /api/products
// @access Public

router.get("/", asyncHandler (async (req, res) => {
  const products = await Products.find();
  res.json(products);
}));
// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.get("/:id",asyncHandler (async(req, res) => {
  const product =await Products.findById(req.params.id);
  if(product){
    res.json(product);
  }else{
      res.status(404).json({msg:"Product not found"})
  }
 
}));
export default router;
