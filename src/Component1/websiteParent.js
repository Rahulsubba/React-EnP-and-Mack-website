
import {Component} from "react";
import Website1 from "./web1";
import Website2 from "./web2";
import Website3 from "./web3";

// import Child from "./props practise/props";
// import Child2 from "./props practise/props2";
// import Child3 from "./props practise/props3";




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
          {/* <Child onClick={this.onClick} message={this.state.message}/>
          <Child2 message={'Hello'}/> */}
          {/* <Child3 onClick={this.onClick} message={this.state.message}/>     */}
           <Website1 onClick={this.handleButtonClick} display={this.state.display}/>
           <Website2/>
           <Website3/>
    
         </div>
        
    
        )
      }
    }
    
    export default Mack;
    
    
    
    
    
    
    
    
    
    
    
    // class App extends Component {
    //    constructor(props){
    //     super(props);
    //     this.state={
    //       name: "",
    //       adharId: "",
    //       email: "",
    //       password: ""
    //     }
    //    };
      
      
    //   handleSubmit=(event) =>{
    //     event.preventDefault();
    //     console.log("Name", this.state.name);
    //     console.log("AdarId", this.state.adharId);
    //     console.log("Email", this.state.email);
    //     console.log("Password", this.state.password);
    //   };
      
    //   handleChange=(event)=>{
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     })
    //   };
    
    
    //   render(){
    //     return(
    //       <div>
    //     <Child1 name={this.state.name} adharId={this.state.adharId} 
    //     email={this.state.email} password={this.state.password} 
    //     handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    
         
    //       </div>
    //     )
    //   };
    // }
    
    
    
    