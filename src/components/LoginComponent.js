import React from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import SigninComponent from './SignInComponent';
import CreateAccountComponent from './CreateAccountComponent';


class LoginComponent extends React.Component {
    state = {
        type: 'signin'
    }

    login = () => {
        this.setState(prevState =>  {
            if (prevState.type === 'create') {
                return ({type: 'signin'})
            }
        })
    }

    create = () => {
        this.setState(prevState => {
            if (prevState.type === 'signin') {
                return ( {type: 'create'})
            }
        })
    }


    render() {
        return (
            <div>
                <div>
                    <h1>JOBBOX</h1>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.create}>Create Account</button>
                </div>
                {this.state.type === 'signin' && <SigninComponent history= {this.props}/>}
                {this.state.type === 'create' && <CreateAccountComponent />}
            </div>
        );
    }
}

export default LoginComponent;