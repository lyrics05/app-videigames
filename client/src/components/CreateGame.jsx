import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getGenres,crearGame } from "./actions/index"
import { useDispatch,useSelector} from "react-redux";
import { useState } from "react";
import styles from"./css/CreateGame.module.css"


function controlForm (input){
    let errors = {}
    if(!input.name)  errors.name='please enter a game title'
    if( input.name.length >30)errors.name='maximum of 30 characters'
    if(!input.released)errors.released='please enter a date'
    if(!input.description) errors.description='please enter a description of the game'
    if (!input.rating || input.rating<0 || input.rating >5)errors.rating = 'Rating must be a number between 0-5'
    return errors

}

const CreateGame=()=>{
    const dispatch = useDispatch()
    let listGenres = useSelector((state) => state.genres )
    console.log(listGenres)
    console.log(getGenres())

    const [errors,setErrors]=useState({
        name :'',
        description:'',
        released:'',
        rating:'',
        platforms:[],
        genres:[]
    })     // este estado local es para, las validaciones(del formulario controlado)
    const [input,setInput] = useState({
        name :'',
        description:'',
        released:'',
        rating:'',
        platforms:[],
        genres:[]
    })
    console.log("ESTO ES INPUT",input)
    console.log("ESTO ES ERRORS",errors)
    
    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
    [e.target.name] : e.target.value
})
        setErrors(controlForm({
            ...input,
            [e.target.name] : e.target.value    // me copio todo lo que venga del formulario , en el caso de que en alguno
        }))                
      }

      function handleSelect(e){
        setInput({
            ...input,
            genres:[...input.genres, e.target.value]
        })
    }
    function handleSelect2(e){
        setInput({
            ...input,
            platforms:[...input.platforms, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(crearGame(input))
       
        setInput({
            name :'',
            description:'',
            released:'',
            rating:'',
            platforms:[],
            genres:[]
        })
    }

    function handleDelete(genre){
        setInput({
            ...input,
            genres: input.genres.filter(g => g !== genre)
        }) // borra algun tipo de dieta que haya elegido y  va a crear un nuevo array con todos los que no sean
        //iguales a dieta
    }
    
    function handleDelete2(platform){
        setInput({
            ...input,
            platforms: input.platforms.filter(g => g !== platform)
        }) // borra algun tipo de dieta que haya elegido y  va a crear un nuevo array con todos los que no sean
        //iguales a dieta
    }
    
  
  
    return(
        <div>
             <Link to ='/home' ><button  className={styles.btnback}>Back to the main page</button></Link>
            <h1>Create Game</h1>
        <div className={styles.createcontainer} >
            <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label className={styles.label}>name:</label>
                    <input
                    className={styles.input}
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={(e) => {handleChange(e)}}
                    />
                 
                  <p className={styles.error} >{errors.name}</p>
                  
                </div>
                <div>
                    <label className={styles.label}>description:</label>
                    <input
                    className={styles.input}
                    type='text'
                    name='description'
                    value={input.description}
                    onChange={(e) => {handleChange(e)}} 
                    />
                   
                  <p className={styles.error} >{errors.description}</p>
                  
                </div>
                
                <div>
                    <label className={styles.label}>released:</label>
                    <input
                    className={styles.input}
                    type='date'
                    name='released'
                    value={input.released}
                    onChange={(e) => {handleChange(e)}} 
                    />
                    
                <p className={styles.error} >{errors.released}</p>
                
                </div>
                <div>
                    <label className={styles.label}>rating:</label>
                    <input
                    className={styles.input}
                    min="1"
                    max={"6"}
                    type='number'
                    step="0.1" 
                    name='rating'
                    value={input.rating}
                    onChange={(e) => {handleChange(e)}} 
                    />
                        <p className={styles.error} >{errors.rating}</p>
                </div>
                <div>
             
                <select  className={styles.select}  onChange={(e) => handleSelect2(e)} >
                   <option disabled selected value="pc">Platforms</option>
                   <option value="Pc">PC</option>
                   <option value="PlayStation 5">PlayStation 5</option>
                   <option value="Xbox one">Xbox One</option>
                   <option value="PlayStation 4">PlayStation 4</option>
                   <option value="Xbox Series S/X">Xbox Series S/X</option>
                   <option value="Nintendo Switch">Nintendo Switch</option>
                   <option value="iOS">iOS</option>
                   <option value="Android">Android</option>
                   <option value="Nintendo 3DS">Nintendo 3DS</option>
                   <option value="Nintendo DS">Nintendo DS</option>
                   <option value="Nintendo DSi">Nintendo DSi</option>
                   <option value="macos">MacOs</option>
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

                <select  className={styles.select}  onChange={(e) => handleSelect(e)} >
                    {listGenres?.map((g) => {
                    
                    return <option value={g}> {g} </option>
                    
                    })}
                   
                </select >
              
                
                  
     { Object.keys(errors).length=== 0?<button  className={styles.correct}  type='submit' > Create Recipe</button>:null}
               
            </form>
              <div>
            {input.genres?.map(e=> {
               return(
               <div  className={styles.flexTipeDietsDelete}>
                    <h5 className={styles.types}>{e}</h5>
                    <button className={styles.btnx} onClick={() => handleDelete(e)}>X</button>
                   
                </div>
            )})}
            </div>    

            <div>
            {input.platforms?.map(e=> {
               return(
               <div className={styles.flexTipeDietsDelete}>
                    <h5 className={styles.types}>{e}</h5>
                    <button  className={styles.btnx} onClick={() => handleDelete2(e)}>X</button>
                   
                </div>
            )})}
            </div>    
        </div>
        </div>
    )
}

export default CreateGame
