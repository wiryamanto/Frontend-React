import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"
export default class Product extends Component {
    render() {
        return (
            <div>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.harga}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>
            </div>
        )
    }
}
