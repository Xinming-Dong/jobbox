import React from 'react';

class LoginComponent extends React.Component {
    state = {
        type: 'login',
        name: '',
        pswd: '',
        role: ''
    }

    render() {
        return (
            <div>
               <div>
               <h1>JOBBOX</h1>
               <button>Login</button>
               <button>Create Account</button>
               </div>
               <form>
                    <label>User Name:
                    <input type="text" name="name" />
                    </label>
                    <br />
                    <label>Password:
                    <input type="text" name="name" />
                    </label>
                    <br />
                    <label > <input type="radio" name='role' value="Job seeke" onChange={this.handleChange}/>Job seeker</label><br/>
                    <label > <input type="radio" name='role' value="Recruiter" onChange={this.handleChange}/>Recruiter</label>

               </form>
               <button>Submit</button>
            </div>
        );
    }
}

export default LoginComponent;