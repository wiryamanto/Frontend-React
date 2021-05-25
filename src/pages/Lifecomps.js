import React, { Component } from 'react'

export default class Lifecomps extends Component {
    
    state = {
        count : 1,
    };

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount");
        // setTimeout(()=>{
        //     this.setState({
        //         count: 2,
        //     })    
        // },5000)
        
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        console.group("shouldComponentUpdate");
        console.log("nextState",nextState);
        console.groupEnd();
        if(nextState.count > 5){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
    onChange= ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div className = "btn btn-primary"onClick={this.onChange}>Tambah{this.state.count}</div>
            </div>
        )
    }
}
