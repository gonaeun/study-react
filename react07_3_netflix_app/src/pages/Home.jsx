import React from 'react'
import api from '../api' 
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home = () => {

    const popularMovieData = async() =>{
        const API_URL1 = '/movie/popular?language=ko-KR&page=1';
        // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
        const res = await api.get(API_URL1)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
        console.log(res.data);
        
      }

    //   const topRatedMovieData = async() =>{
    //     const API_URL2 = '/movie/top_rated?language=ko-KR&page=1';
    //     // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
    //     const res = await api.get(API_URL2)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
    //     console.log(res.data);
        
    //   }

    //   const upcomingMovieData = async() =>{
    //     const API_URL3 = '/movie/upcoming?language=ko-KR&page=1';
    //     // const res = await axios   // axios 사용할거면, 우리가 만든 api로 불러오기
    //     const res = await api.get(API_URL3)   //api에 baseURL까진 적혀있으니까 API_URL로는 그이후의 주소만 있으면 됨
    
    //     console.log(res.data);
        
    //   }
    
      useEffect(()=>{
        popularMovieData()
        // topRatedMovieData()
        // upcomingMovieData()
      },[])

  return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
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
    );

}

export default Home