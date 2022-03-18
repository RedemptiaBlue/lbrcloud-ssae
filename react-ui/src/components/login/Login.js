import React from "react"

import Form from "react-bootstrap/Form"

export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username/email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="password"/>
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}