import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ang from './Ang.png';
import React1 from './React1.png'
import Vue from './Vue.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            react:0,
            ang:0,
            view:0
        };
        this.voteang=this.voteang.bind(this);
        this.votereact=this.votereact.bind(this);
        this.voteview=this.voteview.bind(this);
    }
    voteang(){
        this.setState({ang:this.state.ang+1});
    }
    votereact(){
        this.setState({react:this.state.react+1});
    }
    voteview(){
        this.setState({view:this.state.view+1});

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <h1>Hello, world!</h1>
        <div className="image1">
          <img src={Ang} className="image1" onClick={this.voteang}/>
            <button type="button">Ang{this.state.ang}</button><br/>
            <img src={React1} className="image1" onClick={this.votereact}/>
            <button type="button">Ang{this.state.react}</button><br/>
            <img src={Vue} className="image1" onClick={this.voteview}/>


            <button type="button">Ang{this.state.view}</button>
      </div>
      </div>
    );


  }
}

export default App;
