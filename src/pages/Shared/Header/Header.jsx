import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='text-center'>
                            <img src={logo} alt="" />
                            <p className='text-secondary'><span>Journalism Without Fear or Favour</span></p>
                            <p><span>{moment().format("dddd, MMMM Do YYYY")}</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='bg-light p-3 '>
                <Row>
                    <Col lg={12}>
                        <div className='d-flex items-center'>
                            <Button className='py-2 px-4' variant="danger">Latest</Button>
                            <Marquee speed={70} className='fw-bold'>
                                I can be a React component, multiple React components, or just some text.
                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-3 mb-5'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Career</Nav.Link>
                            </Nav>
                            <div className='d-flex gap-2 items-center'>
                                <p className='mb-0'>Profile</p>
                                <button>Login</button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;