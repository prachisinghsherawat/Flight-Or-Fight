import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav , Navbar, Container ,Button , Form , FormControl } from "react-bootstrap"

export const NavbarIs = () => {


    return(
        <Navbar  bg="light" expand="lg">
  <Container className='navbar' fluid>
    <Navbar.Brand href="#"><b>FLIGHT-FIGHT</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">
          <a id='atag' href="/">HOME</a>
          <a id='atag' href="/airports">AIRPORTS</a>
          <a id='atag' href="/airports/flights">FLIGHTS</a>
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}