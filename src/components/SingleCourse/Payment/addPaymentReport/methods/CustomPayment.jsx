import Icons from "components/common/Icons";
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Row,
  Col,
  Container,
  CardImg,
} from "reactstrap";

// import PaymentReports from "../../../../../fetchers/paymentReports";

export default function CustomPayment({ course, author, parentToggle }) {
  const [openModal, setOpenModal] = useState(false);
  const [pic0, setPic0] = useState(null);
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const toggle = () => setOpenModal(!openModal);

  const handleClick = () => {
    const pics = [pic0, pic1, pic2];
    const description = document.getElementById("description").value;

    // new PaymentReports().uploadReport(course, pics, description, () => {
    //   console.log("hola perrrrroooo111");
    // });
  };

  const SinglePic = ({ pic, onChange, onDelete, index }) => (
    <>
      {pic === null ? (
        <Button
          outline
          color="light"
          className="py-5"
          onClick={() => {
            document.getElementById(`pic${index}`).click();
          }}
          style={{
            width: "100%",
            height: 142,
          }}
        >
          <Icons icon="plus" /> anadir imagen
        </Button>
      ) : (
        <div className="text-right">
          <CardImg
            style={{
              height: 142,
            }}
            src={URL.createObjectURL(pic)}
          />
          <Button
            style={{
              position: "absolute",
              right: 17,
              bottom: 2, // marginTop: -65,
            }}
            color="danger"
            onClick={() => {
              // document.getElementById(`pic${index}`).value = "none";
              onDelete();
            }}
            className="mb-0"
          >
            <Icons icon="trash" />
          </Button>
        </div>
      )}
      <input
        id={`pic${index}`}
        className="d-none"
        multiple={false}
        type="file"
        accept="image/jpeg"
        onChange={onChange}
      />
    </>
  );

  return (
    <>
      <div>
        <a
          href="#!"
          onClick={() => {
            toggle();
          }}
        >
          <img
            src="/img/tigo.png"
            className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
          />
        </a>
      </div>
      <Modal isOpen={openModal} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>Comprar course</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="h6">Description:</label>
            <Container>
              <Row>
                <Col xs="4">
                  <SinglePic
                    pic={pic0}
                    index={0}
                    onChange={(e) => setPic0(e.target.files[0])}
                    onDelete={(e) => setPic0(null)}
                  />
                </Col>
                <Col xs="4">
                  <SinglePic
                    pic={pic1}
                    index={1}
                    onDelete={(e) => setPic1(null)}
                    onChange={(e) => setPic1(e.target.files[0])}
                  />
                </Col>
                <Col xs="4">
                  <SinglePic
                    pic={pic2}
                    index={2}
                    onDelete={(e) => setPic2(null)}
                    onChange={(e) => setPic2(e.target.files[0])}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="form-group">
            <label className="h6">Description:</label>
            <Input name={"name"} type="textarea" id="description" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClick}>
            Enviar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
