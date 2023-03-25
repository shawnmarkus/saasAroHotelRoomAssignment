import React from "react";
import dataSet from "../Data/data.json";
import CardComp from "./CardComp";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const Standard = () => {
  return (
    <div>
      <Container>
        <Row xs={1} md={2} xl={3} className="g-4">
          {dataSet.map((data, idx) => {
            if (data.hotelType === "standard") {
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

export default Standard;
