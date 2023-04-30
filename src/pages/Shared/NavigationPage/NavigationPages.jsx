import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationPages = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='bg-light'>
            <Container>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto d-flex gap-4">
                                <Link className='text-decoration-none' to={`/`}>Home</Link>
                                <Link className='text-decoration-none' to={`/about`}>About</Link>
                                <Link className='text-decoration-none' to={`/career`}>Career</Link>
                            </Nav>
                            <div className='d-flex gap-2 align-items-center'>
                                {
                                    user && <FaUserCircle style={{ width: '35px', height: '35px' }}></FaUserCircle>
                                }
                                {
                                    user ? <Link to={`/login`}><button className='btn btn-primary'>Log Out</button></Link> : <Link to={`/login`}>
                                        <button className='btn btn-primary'>Login</button>
                                    </Link>
                                }
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationPages;