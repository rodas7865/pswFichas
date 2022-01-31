import {Component} from "react";
import React from "react";
import {useParams,Link,Navigate} from "react-router-dom";
import {withRouter} from "./withrouter";
import ('./Styles/Form.css')

class GlobalForm extends Component{

    constructor(props) {
        super(props);

        if(this.props.listClasses===undefined||null){
            this.state = {
                novaCLasse: {
                    nome : "",
                    imagem : "",
                    armaPrimaria : "",
                    armaSecundaria : "",
                    descricao :"",
                    grupo:""

                }
            }
        }else{
            this.state = {
                novaCLasse: {
                    nome : (this.props.listClasses[this.props.params.id].nome),
                    imagem : this.props.listClasses[this.props.params.id].imagem||"",
                    armaPrimaria : this.props.listClasses[this.props.params.id].armaPrimaria||"",
                    armaSecundaria : this.props.listClasses[this.props.params.id].armaSecundaria||"",
                    descricao :this.props.listClasses[this.props.params.id].descricao||"",
                    grupo:this.props.listClasses[this.props.params.id].grupo||""

                }
            }
        }


    }

    updateField = (e) => {
        e.preventDefault()
        const target = e.target;
        const value = target.value;
        const fieldName = target.name;
        var novaClasse = this.state.novaCLasse;
        novaClasse[fieldName]=value
        this.setState({
            novaClasse: novaClasse
        })
    }


    render(){

        return (
        <div>
            {(this.props.params.id==null||undefined)?(<h1>Nova Classe</h1>):(<h1>Editar Classe</h1>)}
            <form onSubmit={(e)=>{e.preventDefault();this.props.submitForm(e,this.state.novaCLasse,this.props.params.id)}}>
                <p>
                    Nome: &nbsp;
                    <input className="user-box" type="text" name="nome" placeholder="Insira o nome"  value={this.state.novaCLasse.nome} onChange={(e) => this.updateField(e)}/>
                </p>
                <p>
                    Imagem: &nbsp;
                    <input type="text" name="imagem" placeholder="Insira a imagem" value={this.state.novaCLasse.imagem} onChange={(e) => this.updateField(e)}/>
                </p>
                <p>
                    Arma Primaira: &nbsp;
                    <input type="text" name="armaPrimaria" placeholder="Insira a arma primaria" value={this.state.novaCLasse.armaPrimaria} onChange={(e)  => this.updateField(e)}/>
                </p>
                <p>
                    Arma Secundaria: &nbsp;
                    <input type="text" name="armaSecundaria" placeholder="Insira a arma secundaria" value={this.state.novaCLasse.armaSecundaria} onChange={(e) => this.updateField(e)}/>
                </p>
                <p>
                    Descrição: &nbsp;
                    <textarea name="descricao" id="" cols="30" rows="10" placeholder="Insira uma descrição" value={this.state.novaCLasse.descricao} onChange={(e) => this.updateField(e)}/>
                </p>
                <p>
                    Grupo: &nbsp;
                    <select type="text" name="grupo" value={this.state.novaCLasse.grupo} onChange={(e) => this.updateField(e)}>
                        <option name="grupo" value={'Defesa'}>Defesa</option>
                        <option name="grupo" value={'Ataque'}>Ataque</option>
                        <option name="grupo" value={'Suporte'}>Suporte</option>
                    </select>
                </p>
                <p>
                    <button type='submit'>Gravar</button>
                </p>
            </form>
            <Link exact to="/dashboard"><button>Voltar</button></Link>
        </div>
    )}
}

export default withRouter(GlobalForm)