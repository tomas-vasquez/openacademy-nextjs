import Icons from "components/common/Icons";
import React from "react";

// reactstrap components
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

export default class Certificates extends React.Component {
  render() {
    return (
      <>
        <Card className="shadow">
          <CardHeader>
            <CardTitle tag="h5" className="m-0">
              <Icons icon="books" className="mr-2" />
              Certificados
            </CardTitle>
          </CardHeader>
          <CardBody>Sin certificados que mostrar...</CardBody>
        </Card>

        <Card className="mt-4 shadow">
          <CardHeader>
            <CardTitle tag="h5" className="m-0">
              <Icons icon="books" className="mr-2" />
              Cursos
            </CardTitle>
          </CardHeader>
          <CardBody>Sin certificados que mostrar...</CardBody>
        </Card>

        <Card className="mt-4 shadow">
          <CardHeader>
            <CardTitle tag="h5" className="m-0">
              <Icons icon="books" className="mr-2" />
              Conferencias
            </CardTitle>
          </CardHeader>
          <CardBody>Sin certificados que mostrar...</CardBody>
        </Card>
      </>
    );
  }
}
