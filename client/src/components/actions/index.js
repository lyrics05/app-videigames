import axios from "axios"

import { GET_VIDEO_GAMES,GET_GENRES,GET_GAME_DETAILS,SEARCH_GAME,ALPHABETICAL_SORT,SCORE_SORT,GENRE_TYPE_FILTER,CREATED_TYPE_FILTER,PLATFORM_TYPE_FILTER } from './types';

export function getVideoGames() {
    return function(dispatch) {
     axios.get("http://localhost:3001/videogames")
    .then((response) => {
       dispatch({type:GET_VIDEO_GAMES,payload:response.data})
    }).catch((error) => {
        console.log(error)
    }
    )
}};

export function getGamesById (id){
    
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/videogames/${id}`);
    return dispatch( {
        type : GET_GAME_DETAILS,
        payload: json.data
    })
}
};

export function getGameByName(name) {
    return async function(dispatch) {
    
         await axios.get(`http://localhost:3001/videogames?name=${name}`).then(res=>{
            dispatch({type:SEARCH_GAME,payload:res.data})
        })
    }
};
export function aplhabeticalSort(payload) {
    return {
        type: ALPHABETICAL_SORT,
        payload
    }
};

export function scoreSort(payload) {
    return {
        type: SCORE_SORT,
        payload
    }
};

export function genreTypeFilter(payload) {
    return {
        type: GENRE_TYPE_FILTER,
        payload
    }
};

export function platformTypeFilter(payload) {
    return {
        type: PLATFORM_TYPE_FILTER,
        payload
    }
};

export function createdTypeFilter(payload) {
    return {
        type: CREATED_TYPE_FILTER,
        payload
    }
};



//-----------------------------------------------------------------------------------------------//

export function crearGame(payload){
    return async function(dispatch){
     try {
        var response = await axios.post("http://localhost:3001/videogame",payload)
        alert("CREADO")
        return response
     } catch (error) {
       alert(error) 
     }
    }
}
export function getGenres (){
    
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/genres`);
       
        return dispatch( {
            type : GET_GENRES,
            payload: json.data
        })

    }
}

/*export function cleanDeatil(){
    return{
        type:CLEAN_DETAIL
    }
}*/
