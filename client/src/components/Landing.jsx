import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Landing.module.css"

const Landing = ()=>{
    return(
        <div>
            <h1 className={styles.title}>Game APP</h1>
            <p className={styles.titlefind}>find the trends of the moment in games for you</p>
           <Link to={"/home"}><button className={styles.btn}>Let's Play</button></Link>
        </div>
    )
}

export default Landing