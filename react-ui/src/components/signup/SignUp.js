import Form from "react-bootstrap/Form"
import React from "react"

import "./SignUp.css"

export default function SignUp() {
    return (
        <React.Fragment>
            <h2>Sign Up</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Your Art Links</Form.Label>
                    <Form.Control type="url" placeholder="http://www.twitter.com/username"/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Art images</Form.Label>
                    <Form.Control type="file" accept="image/png, image/jpeg"/>
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </React.Fragment>
    )
}