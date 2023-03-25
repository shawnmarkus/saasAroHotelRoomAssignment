const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    cart: {
      type: [Object],
    },
  },
  { collection: "cart" }
);

const bookingSchema = mongoose.Schema(
  {
    userDetail: {
      type: Object,
      required: "true",
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      required: "true",
    },
  },
  { collection: "Booking" }
);

const cartModel = mongoose.model("cart", cartSchema);
const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = { cartModel, bookingModel };
