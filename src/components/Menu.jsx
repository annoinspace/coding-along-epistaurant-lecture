import { Container, Row, Col, Badge, Image } from "react-bootstrap"
import items from "../data/menu.json"

const Menu = () => {
  return (
    <Container>
      {items.map((pasta) => (
        <Row>
          <Col>
            <Image src={pasta.image} />
            <h4>
              Pasta name
              <Badge variant="warning">{pasta.price}</Badge>
              <Badge variant="danger">{pasta.label}</Badge>
            </h4>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Menu
