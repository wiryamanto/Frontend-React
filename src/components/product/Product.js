import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"
import axios from 'axios'

export default class Product extends Component {
    
    state={
        foods:[],
    };

    componentDidMount(){
        axios.get("https://restfullfoods.herokuapp.com/foods").then((res)=>{
            console.log(res.data.data);
        })
    }

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
