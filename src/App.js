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
    this.clicks = this.clicks.bind(this)
  }
  // creating a function that will execute upon a click. This function will change box color
  // and update the count
  clicks(){
        //box color will change to either blue or orange when clicked

    const colorSwitch = () =>{
      if(this.state.color === 'orange'){
        this.state.color = 'blue'
      } else if(this.state.color === 'blue'){
        this.state.color = 'orange'
      }
      //setting a counter to represent the counter state
    let counter = this.state.count;
    //setting the state to change color and increment by one
    this.setState({
      color: colorSwitch,
      count: counter + 1
    })
  }
}

  render() {
  return (
    <div className="App">
      <div id='box' onClick={this.props.clicks}></div>
    </div>
  )
  }
}
export default App
