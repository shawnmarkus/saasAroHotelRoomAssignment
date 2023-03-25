const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { cartModel, bookingModel } = require("./model");

dotenv.config({ path: "./config.env" });

try {
  require("./connection");
} catch (error) {
  console.log("error hai bro", error);
}
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["PUT", "GET", "POST", "PATCH", "DELETE"],
  })
);

// just a get request
app.get("/", (req, res) => {
  res.send("you are welcome to hotel room booking api");
});

app.get("/getCartItem", (req, res) => {
  try {
    cartModel
      .find({})
      .then((datalist) => {
        res.status(200).json({
          status: "SUCCESS",
          datalist,
        });
      })
      .catch((e) => {
        console.log("erro to retrive data", e);
        res.status(500).json({
          status: "UNABLE_TO_FETCH_DATA",
        });
      });
  } catch (err) {
    console.log("error to get the cartList");
    res.status(500).json({
      status: "UNABLE_TO_FETCH_DATA",
    });
  }
});

// add to cart
app.post("/addtocart", (req, res) => {
  const { roomId, hotelType, imagePath, price } = req.body;
  if (roomId && hotelType && imagePath && price) {
    cartModel
      .findOneAndUpdate(
        {},
        {
          $push: { cart: { roomId, hotelType, imagePath, price } },
        },
        {
          upsert: true,
          new: true,
        }
      )
      .then((data) => {
        console.log("data is created in db successfully", data);
        res.status(200).json({
          status: "SUCCESS",
          data,
        });
      })
      .catch((e) => {
        console.log("error at creating entry in db :", e);
        res.status(501).json({
          status: "FAILED",
        });
      });
  } else {
    res.status(400).json({
      status: "NEED_DATA",
    });
  }
});

// added booking
/*
    1.the req.body will contain the object id of the entry in the cart and that will be used to removed from cart collection.
    2.the user detail will be added with the room id 
*/
app.post("/booking", async (req, res) => {
  const { roomId, email, name, phoneNo, address } = req.body;

  //   var deletedData;
  if (roomId && email && name && phoneNo && address) {
    console.log("room id that is provided", roomId);
    let deletedData = await cartModel
      .findOneAndUpdate(
        {},
        { $pull: { cart: { roomId: roomId } } },
        {
          new: true,
        }
      )
      .catch((e) => {
        console.log("the error occured at deletion of item from cart: ", e);
        res.status(500).json({
          status: "FAILED",
        });
      });

    if (deletedData) {
      console.log(`data has been removed from db  ${deletedData}`);

      bookingModel
        .create({ roomId, userDetail: { email, name, phoneNo, address } })
        .then((data) => {
          console.log(
            `booking has been registered against corresponding detail \n{ ${data} } \n`
          );

          res.status(200).json({
            roomId,
            email,
            phoneNo,
            address,
            name,
            deletedData,
            status: "SUCCESS",
          });
        })
        .catch((e) => {
          console.log("the error occured at booking", e);
          res.status(500).json({
            status: "FAILED",
          });
        });
    } else {
      res.status(400).json({
        status: "NO_SUCH_ENTRY",
      });
    }
  } else {
    res.status(400).json({
      status: "NEED_DATA",
    });
  }
});

// port to listen
app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(`failed to listen because ${error}`);
  } else {
    console.log(`listening at ${process.env.PORT}`);
  }
});
