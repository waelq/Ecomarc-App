import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    //   check Admin
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String },
      country: { type: String },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: { type: String },
      email_address: { type: String },
      status: { type: String },
      update_time: { type: String },
    },
    taxPrice: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDeliverd: { type: Boolean, required: true, default: false },
    deliverdAt: { type: Date },
  },
  //   update manual
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
