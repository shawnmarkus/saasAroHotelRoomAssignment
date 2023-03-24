import React from "react";
import dataSet from "../Data/data.json";
import CardComp from "./CardComp";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const Premium = () => {
  return (
    <div className="p-2 m-2">
      <Container>
        <Row xs={1} md={2} className="g-4">
          {dataSet.map((data, idx) => {
            if (data.hotelType === "premium") {
              return (
                <Col key={idx}>
                  <CardComp data={data} />
                </Col>
              );
            }
            return null;
          })}
        </Row>
      </Container>
    </div>
  );
};

// {
/* <CardComp key={idx} data={data} /> */
// }

//        {dataSet.map((data, idx) => {
//   if (data.hotelType === "premium") {
//     return (

//     );
//   }
//   return null;
// })}
export default Premium;
