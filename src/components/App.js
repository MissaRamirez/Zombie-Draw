import {GlobalFonts} from '../fonts/font';
import React, {PureComponent} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {MainWrapperComponent} from "./MainWrapper";
//import { Provider } from 'react-redux';



export  default class App extends PureComponent {
  render(){
    return (
      <div>
        <GlobalFonts />
        <Router>
          <MainWrapperComponent></MainWrapperComponent>
        </Router>      
      </div>
    );
  }
}