import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CardCourse from "./CardCourse";

export default function Courses({ courses, authors }) {
  return (
    <Container className="my-4">
      <Card>
        <CardBody>
          <h4 className="mb-4">
            Todos los cursos...
            <i className="fa fa-book text-primary mr-1" />
            <i className="fa fa-book text-primary mr-1" />
            <i className="fa fa-book text-primary mr-1" />
          </h4>
          <Row>
            {courses &&
              courses.map((_course, key) => (
                <Col key={key} xs="12" sm="6" md="6" lg="3">
                  <CardCourse
                    course={_course}
                    author={authors.find((author) => {
                      return author._id === _course.course_author_id;
                    })}
                  />
                </Col>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}
