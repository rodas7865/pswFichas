const BASE_URL="https://league-of-heroes-api-2021.herokuapp.com/",
    PUBLIC_ID="22472",
    PRIVATE_ID="coendn"

export default {

    getUsers: async function(){
       let response = await fetch(BASE_URL+'users/',{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()

        return data
    },
    getUsersHerois:async function (){
        let response = await fetch(BASE_URL+'users/' + PUBLIC_ID,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()

        return data
    },
    getUsersTop:async function (){
        let response = await fetch(BASE_URL+'users/' + PUBLIC_ID + '/top',{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()

        return data
    },
    postClases:async function (listaClasse,novaClasse,id){

        if(id===undefined||null){
           listaClasse.push(novaClasse)
        } else {
            listaClasse[id]=novaClasse
        }

        let response = await fetch(BASE_URL+'users/' + PRIVATE_ID, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listaClasse)
        })
        let data = await response.json()

        return data
    },
    eliminarClass:async function (listaClasse,id){

        listaClasse.splice(id,1)

        let response = await fetch(BASE_URL+'users/' + PRIVATE_ID, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listaClasse)
        })
        let data = await response.json()

        return data
    },
    postTop:async function (body){
        let response = await fetch(BASE_URL+'users/' + PRIVATE_ID + '/top',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        })
        let data = await response.json()

        return data
    }
}