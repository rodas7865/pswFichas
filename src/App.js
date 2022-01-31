import React from "react";
import './App.css';
import {Component} from "react";
import Content from './Componets/Content';
import Footer from './Componets/Footer';
import Header from './Componets/Header';

import {BrowserRouter} from "react-router-dom";

class App extends Component{
    constructor(props) {
        super(props);

        this.state={
            my_name:"Rodrigo Cartaxo",
            project_name:"Best TF2 Classes"
        }
    }

    render(){return(
    <div className="App">
        <BrowserRouter>
            <Header myName={this.state.my_name} projectName={this.state.project_name}/>
            <Footer myName={this.state.my_name} projectName={this.state.project_name}/>
            <Content></Content>
        </BrowserRouter>
    </div>)
  }
}

export default App;
