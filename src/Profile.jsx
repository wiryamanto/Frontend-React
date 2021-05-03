import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"
export default class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >Foods</Navbar.Brand>
                        <Container>
                            <Link to="/"/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Profile"> Profile</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <h2>Ini adalah halaman Profile</h2>
            </div>
        )
    }
}
