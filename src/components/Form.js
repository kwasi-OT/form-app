import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <form>
                Login Form
                <div className='inputs'>
                    <label>Name</label>
                    <input type="text" name='name'/>
                    <label>Email</label>
                    <input type="email" name='email'/>
                    <label>Password</label>
                    <input type="password" name='password'/>
                </div>
                <div> 
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form