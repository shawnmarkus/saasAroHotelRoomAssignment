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

app.post("/addtocart", (req, res) => {
  if (req.body !== null) {
    cartModel
      .create(req.body)
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
      status: "Content is not send",
    });
  }
});
app.post("/booking", (req, res) => {});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(`failed to listen because ${error}`);
  } else {
    console.log(`listening at ${process.env.PORT}`);
  }
});
