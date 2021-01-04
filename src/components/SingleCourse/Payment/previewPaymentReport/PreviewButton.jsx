import Icons from "components/common/Icons";
import PaymentReports from "fetchers/paymentReports";
import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
// import ModalDialog from "./ModalDialog";

export default function PreviewButton({ course, author, currentReport }) {
  const [openModal, setOpenModal] = useState(false);

  const toggle = () => setOpenModal(!openModal);

  const handleDeleteReport = (e) => {
    e.preventDefault();
    new PaymentReports().deleteReport(currentReport);
  };

  return (
    <>
      <p className="mb-0 mt-4">Reporte enviado:</p>

      <Card>
        <CardBody className="p-2">
          <p className="m-0 p-0">ID: {currentReport._id}</p>
          <Button className="btn btn-success " onClick={toggle}>
            <Icons icon="eye" />
          </Button>
          <Button
            className="btn btn-danger heading"
            onClick={handleDeleteReport}
          >
            <Icons icon="trash" />
          </Button>
        </CardBody>
      </Card>
      <div className="mt-4"></div>
      {/* <ModalDialog
        isOpen={!openModal}
        toggle={toggle}
        course={course}
        author={author}
      /> */}
    </>
  );
}
