import {Component, useRef} from "react";
import React from "react";
import "./Styles/Content.css"
import ClassInfo from "./ClassInfo";
import {Link} from "react-router-dom";
import api from "../Shared/api.js";

class Dashboard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            list_of_classes: this.props.ClassList,
            loading:true
        }
    }

    eliminate =async (key) => {
       await api.eliminarClass(this.state.list_of_classes,key)
        window.location.reload()
    }

    render(){
        return (
            <div className="Dashboard">
                <p className="add" align="right" ><Link to='/dashboard/add'><button>Adicionar Classe</button></Link></p>
                <table>
                    {this.state.list_of_classes.map((result, key) =>
                        <tr key={key}>
                            <td>
                                <ClassInfo key={key} nome={result.name} img={result.imagem}></ClassInfo>
                            </td>
                            <td>
                                {((/([A-Z]*[a-z])/).test(result.descricao)) ? (<p>{result.descricao}</p>) : (
                                    <p>N/D</p>)}
                            </td>
                            <td>
                                {result.grupo}
                            </td>
                            <td>
                               <p><button onClick={() => this.props.markFavorite(key)}>{this.props.favorite.includes(key) ? "Remove Favorite" : "Add Favorite"}</button></p>
                                <p><button onClick={() => this.eliminate(key)}>Eliminate</button></p>
                                <p><Link exact to={'/dashboard/edit/'+(key)}><button>Edit</button></Link></p>
                            </td>
                        </tr>
                    )}
                </table>
            </div>);
    }
}



export default Dashboard