import React from "react";
import { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./EnP.css"
import { Link } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyBdnEyejTRsr6iklQFQte3TNJcTY_3toa8",
    authDomain: "main-project-f159c.firebaseapp.com",
    databaseURL: "https://main-project-f159c-default-rtdb.firebaseio.com",
    projectId: "main-project-f159c",
    storageBucket: "main-project-f159c.appspot.com",
    messagingSenderId: "458895235930",
    appId: "1:458895235930:web:8de8c86701bb1dcf167163"
  };
 
  firebase.initializeApp(firebaseConfig);

class EnP extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''

        }
        this.database = firebase.database()
    };

    handleSubmit =(event)=>{
     event.preventDefault();
     console.log("Name", this.state.name);
     console.log("Email", this.state.email);
     console.log("Password", this.state.password);

     this.database.ref("/users").push({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
     });
     
    };

    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        return(
            <div className="col">
                <form className="all"onClick={this.handleSubmit}>
                    <label class="btn btn-secondary">
                        Name 
                        <input
                        type="name"
                        name= "name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        
                        />
                        
                        
                    </label>
                    <br/>
                    <label class="btn btn-secondary">
                        Email
                        <input
                         type="email"
                         name= "email"
                         value={this.state.email}
                         onChange={this.handleChange}
                        />
                        
                        
                    </label>
                    <br/>
                    <label class="btn btn-secondary">
                        Password
                        <input
                        type="password"
                        name= "password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        
                        />
                        
                        
                    </label>
                    <br/>
                    <button  class="btn btn-dark" > <Link to ="/dashboard">Login</Link> </button>

                </form>
            </div>
        )
    };
};

export default EnP