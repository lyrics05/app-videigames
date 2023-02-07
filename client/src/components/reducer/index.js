import {GET_VIDEO_GAMES,GET_GENRES,GET_GAME_DETAILS, SEARCH_GAME,ALPHABETICAL_SORT,SCORE_SORT,GENRE_TYPE_FILTER,CREATED_TYPE_FILTER,PLATFORM_TYPE_FILTER } from '../actions/types'

const initialState = {
    videoGames:[],
    allVideoGames:[],
    search:[],
    genres:[],
    gameDetail:[]
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIDEO_GAMES:
        return {
          ...state,
          videoGames:action.payload,
          allVideoGames:action.payload
        };

        case GET_GAME_DETAILS:
          return {
            ...state,
            gameDetail:action.payload,
          };

               
        case GET_GENRES:
          // console.log('action.payload',action.payload);
          return {
              ...state,
              genres:action.payload
          };


          case SEARCH_GAME:
          
              return {
                ...state,
              videoGames:action.payload
              };


        case ALPHABETICAL_SORT:
          let sortedGames = [...state.videoGames]       
          sortedGames = action.payload === 'atoz' ?
          state.videoGames.sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
          }) :
          state.videoGames.sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
          });
          return{
            ...state,
            videoGames:sortedGames
          };

          case SCORE_SORT:
            let orderpunt = [...state.videoGames]    
             orderpunt = action.payload === 'menormayor' ? 
            state.videoGames.sort(function(a,b) {
                if(a.rating < b.rating) {
                    return -1
                }
                if( a.rating > b.rating){
                    return 1
                }
                return 0
            }) : 
            state.videoGames.sort(function(a,b) {
                if(a.rating < b.rating) {
                    return 1
                }
                if( a.rating > b.rating){
                    return -1
                }
                return 0
            })
            return{
                ...state ,
                videoGames:orderpunt
        };

        case GENRE_TYPE_FILTER:
          const allGenre = [...state.allVideoGames];          
          const typeGenreFilter = action.payload === 'all' ? allGenre : allGenre.filter(j=> j.genres.find(e =>  e.name  === action.payload ) )   
          console.log(action.payload);
          
          return{
                  ...state,
                  videoGames:typeGenreFilter
  
          };

          case CREATED_TYPE_FILTER:
            const allGamesFilter = state.allVideoGames;
            const filterCreated = action.payload==="dbgames"? allGamesFilter.filter(j=>j.createdInDb):allGamesFilter.filter(j=>j.createdInApi)
            return{
              ...state,
              videoGames:filterCreated
            };

            case PLATFORM_TYPE_FILTER:
              const allPlatform =[...state.allVideoGames];          
              const typePlatformFilter = action.payload ==='all' ? allPlatform : allPlatform.filter(j=> j.platforms?.find(e =>e=== action.payload) )   
              console.log(typePlatformFilter);
              
              return{
               ...state,
                videoGames:typePlatformFilter
              };
    
        
         

        default: return state

    }
  }