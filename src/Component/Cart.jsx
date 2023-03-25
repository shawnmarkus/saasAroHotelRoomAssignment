import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Style from "../css/Cart.module.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModelComp from "./ModelComp";

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  const [show, setShow] = useState(false);
  const [itemTosend, setItemToSend] = useState({});
  useEffect(() => {
    axios
      .get("/getCartItem")
      .then((responce) => {
        console.log("received data : ", responce.data.datalist[0].cart);
        setCartItemList(responce.data.datalist[0].cart);
      })
      .catch((e) => {
        console.log("error occurred : ", e);
      });
  }, []);

  const bookTheRoom = (item) => {
    console.log(item);
    setShow(true);
    setItemToSend(item);
  };

  return (
    <div className={Style.topWrapContainer}>
      <Container className={Style.CartContainer}>
        <h1 className="p-4 ">
          <b className="px-4">Cart</b>
        </h1>
        <hr />
        {/* <div>{JSON.stringify(cartItemList.current)}</div> */}
        <div>
          {cartItemList.len !== 0 ? (
            <div className="pb-4">
              {cartItemList.map((item, idx) => {
                return (
                  //   <>
                  <Card
                    key={idx}
                    className="m-4 d-flex flex-row align-items-center"
                  >
                    <Card.Img src={item.imagePath} className="w-25" />
                    <Card.Body>
                      <Card.Title>{item.roomId}</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          bookTheRoom(item);
                        }}
                      >
                        Book The room
                      </Button>

                      {show ? (
                        <ModelComp
                          show={show}
                          item={itemTosend}
                          setShow={(state) => setShow(state)}
                        />
                      ) : null}
                    </Card.Body>
                  </Card>
                  //   </>
                );
              })}
            </div>
          ) : (
            <div>
              <h3> cart is empty</h3>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
