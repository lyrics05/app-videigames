import React from "react";
import styles from "./css/Card.module.css"
import imgPage from "./img/imgPage.jpg"

const Card = ({id,name,image,rating,genres})=>{
    return(
        <div className={styles.card}>
             <h4 className={styles.idtitle}>Number: {id}</h4>

            <h1 className={styles.title} >{name}</h1>

            <div>
                <img className={styles.imagen} src={image?image:imgPage} alt="" />
            </div>
            <div>
               <h4>Rating: {rating}</h4>
            </div>
            <div>
               <h4>Genres: {genres?.map(g=>g.name)}</h4>
            </div>


        </div>
    )
}

export default Card






/*    <select onChange={(e) => handleSelect2(e)} >
                   <option disabled selected value="pc">Platforms</option>
                   <option value="pc">PC</option>
                   <option value="playStation 5">PlayStation 5</option>
                   <option value="xbox one">Xbox One</option>
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
                 

                </select >*/