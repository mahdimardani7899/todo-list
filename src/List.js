import React from 'react'
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { LuTrash } from "react-icons/lu";
import { ToastContainer } from "react-toastify";



const List = ({todos, changeStatus, removeTask}) => {
    return (
        <div>
            <Container>
            <Row>
              {todos.map((item, index) => (
                <Col key={index} md="4" sm="6">
                  <Card
                    bg={item.status ? "success" : "danger"}
                    text="white"
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Title> {item.text}</Card.Title>
                      <Button
                        variant={item.status ? "danger" : "success"}
                        onClick={() => changeStatus(index)}
                      >
                        {item.status ? "undone" : "done"}
                      </Button>
                      <LuTrash onClick={() => removeTask(index)} />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
    
          <ToastContainer />
        </div>
      )
}

export default List
