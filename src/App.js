import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // determining state which will start at orange
    this.state = {
      color: 'orange',
      count: 0
    }
    //binding my click function within the constructor. this function will be created soon
    this.click = this.click.bind(this)
  }
  // creating a function that will execute upon a click. This function will change box color
  // and update the count
  click(){
        //box color will change to either blue or orange when clicked
      if(this.state.color === 'orange'){
         this.state.color = 'blue'
      } else if(this.state.color === 'blue'){
         this.state.color = 'orange'
      }
    
    //setting the state to change color and increment by one
    
    this.setState({
      color: this.state.color,
      count: this.state.count + 1
    })  
  }


  render() {
  return (
    <div className="App">
      <div>{this.state.count}</div>
      <div id='box' style={{backgroundColor: this.state.color}} onClick={this.click}>Click me</div>
    </div>
  )
  }
}
export default App
