import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import "./ProfileNav.css"

export default function ProfileNav() {

    return (
        <Nav variant="tabs" className="justify-content-center" as="ul">
            <Nav.Item as="li">
                <Nav.Link as={NavLink} end to="/profile">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={NavLink}to="/profile/gifts">Gifts</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={NavLink}to="/profile/upload">Upload Gift</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={NavLink}to="/profile/settings">Account Settings</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}