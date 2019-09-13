import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Wizard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
        }
    }

    handleNameChange(val) {
        this.setState({
            input: val
    });
}

    render() {
        return (
            <Wizard>
                <input value={this.state.input} onChange={e => this.handleNameChange(e.target.value)}>Name</input>
                <input value={this.state.input} onChange={e => this.handleNameChange(e.target.value)}>Address</input>
                <input value={this.state.input} onChange={e => this.handleNameChange(e.target.value)}>City</input>
                <input value={this.state.input} onChange={e => this.handleNameChange(e.target.value)}>State</input>
                <input value={this.state.input} onChange={e => this.handleNameChange(e.target.value)}>Zipcode</input>
                <Link to= "/my-react-app/src/components/dashboard">
                    <button>Cancel</button>
                </Link>
            </Wizard>
        )
    }
}

export default Wizard;