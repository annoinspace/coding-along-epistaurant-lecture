import { Container, Row, Col, Badge, Image } from "react-bootstrap"
import items from "../data/menu.json"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <Container>
      {items.map((pasta) => (
        <Row key={pasta.id}>
          <Col>
            <Link to={"/details/" + pasta.id}>
              <Image src={pasta.image} />
            </Link>
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
