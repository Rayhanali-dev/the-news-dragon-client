import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    console.log(createUser);
    const [accepted, setAccepted] = useState(false);

    const handleAccpeted = (event) => {
        setAccepted(event.target.checked);
    }

    const handlerRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(name, email, password, photo); 
        createUser(email, password)
        .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='w-25 m-auto login-form p-3 mt-2 border-rounded'>
            <h3>Please Register</h3>
            <Form onSubmit={handlerRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoUrl' placeholder="Enter Your photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" onClick={handleAccpeted} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text>
                    Already have an account? please <Link to={`/login`}>Login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;