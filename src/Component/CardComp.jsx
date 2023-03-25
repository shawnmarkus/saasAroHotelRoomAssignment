import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

function CardComp({ data }) {
  /*
   *the data must contain the feilds like roomId, hotelType, imagePath, price
   */
  const addToCart = () => {
    console.log("the data that will be sent", data);
    axios
      .post("/addtocart", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Card className="card">
      <Card.Img variant="top" src={data.imagePath} className="cardHover" />

      <Card.Body>
        <Card.Body>
          <Card.Title>
            <b style={{ fontSize: "1.5rem" }}>Room</b>
          </Card.Title>
          <Card.Text>{data.des}</Card.Text>
          <Button variant="primary" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
