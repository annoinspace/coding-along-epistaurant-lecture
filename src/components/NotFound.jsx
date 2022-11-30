import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  // using hooks here
  const navigate = useNavigate()
  return (
    <Container>
      <Row>
        <Col>
          <h1>Page Not Found</h1>
          <Button variant="info" onClick={() => navigate("/")}>
            Click to go back to home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
