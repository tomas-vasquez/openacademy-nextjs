import Icons from "components/common/Icons";
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import CustomPayment from "./methods/CustomPayment";

export default function ModalDialog({ isOpen, toggle, course, author }) {
  const pic_url = author.user_pic ? author.user_pic : "/img/noPic.jpg";

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-lg">
      <ModalHeader toggle={toggle}>
        <Icons icon="car" className="mr-2" />
        Comprar Curso
      </ModalHeader>
      <ModalBody>
        <div className="col-12 text-center">
          <div className="section-title">
            <h4 className="h5 title mb-0">Metodos de pago disponibles:</h4>
          </div>
          <CustomPayment
            course={course}
            author={author}
            parentToggle={toggle}
          />
          <div className="text-left mt-4">
            <p>
              <strong>
                <Icons icon="alert" className="mr-1" />
                Importante:
              </strong>{" "}
              El pago debe realizarce a la siguiente persona:
            </p>
          </div>
          <div className="teacher d-flex align-items-center px-2">
            <img
              alt={author.name}
              className="avatar avatar-md-sm rounded-circle shadow"
              src={pic_url}
            />
            <div className="ml-2">
              <h6 className="mb-0 text-shadow text-left">
                {author.name ? author.name : `@${author.user_name}`}
              </h6>
              <p className="small my-0 text-muted">
                {author.short_description || ""}
              </p>
            </div>
          </div>
        </div>
      </ModalBody>
      {/* <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter> */}
    </Modal>
  );
}
