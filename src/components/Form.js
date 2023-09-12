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
            error: {
                name: "",
                email: "",
                password: "",
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
        this.setState({
            showDashboard: true
        });
        e.preventDefault();
    }

    render() {
        if(this.state.showDashboard) {
            return (
                <Dashboard user = {this.state.name}/>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    Login Form
                    <div className='inputs'>
                        <label htmlFor='name'>Enter Name</label>
                        <input type="text" id='name' name='name' placeholder='John Smith' value={this.state.name} onChange={this.handleNameChange}/>
                        <span className='error'>{this.state.error.name}</span>
                        
                        <label htmlFor='email'>Enter Email</label>
                        <input type="email" id='email' name='email' placeholder='example@example.com' value={this.state.email} onChange={this.handleEmailChange}/>
                        <span className='error'>{this.state.error.email}</span>
                        
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' name='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                        <span className='error'>{this.state.error.password}</span>
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