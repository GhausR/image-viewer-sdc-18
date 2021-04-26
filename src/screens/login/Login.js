import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Header from '../../common/header/Header';

/*
Login component to render login screen takes username and password from the user.

username: master
password: password
access-token: IGQVJXY1BMWjV3X3ZAQcXdjUjVFMEFDMXhZAY0JoZAVdreUsxc1JpNjJwRlBMVTFGSE5ZAdnBWWnltcWF1dWlVLUFwRWljM2w5ZAHVJSUI3THEtM1BmN0xDMTVSdXYzNkFnUHN0MmVycnNhU2RFRElfMHc3c2dqd0laT25WbjFN

*/

class Login extends Component {
    constructor () {
        super ();
        this.state = {
            "correctUserName": "master",
            "correctPassword": "password",
            "access-token": "IGQVJXY1BMWjV3X3ZAQcXdjUjVFMEFDMXhZAY0JoZAVdreUsxc1JpNjJwRlBMVTFGSE5ZAdnBWWnltcWF1dWlVLUFwRWljM2w5ZAHVJSUI3THEtM1BmN0xDMTVSdXYzNkFnUHN0MmVycnNhU2RFRElfMHc3c2dqd0laT25WbjFN",
            "username": "",
            "password": "",
            "username-helper-text-class": "DispNone",
            "password-helper-text-class": "DispNone",
            "incorrect_credentials-helper-text-class": "DispNone",
        }
    }

    render() {
        return (
            <div>
                <Header isLogin = {false}/>
                <Card className = "login-card">
                <CardContent style = {{ padding: 50 }}>
                    <InputLabel id = "login-card-heading">LOGIN</InputLabel><br />
                    <form>
                    <FormControl className = "login-form-control">
                        <TextField id = "username-basic" label="Username *" onChange = {this.usernameChangehandler} />
                        <FormHelperText className = {this.state['username-helper-text-class']} style = {{ color: '#fb3640' }} >required</FormHelperText>
                    </FormControl><br /><br />
                    <FormControl className = "login-form-control">
                        <TextField id = "password-basic" type="password" label="Password *" onChange = {this.passwordChangehandler} autoComplete="on"/>
                        <FormHelperText className = {this.state['password-helper-text-class']} style = {{ color: '#fb3640' }}>required</FormHelperText>
                        <FormHelperText className = {this.state['incorrect_credentials-helper-text-class']} style = {{ color: '#fb3640' }}>Incorrect username and/or password</FormHelperText>
                    </FormControl><br /><br />
                    <Button variant = "contained" color = "primary" onClick = {this.loginClickHandler}>
                        Login
                    </Button>
                    </form>
                </CardContent>
            </Card>
            </div>
            
        );
    }

    /* 
    This method checks if any of the fields are empty when the user decides to login. 
    */

    loginClickHandler = () => {
        var fieldsEmpty = false;
        console.log ("login clicked");
        if (this.state.username === "") {
            console.log ("username is empty");
            fieldsEmpty = true;
            this.setState ({ "username-helper-text-class": "DispRed" });
        }
        else {
            this.setState ({ "username-helper-text-class": "DispNone" });
        }
        if (this.state.password === "") {
            console.log ("password is empty");
            fieldsEmpty = true;
            this.setState ({ "password-helper-text-class": "DispRed" });
        }
        else {
            this.setState ({ "password-helper-text-class": "DispNone" });
        }
        if (!fieldsEmpty) {
            console.log ("Go ahead with login");
            if (this.state.username === this.state.correctUserName && this.state.password === this.state.correctPassword) {
                this.setState ({ "incorrect_credentials-helper-text-class": "DispNone" });
                sessionStorage.setItem ("isLogin", "true");
                this.props.history.push ('/home');
            }
            else {
                this.setState ({ "incorrect_credentials-helper-text-class": "DispRed" });
            }
        }
        else {
            this.setState ({ "incorrect_credentials-helper-text-class": "DispNone" });
        }
    }


    // looks for changes in the username field
    usernameChangehandler = (e) => {
        console.log (e.target.value);
        this.setState ({ "username": e.target.value });
    }
    // looks for changes in the password field
    passwordChangehandler = (e) => {
        console.log (e.target.value);
        this.setState ({ "password": e.target.value });
    }
}

export default Login;