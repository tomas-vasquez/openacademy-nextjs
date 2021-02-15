import Icons from "components/common/Icons";
import React, { useState } from "react";
import { Button } from "reactstrap";
import ModalDialog from "./ModalDialog";

export default function PaymentButton({ course, author }) {
  const [openModal, setOpenModal] = useState(false);

  const toggle = () => setOpenModal(!openModal);

  return (
    <>
      <div className="mt-4">
        <Button
          className="btn btn-primary w-100 heading"
          style={{
            fontSize: 25,
          }}
          onClick={toggle}
        >
          Comprar ahora!
          <Icons icon="arrowRight" className="ml-2 arrow1" />
        </Button>
      </div>
      <ModalDialog
        isOpen={openModal}
        toggle={toggle}
        course={course}
        author={author}
      />
    </>
  );
}
