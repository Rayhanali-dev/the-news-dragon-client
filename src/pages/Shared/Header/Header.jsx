import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='mt-5'>
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
                            <Button
                             className='py-2 px-4' variant="danger">Latest</Button>
                            <Marquee speed={70} className='fw-bold'>
                                I can be a React component, multiple React components, or just some text.
                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;