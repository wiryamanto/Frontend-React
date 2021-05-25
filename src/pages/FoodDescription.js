import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

export default class FoodDescription extends Component {
   
    state={
        foods:[]
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        axios.get("https://restfullfoods.herokuapp.com/foods/" + id).then((res)=>{
            console.log(res.data.data);
            this.setState({
                foods:res.data.data
            })
        })
    }


    render() {
       const {foods} = this.state
        return (
            <div>
                 <Card style={{ width: '18rem' }}>
                   

                   
                   <Card.Img variant="top" src={this.props.img} />
                   <Card.Body>
                       <Card.Title>{foods.menu}</Card.Title>
                       <Card.Text>
                        {foods.harga}
                       </Card.Text>
                       <Card.Text>
                      {foods.kategori}
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
            </div>
        )
    }
}
