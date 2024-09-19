import { useState, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext"; 
import { Link } from "react-router-dom"; 
import rigoImage from "../../img/rigo-baby.jpg";

export const Characters = (props)=>{
    const {store} = useContext(Context);

    return(
        <>
        <h1>Characters</h1>
        <div className="card" style={{width: "18rem"}}>
            <img src="" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </>
    );
};