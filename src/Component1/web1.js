import React from "react";
import { Component } from "react";
import "./mello.css";


class Website1  extends Component{
    render(){
      return(
        <div>
          <nav  className= "container">
            <ul style={{ display: this.props.display ? 'flex' : 'none', position: "absolute", 
            right: "5px"}}>
              <li className="btn btn-secondary btn-sm">Home </li>
              <li className="btn btn-secondary btn-sm">Log-in</li>
              <li className="btn btn-secondary btn-sm">Log-out </li>
              
            </ul>
            </nav>
          

<button onClick={this.props.onClick} style={{ width: "50px", height: "50px" , background: "transparent", border: "none"}}>
  <svg height="22" id="IconChangeColor" style={{ enableBackground: "new 0 0 32 32" }}  viewBox="0 0 32 32" width="22" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" id="mainIconPathAttribute" style={{fill: "gray"}}></path>
  </svg>
</button>

         
           
        </div>
      )
    }
  }
  
  export default Website1;