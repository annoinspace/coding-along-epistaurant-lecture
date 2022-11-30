import { Navbar, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
// let's create a React Component for just the Navbar!
// I'm going to choose the simplest way for creating this component,
// since it does not need any special ability!
// --> a function returning JSX

const CustomNavbar = ({ subtitle }) => {
  // use hooks here
  const location = useLocation()
  console.log("LOCATION IN NAVBAR", location)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Epistaurant - {subtitle}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/menu">
            <div
              className={
                location.pathname === "/menu" ? "nav-link active" : "nav-link"
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/booking">
            <div
              className={
                location.pathname === "/booking"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Book a table
            </div>
          </Link>
          <Link to="/admin">
            <div
              className={
                location.pathname === "/admin" ? "nav-link active" : "nav-link"
              }
            >
              Admin
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// this is an alternative way: allows you to open the body of the
// functional component to do stuff in it (like a console.log())
// before returning the JSX; REMEMBER TO PUT AN EXPLICIT RETURN!

// const CustomNavbar = (props) => {
//   console.log('Hello, this is CustomNavbar speaking!')
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Navbar.Brand href="#home">
//         Epistaurant - {props.subtitle}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link href="#menu">Menu</Nav.Link>
//           <Nav.Link href="#reservation">Reservation</Nav.Link>
//           <Nav.Link href="#findus">Find us</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }

export default CustomNavbar
