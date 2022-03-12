import React, { Component } from 'react'
import "./App.css";
import image from "./img/logo.svg"
export default class App extends Component {
  state ={
    fullName:"Omar",
    bio:"test",
    profession:"test",
    shows:false,
    image : <img src={image} alt='photo'></img>
}

handleShow = () => {
     this.setState({shows:!this.state.shows})
    }
  render() {
    return (
      <div  className='App'>
       <button  onClick={this.handleShow} >   {this.state.shows ? "Hide" : "Show"}  </button>    
      {this.state.shows ?(
        
        
        <div>
          {this.state.image}
          <h1> {this.state.fullName} </h1>
          <h1> {this.state.bio} </h1>
          <h1> {this.state.profession} </h1>
        </div>
      ): null}

      
      </div>
    )
  }
}
