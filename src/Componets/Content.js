import {Component} from "react";
import React from "react";
import "./Styles/Content.css"
import "./Styles/Loader.css"
import ClassInfo from "./ClassInfo";
import Loader from "./Loader";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import GeneralForm from "./GeneralForm";
import {withRouter} from "./withrouter";
import api from "../Shared/api.js";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_of_classes: [],
            favorite: [],
            loading:true,
            favoriteText:"Add Favorite",
            users : []
        }
    }

  async componentDidMount() {
      this.setState({
          users: await api.getUsers(),
          list_of_classes: await api.getUsersHerois(),
          favorite: await api.getUsersTop(),
          loading : false
      })
  }

    markFavorite = async (key) =>{
        if(this.state.favorite.includes(key)===true){
            let removeFavorite = this.state.favorite
            removeFavorite.splice(removeFavorite.indexOf(key),1)
            this.setState({
                favorite: removeFavorite
            })

            await api.postTop(this.state.favorite)

            return true
        }
        let newFavorites = this.state.favorite;
        newFavorites.push(key);
        this.setState({
            favorite: newFavorites
        })

        await api.postTop(this.state.favorite)

        return false
    }

    submitForm = async (e,novaClasse,id) => {
        e.preventDefault();
        var list = this.state.list_of_classes

        await api.postClases(this.state.list_of_classes,novaClasse,id)

        this.setState({
            list_of_classes: list
        })

        this.props.navigate('/dashboard')

    }

    render() {
        let loading=null
        if(this.state.loading===true){
            loading = <Loader></Loader>
        }

        return (
                <body className="Content">
                {loading}
                        <Routes>
                            <Route exact path='/' element={
                                <div>
                                    <h2>Top 3 TF2 Classes</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                {(this.state.list_of_classes.map((result, key) =>
                                                    this.state.favorite.find(element => element === key) != null ? (
                                                        (<td key={key}>
                                                            <ClassInfo nome={result.nome} img={result.imagem} grupo={result.grupo}></ClassInfo>
                                                        </td>)) : null))}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>
                                        <img src="/Diagrama.png"></img>
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            }/>
                            <Route exact path='/dashboard'  element={<Dashboard favorite={this.state.favorite} ClassList={this.state.list_of_classes} markFavorite={this.markFavorite}/>}/>
                            <Route exact path='/dashboard/add'  element={<GeneralForm  submitForm={this.submitForm}/>}/>
                            <Route exact path='/dashboard/edit/:id' element={<GeneralForm listClasses={this.state.list_of_classes} submitForm={this.submitForm}/>}/>
                        </Routes>
                </body>)
    }
}
export default withRouter(Content)