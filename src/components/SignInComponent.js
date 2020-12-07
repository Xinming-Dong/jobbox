import React from 'react';
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';

class SignInComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pswd: '',
            role: ''
        };
        this.updateForm = this.updateForm.bind(this);
    }

    updateForm = (newState) => {
        this.setState(newState);
    }

    submitInfo = () => {
        if (this.state.name === '' || this.state.pswd === '' || this.state.role === '') {
            alert('please provide full information!');
        }
        console.log(this.state);
        // this.props.history.push({
        //                             pathname: '/JobSeekerComponent'
        //                         });
    }

    render() {
        return (
            <div>

                <form>
                    <label>User Name:
                        <input type="text" name="name" value={this.state.name}
                               onChange={(e) => this.updateForm({
                                                                    name: e.target.value
                                                                })}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="text" name="pswd" value={this.state.pswd}
                               onChange={(e) => this.updateForm({
                                                                    pswd: e.target.value
                                                                })}/>
                    </label>
                    <br/>
                    <label> <input type="radio" name='role' value="seeker"
                                   onChange={(e) => this.updateForm({
                                                                        role: e.target.value
                                                                    })}/>Job seeker</label><br/>
                    <label> <input type="radio" name='role' value="recruiter"
                                   onChange={(e) => this.updateForm({
                                                                        role: e.target.value
                                                                    })}/>Recruiter</label>

                </form>
                <button onClick={this.submitInfo}>Login</button>
            </div>
        );
    }
}

export default SignInComponent;