import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoGames,aplhabeticalSort,scoreSort,getGenres,genreTypeFilter,createdTypeFilter,platformTypeFilter,getGameByName } from './actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paged from "./Paged"
import styles from "./css/Home.module.css"






let prevId = 1;

export default function Home() {
    
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videoGames);
    const allGenres = useSelector((state) => state.genres);
    
    
    const [order, setOrder] = useState("");
    const [page, setPage] = useState(1);
    const [videoGamesPage, setVideoGamesPage] = useState(15);
    const[input, setInput]=useState("")
    console.log(input)
   
   
   
    
    const quantityRecipesPage = page * videoGamesPage;//cuando hago click en el 2 page = 2 y ahora seria 2 * 9 = 18
    const firstRecipePage = quantityRecipesPage - videoGamesPage; //9 // es 0, pero en el array, 0 es la posicion 1
    const showVideoGamesPage = allVideoGames.slice(firstRecipePage, quantityRecipesPage);//es el array en la posicion 0 y el 9 seria la poscion 8 del array contandodesde el 0
    
     function paged (pageNumber) {
        setPage(pageNumber)
      
    };


    useEffect(() => {
        dispatch(getVideoGames())
        dispatch(getGenres())
    }, [dispatch]);

    function handleChange(e){
        setInput(e.target.value)
    }


    function handleAlphabeticalSort(e){
        e.preventDefault()
        dispatch(aplhabeticalSort(e.target.value))
        setOrder(`Order ${e.target.value}`)
        setPage(1)
    }
    function handleScoreSort(e){
        e.preventDefault()
        dispatch(scoreSort(e.target.value))
        setOrder(`Order ${e.target.value}`)
        setPage(1)
    };

    function handleSubmit(e){
        e.preventDefault()
        if(!input){
            alert("Please Enter a name")
        }else{
            dispatch(getGameByName(input))
        }
        setInput("")
        setPage(1)
    }

    function handleCreatedGame(e){
        e.preventDefault()
        dispatch(createdTypeFilter(e.target.value))
        setOrder(`Order ${e.target.value}`)
        setPage(1)
    };

    function handleGenreTypeFilter(e) {
        e.preventDefault();
        dispatch(genreTypeFilter(e.target.value))
        setPage(1);
    };
    function handleClick(e){
        e.preventDefault()
        dispatch(getVideoGames())
    }

   function handlePlatformTypeFilter(e){
    e.preventDefault();
    dispatch(platformTypeFilter(e.target.value))
    setPage(1);
   }
 
    return(
       <div>
             <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.input_search} onChange={(e)=>handleChange(e)} type="text" placeholder='Search Game....' value={input} />
            <button className={styles.button_search}  type='submit'>Search</button>
        </form>
            </div>
        <div className={styles.containercr}>
        <Link to={"/videogame"}><button className={styles.refresh}>Create Game</button></Link>
        <button className={styles.create} onClick={(e)=>handleClick(e)}>Refresh Games</button>
        </div>
        <div className={styles.selectflex}>
              
              <select className={styles.select} name="alphabetical" onChange={e => handleAlphabeticalSort(e)}>
                    <option disabled selected>Alphabetical</option>
                    <option value="atoz">A to Z</option>
                    <option value="ztoa">Z to A</option>
                </select>


                <select className={styles.select} name="numerical" onChange={e => handleScoreSort(e)}>
                    <option disabled selected> Rating</option>
                    <option value="menormayor">From Min to Max</option>
                    <option value="mayormenor">From Max to Min</option>
                </select>

                
                <select className={styles.select} name="numerical" onChange={e => handleCreatedGame(e)}>
                    <option disabled selected> Created at</option>
                    <option value="dbgames">Db Games</option>
                    <option value="apigames">Api Games</option>
                </select>
                

                <select className={styles.select} onChange={e => handleGenreTypeFilter(e)} >
                    <option disabled selected>Genres</option>
                    <option value="all">All</option>
                    {allGenres?.map((g) => {
                    return <option value={g[0].toUpperCase().concat(...g.slice(1))}> {g[0].toUpperCase().concat(...g.slice(1))} </option>
                    
                    })}
                    
                </select >

                
                <select  className={styles.select}  onChange={(e) => handlePlatformTypeFilter(e)} >
                   <option disabled selected value="">Platforms</option>
                   <option value="all">All</option>
                   <option value="PC">PC</option>
                   <option value="PlayStation 5">PlayStation 5</option>
                   <option value="Xbox One">Xbox One</option>
                   <option value="PlayStation 4">PlayStation 4</option>
                   <option value="Xbox Series S/X">Xbox Series S/X</option>
                   <option value="Nintendo Switch">Nintendo Switch</option>
                   <option value="iOS">iOS</option>
                   <option value="Android">Android</option>
                   <option value="Nintendo 3DS">Nintendo 3DS</option>
                   <option value="Nintendo DS">Nintendo DS</option>
                   <option value="Nintendo DSi">Nintendo DSi</option>
                   <option value="MacOs">MacOs</option>
                   <option value="Linux">Linux</option>
                   <option value="Xbox 360">Xbox 360</option>
                   <option value="Xbox">Xbox</option>
                   <option value="PlayStation 3">PlayStation 3</option>
                   <option value="PlayStation 2">PlayStation 2</option>
                   <option value="PlayStation">PlayStation</option>
                   <option value="PS Vita">PS Vita</option>
                   <option value="PSP">PSP</option>
                   <option value="Wii U">Wii U</option>
                   <option value="Wii">Wii</option>
                   <option value="GameCube">GameCube</option>
                   <option value="Nintendo 64">Nintendo 64</option>
                   <option value="Game Boy Advance">Game Boy Advance</option>
                   <option value="Game Boy Color">Game Boy Color</option>
                   <option value="Game Boy">Game Boy</option>
                   <option value="SNES">SNES"</option>
                   <option value="NES">NES</option>
                 

                </select >
            
        </div>
             
    <Paged videoGamesPage={videoGamesPage} allVideoGames={allVideoGames.length} paged={paged}/> 

            <div className={styles.cards} >
            {
                showVideoGamesPage.length?showVideoGamesPage.map(e => {
                    return (
                        <div key={prevId++}>
                            <Link className={styles.linkstyle}  to={`videogames/${e.id}`}>
                                <Card
                                id={e.id}
                                   name={e.name} 
                                   image={e.image} 
                                   rating={e.rating}
                                   genres={e.genres}
                                    />
                            </Link>
                        </div>
                    )
                }) :<div className={styles.flex_loading_container}>
                <h3 className={styles.loading_title}>Loading...</h3>
              
              </div>
            }
            </div>   
         <Paged videoGamesPage={videoGamesPage} allVideoGames={allVideoGames.length} paged={paged}/>         
            
        

        </div>






    )
}