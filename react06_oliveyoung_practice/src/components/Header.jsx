import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
      <div>
        <Breadcrumb className='nav_divider'>
            <Breadcrumb.Item>
                <Link to={"/"}>회원가입</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                 <Link to={"/login"}>로그인</Link> 
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                 <Link to={"/"}>장바구니</Link> 
            </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
          <Navbar expand="lg">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <img className='nav_logo_img' src='https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png'></img>
              </Nav>
              <Form className="d-flex">
                <Form.Control
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
      </div>
      <div></div>
    </div>
  )
}

export default Header