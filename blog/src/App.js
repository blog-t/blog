import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import instanceAxios from './config/config';


class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        instanceAxios.get('/list')
            .then(data=>{
                console.log(234);
                console.log(data)
            })
            .catch(err=>{
                console.log(567);
                console.log(err)
            });
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
}

export default App;
