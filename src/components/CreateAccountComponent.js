import React from 'react';

class CreateAccountComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pswd: '',
            role: ''
        };
        this.setName = this.setName.bind(this);
        this.setPswd = this.setPswd.bind(this);
        this.setRole = this.setRole.bind(this);
    }

    setName(event) {
        this.setState({
                          name: event.target.value
                      });
    }

    setPswd(event) {
        this.setState({
                          pswd: event.target.value
                      });
    }

    setRole(event) {
        this.setState({
                          role: event.target.value
                      });
    }

    submitInfo = () => {
        if (this.state.name === '' || this.state.pswd === '' || this.state.role === '') {
            alert('please provide full information!');
        }
        console.log(this.state);
    }

    render() {
        return (
            <div>

                <form>
                    <label>User Name:
                        <input type="text" name="name" value={this.state.name}
                               onChange={this.setName}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="text" name="pswd" value={this.state.pswd}
                               onChange={this.setPswd}/>
                    </label>
                    <br/>
                    <label> <input type="radio" name='role' value="seeker"
                                   onChange={this.setRole}/>Job seeker</label><br/>
                    <label> <input type="radio" name='role' value="recruiter"
                                   onChange={this.setRole}/>Recruiter</label>

                </form>
                <button onClick={this.submitInfo}>Create</button>
            </div>
        );
    }
}

export default CreateAccountComponent;