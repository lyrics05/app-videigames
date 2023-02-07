import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { getGamesById} from "./actions/index";
import { Link, useParams } from "react-router-dom";
import styles from "./css/Details.module.css"
import imgPage from "./img/imgPage.jpg"


function Details(props){
    const {id} =useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state)=>state.gameDetail)
    useEffect(()=>{
        dispatch(getGamesById(id))
    },[dispatch])


    return(
        <div>
         <Link to='/home'><button className={styles.buttonbackadetail}>Back to main Page </button> </Link>
         {detail.length? <div className={styles.flex_detail_container}>
            <div className={styles.titleimgcontainer}>
            <h1>{detail[0].name}</h1>
           <img className={styles.detailimg} src={detail[0].image?detail[0].image:imgPage} />
            </div>
           <div className={styles.genresratingcontainer} >
            <h3><span>Genres:</span> {detail[0].genres?.map(g=>g.name)}</h3>
            <h3><span>Released:</span> {detail[0].released}</h3>
            <p><span>Description:</span> {detail[0].description}</p>
            <h3><span>Rating:</span> {detail[0].rating}</h3>
            <h3><span>Platforms:</span> {detail[0].platforms?.map(p=>p.name?<span id={styles.separationname}>{p.name}</span>:<span id={styles.separationname}>{p}</span>)}</h3>

           </div>{/*div de flex*/}
          </div>:null}
        </div>
    )
}

export default Details