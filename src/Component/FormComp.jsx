import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";

function FormToCollectData(props) {
  const [userDetail, setUserDetail] = useState({
    email: "",
    name: "",
    phoneNo: "",
    address: "",
  });
  const roomId = props.roomId;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userDetail);
    axios
      .post("/booking", {
        email: userDetail.email,
        phoneNo: userDetail.phoneNo,
        name: userDetail.name,
        address: userDetail.address,
        roomId,
      })
      .then((response) => {
        console.log("response :", response);

        setUserDetail({
          name: "",
          email: "",
          phoneNo: "",
          address: "",
        });
        window.location.reload();
        props.closeModel();
      })
      .catch((e) => {
        console.log("error occurred : ", e);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* {props.roomId} */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={userDetail.name}
          onChange={(e) => {
            setUserDetail({ ...userDetail, name: e.target.value });
          }}
          name="name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={userDetail.email}
          onChange={(e) => {
            setUserDetail({ ...userDetail, email: e.target.value });
          }}
          name="email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobileNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="mobile number"
          value={userDetail.phoneNo}
          onChange={(e) => {
            setUserDetail({ ...userDetail, phoneNo: e.target.value });
          }}
          name="phoneNo"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="address"
          value={userDetail.address}
          onChange={(e) => {
            setUserDetail({ ...userDetail, address: e.target.value });
          }}
          name="address"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormToCollectData;
