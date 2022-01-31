import {Component} from "react";
import React from "react";
import "./Styles/Header.css"
import {Link, NavLink} from "react-router-dom";

class Header extends Component{


    render(){return(
        <div className="Header">
            <header>
                <div>
                    <div>&nbsp;</div>
                    <h1 id='Title'>{this.props.projectName}</h1>
                    <h3>por {this.props.myName}</h3>
                    <div>
                        <table id="menu">
                            <tr>
                                <td><NavLink exact to='/'><button>Main</button></NavLink></td>
                                <td><NavLink exact to='/dashboard'><button>Dashboard</button></NavLink></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </header>
        </div>)
    }
}

export default Header