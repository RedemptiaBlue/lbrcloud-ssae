import "./Header.css"
import {NavLink} from 'react-router-dom'
import Nav from "react-bootstrap/Nav"

export default function Header() {
    return (
        <header>
            <NavLink to="/ "><h1>LBRCLoud's Secret Santa Art Exchange!</h1></NavLink>
            <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
                {/*testing purposes only*/}
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} end to="/profile">Profile</Nav.Link>
                </Nav.Item>
                {/*testing purposes only*/}
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} end to="/signup">Sign Up</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} end to="/login">Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} end to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} end to="/contactus">Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}