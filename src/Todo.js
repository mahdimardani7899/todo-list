import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";



const Todo = ({text, setText, addTodo}) => {
    return (
        <div>
            <Form className="mt-4" onSubmit={(e) => e.preventDefault()}>
            <Container>
              <Row>
                <Col
                  md={{ span: "5", offset: "3" }}
                  sm={{ span: "5", offset: "3" }}
                  xs={{ span: "5", offset: "3" }}
                >
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="enter your task"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    />
                  </Form.Group>
                </Col>
                
                <Col md="1" sm="1" xs="1">
                  <Button variant="primary" type="submit" onClick={addTodo}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
      )
}

export default Todo
