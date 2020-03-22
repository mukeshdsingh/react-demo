import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default class ContactComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "Mukesh",
            lastName: "Singh",
            email: "shivmuk@gmail.com"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form>
                    <Form.Row>
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </label>
                    </Form.Row>
                    <Form.Row>
                        <label>
                            Last Name:
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </label>
                    </Form.Row>
                    <Form.Row>
                        <label>
                            Email:
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                    </Form.Row>
                    <Form.Row>
                        <Button variant="primary" type="button" onClick={this.handleClick}>
                            Submit
                        </Button>
                    </Form.Row>
                </form>
                <span>{this.state.firstName}</span></div>);
    }

    handleClick = () => {
        this.setState({
            firstName: "Devansh"
        })
    }

    handleChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
}
