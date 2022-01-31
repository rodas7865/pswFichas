import {Component} from "react";
import React from "react";
import "./Styles/Footer.css"

class Footer extends Component{
    render(){return(
        <div className="Footer">
            <footer>
                <p>{this.props.projectName} - Copyright © 2021 by {this.props.myName}</p>
            </footer>
        </div>)
    }
}

export default Footer