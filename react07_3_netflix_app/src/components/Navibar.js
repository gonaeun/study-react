import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../App.css';
import { Link } from 'react-router-dom';

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand>
            <Link to={"/"}>
            < img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg"
             alt="넷플릭스 로고이미지"
             width={100}/>
            </Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/' className='nav-item2'>Home</Nav.Link>
              <Nav.Link as={Link} to='/movies' className='nav-item2'>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>{' '}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;