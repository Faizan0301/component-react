import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'Welcome'
         };
    }
    hello=()=> {
        this.setState({name:'Hello'})
        
    }
    render() {
        return (
            <>
                <h3>{this.state.name} from class component....</h3>
                <button onClick={this.hello}>Change</button>
            </>
        )
    }
}
