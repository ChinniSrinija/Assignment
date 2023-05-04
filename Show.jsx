import axios from "axios"
import {useState,useEffect} from "react"
import React from "react"
import style from "./show.module.css"
import { Navigate } from "react-router-dom"
const Show=()=>{
    let [dummy,setDummy]=useState([])
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all")
        .then((response)=>{
            setDummy(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  
 return(
        <div>
            {dummy.map((x)=>{
                return(
                    <div> 
                        <h1>Show Name: {x.show.name}</h1>
                        <h2>Genres: {x.show.genres}</h2>
                        <h2>Language: {x.show.language}</h2>
                        <button>Summary</button>  <br /><br />
                    </div> 
                )
            })}
        </div>
    )
   }
export default Show 
