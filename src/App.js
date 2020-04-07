import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // determining state which will start at orange
    this.state = {
      color: 'orange',
      count:  0
    }
    //binding my click function within the constructor. this function will be created soon
    this.clicks = this.clicks.bind(this)
  }
  // creating a function that will execute upon a click. This function will change box color
  // and update the count
  clicks(){
    let color = this.state.color
    let counter = this.state.counter
    //box color will change to either blue or orange when clicked
    if(color === 'orange'){
      color = 'blue'
    } else if(color === 'blue'){
      color = 'orange'
    }
    counter += 1;
  }
  render(){
  return (
    
    <div className="App">
      <div id='box'></div>
    </div>
  );
}
}

export default App;
