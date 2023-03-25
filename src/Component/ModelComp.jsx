import Modal from "react-bootstrap/Modal";
import React from "react";
import FormComp from "./FormComp";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Booking
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComp
          roomId={props.item.roomId}
          closeModel={() => props.onHide()}
        />
      </Modal.Body>
    </Modal>
  );
}

function ModelComp({ show, setShow, item }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={show}
        item={item}
        onHide={() => setShow(false)}
      />
    </>
  );
}

export default ModelComp;
