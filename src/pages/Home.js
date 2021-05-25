import React, { Component } from 'react'
// import Navbars from "../components/navbar/Navbars";
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import Lifecomps from "./Lifecomps"

export default class Home extends Component {
    
    state={
        foods: []
    }

    componentDidMount(){
        axios.get("https://restfullfoods.herokuapp.com/foods").then((res)=>{
            console.log(res.data.data);
            this.setState({
                foods: (res.data.data)
            })
        })
    }
    // state = {
    //     showComponent: true,
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             showComponent: false,
    //         })
    //     },8000)
        
    // }

    render() {
        const {foods} = this.state;
        return (
            <div>
               {foods.map((food,index)=>{return(
               <Card style={{ width: '18rem' }}key={index}>
                   

                   
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{food.menu}</Card.Title>
                    <Card.Text>
                    {food.harga}
                    </Card.Text>
                    <Card.Text>
                    {food.kategori}
                    </Card.Text>
                    <Link to={`/details/${food.id}`}>
                    <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Body>
             </Card>
             )})}
        {/* {this.state.showComponent ? <Lifecomps /> : null} */}
            </div>
        )
    }
}
