import React from "react";
import styles from "./css/Paged.module.css"


const Paged = ({videoGamesPage,allVideoGames,paged})=>{

    let pages = [];
    for (let i = 1; i <= Math.ceil(allVideoGames/videoGamesPage); i++) {
        pages.push(i)
        
    }
    return(
        <div >
        <nav className={styles.nav}>
          <div className={styles.container}>
          <ul className={styles.flexPaginacion}>
              {pages?.map(p=>{
                  return(
                      <li className={styles.liStyles}><a onClick={()=>paged(p)}>{p}</a></li>
                  )
              })}
          </ul>
          </div>
        </nav>
      </div>
    )

}

export default Paged