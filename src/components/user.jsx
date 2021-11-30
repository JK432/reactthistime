import React from "react";
 class User extends React.Component{
     constructor(props){
         super(props);
          this.state={
              planet:"earth"
          };
          console.log("constructor")
     }
componentDidMount(){
    this.setState({planet:"Mars"})
    console.log("component did mnout")
}

     render(){
         console.log("rendering")
         return(<div>
             <h1>{this.props.name}</h1>
             <p>{this.props.description}</p>
             <p>from {this.state.planet}</p></div>
         ); 
     };
 }
 export default User;
