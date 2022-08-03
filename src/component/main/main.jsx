import React, {Component} from 'react';

export class main extends Component {
  // Appract number 1
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello',
    };
    // Appract number 2
    // this.clickHandeler = this.clickHandeler.bind(this);
  }
  // Appract number 3
  clickHandeler() {
    this.setState({
      message: 'goodBye',
    });
    console.log(this);
  }

  // Appract number 3
  clickHandeler = () =>{
    this.setState({
      message: 'GoodBye!',
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* THREE APPROACH WITH BUTTON ONCLICK  */}
        {/* <button onClick={this.clickHandeler.
        bind(this)}>Click me</button> */}
        <button onClick={() => this.clickHandeler()}>Click me</button>
        <button onClick={this.clickHandeler}>Click me</button>
      </div>
    );
  }
}

export default main;
