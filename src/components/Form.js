import React, { Component } from 'react'
import Dashboard from './Dashboard'

export class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            email: "",
            password: "",
            showDashboard: false,
            errors: {
                name: "",
                email: "",
                password: ""
            }
        }
    }
    
    handleNameChange = (e) => {
        this.setState ({
            name: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState ({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        const errors = {}

        if(this.state.name === "") {
            errors.name = "Name is required";
        }

        if(this.state.name.length <2) {
            errors.name = "Name must be at least 2 characters";
        }

        if(!this.validateEmail(this.state.email)) {
            errors.email = "Invalid email";
        }

        if(this.state.password === "") {
            errors.password = "Please enter a password";
        }

        if(this.state.password.length < 5) {
            errors.password = "Password must be at least 5 characters";
        }

        if(Object.keys(errors).length > 0) {
            this.setState({ 
                errors
            });
        } else {
            this.setState({
                showDashboard: true
            });
        }

        e.preventDefault();
    }

    validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    render() {
        if(this.state.showDashboard) {
            return (
                <Dashboard user = {this.state.name}/>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Login Form</h3>
                    <div className='inputs'>
                        <label htmlFor='name'>Enter Name</label>
                        <input type="text" id='name' name='name' placeholder='John Smith' value={this.state.name} onChange={this.handleNameChange}/>
                        <span className='error'>{this.state.errors.name}</span>
                        
                        <label htmlFor='email'>Enter Email</label>
                        <input type="email" id='email' name='email' placeholder='example@example.com' value={this.state.email} onChange={this.handleEmailChange}/>
                        <span className='error'>{this.state.errors.email}</span>
                        
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' name='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                        <span className='error'>{this.state.errors.password}</span>
                    </div>
                    <div className='button'> 
                        <button type="submit">Submit</button>
                    </div>
                </form>
            )
        }
    }
}

export default Form