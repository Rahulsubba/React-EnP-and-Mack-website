
import {Component} from "react";
import Website1 from "./web1";
import Website2 from "./web2";
import Website3 from "./web3";





class Mack extends Component{
    constructor(props){
      super(props);
      this.state={
            message: false,
            display: false
            
      }
    }
    
     onClick = () => {
           this.setState({
            message: "This is the Code"
           })
     }
    
    
    
    
    handleButtonClick=()=>{
      this.setState((prevState)=>{
        return{
          display:!prevState.display
        };
      });
    };
     
     render(){
        return(
          <div className="global">
         
           <Website1 onClick={this.handleButtonClick} display={this.state.display}/>
           <Website2/>
           <Website3/>
    
         </div>
        
    
        )
      }
    }
    
    export default Mack;
    
    
    
    
    
    
    
    
    
    
    
    
    