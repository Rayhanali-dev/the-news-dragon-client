import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <Button className='w-100 mb-3' variant="outline-primary"><FaGoogle />Sign In With Google</Button>
            <Button className='w-100' variant="outline-secondary"> <FaGithub />Sign In With Github</Button>
            <div>
                <h4 className='my-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='py-3'><FaFacebook className='fs-2 pe-2'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='py-3'><FaTwitter className='fs-2 pe-2'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='py-3'><FaInstagram className='fs-2 pe-2'></FaInstagram> Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='news-paper-right-parent'>
                <img className='w-100' src={bg} alt="" />
                <div className='newspaper-right-context text-white text-center'>
                    <h4 className='mt-5 create-an-amazing-newspaper-title'>Create an Amazing Newspaper</h4>
                    <p className='amazing-newspaper-sub-title'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;