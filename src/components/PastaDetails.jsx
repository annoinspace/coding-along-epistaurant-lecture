import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import items from "../data/menu.json"
import DishComments from "./DishComments"

const PastaDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log("PARAMS", params)
  console.log("pastaId is", params.pastaId)
  const [pasta, setPasta] = useState(null)

  useEffect(() => {
    let detailsToShow = items.find((p) => p.id.toString() === params.pastaId)
    console.log("details to show", detailsToShow)
    setPasta(detailsToShow)
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>Pasta Details</h1>
          {pasta && (
            <Card>
              <Card.Img variant="top" src={pasta.image} />
              <Card.Body>
                <Card.Title>{pasta.name}</Card.Title>
                <div>
                  <div>{pasta.description}</div>
                  <div>{pasta.category}</div>
                </div>
                <Button variant="primary" onClick={() => navigate("/menu")}>
                  Go Back
                </Button>
              </Card.Body>
            </Card>
          )}
          {typeof pasta === "undefined" && <h1>PASTA NOT FOUND</h1>}
        </Col>
      </Row>
      <Row>
        <Col>
          <DishComments selectedPasta={pasta} />
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
