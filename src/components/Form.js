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
                        <label>Name</label>
                        <input type="text" name='name' placeholder='John Smith' value={this.state.name} onChange={this.handleNameChange}/>
                        <label>Email</label>
                        <input type="email" name='email' placeholder='example@example.com' value={this.state.email} onChange={this.handleEmailChange}/>
                        <label>Password</label>
                        <input type="password" name='password' value={this.state.password} onChange={this.handlePasswordChange}/>
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