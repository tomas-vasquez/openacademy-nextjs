import Icons from "components/common/Icons";
import SingleCourse from "components/allCourses/SingleCourse";
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
  FormGroup,
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
          onClick={() => {
            document.getElementById(`pic${index}`).click();
          }}
          style={{
            padding: 0,
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
        <ModalHeader toggle={toggle}>
          <Icons icon="car" className="mr-2" />
          Comprar curso
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7">
                <FormGroup>
                  <label className="h6">Imagen de comprovacion:</label>
                  <Row>
                    <Col xs="4" className="m-0">
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

                  <label className="h6 mt-4">Description del pago:</label>
                  <Input
                    className="form-control"
                    name={"name"}
                    id="description"
                    type="textarea"
                    style={{ height: 70, overflow: "hidden" }}
                  />
                </FormGroup>
              </div>

              <div className="col-md-5 d-none d-lg-block border-left">
                <SingleCourse preview course={course} author={author} />
              </div>
            </div>
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
