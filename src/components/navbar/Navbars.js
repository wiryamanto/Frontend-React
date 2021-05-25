import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar, Container,Card, Button } from "react-bootstrap"
import "./Navbar.css"

export default class Navbars extends Component {

        state ={
            jumlah : 1,
        }


    handlePlus = ()=>{
        this.setState ({
            jumlah: this.state.jumlah + 1,
        })
    };
    handleMinus = ()=>{
       if (this.state.jumlah > 0){
        this.setState ({
            jumlah: this.state.jumlah - 1 
        })
    };
}
    handleChange = () =>{};
    
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
                        <Nav.Link to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link to="/profile">
                       Profile
                        </Nav.Link>
                        <Nav.Link className= "shoping-cart">
                            <span>{this.state.jumlah}</span>
                            
                            </Nav.Link>
                        </Nav>
                        <FontAwesomeIcon icon = {faShoppingCart} />
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.harga}
                    </Card.Text>
                    <Button variant="danger" onClick={this.handleMinus}>-</Button>
                    <input 
                    onChange={this.handleChange}
                     type = "text" 
                     value={this.state.jumlah}
                     className="text-center" 
                     style ={{width:"70%"}}/>
                    <Button variant="primary" onClick={this.handlePlus}>+</Button>
                </Card.Body>
             </Card>
            </div>
        )
    }
}
