import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { LoremIpsum } from 'react-lorem-ipsum';

export const Planets = (props) => {
    const { store, actions } = useContext(Context);
   
	return (
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img className="card-img" style={{ width: "30rem" }} src="https://via.placeholder.com/800x600" alt="Card image cap"/>
                </div>
                <div className="text-center m-auto text-center">
                    <h5>{props.entities.properties.name}</h5>
                    <p><LoremIpsum p={1} /></p>
                </div>
            </div>
                <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                    <div>
                        <p className="text-danger"><strong>name</strong></p>
                        <p className="text-danger">{props.entities.properties.name}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Climate</strong></p>
                        <p className="text-danger">{props.entities.properties.climate}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Population</strong></p>
                        <p className="text-danger">{props.entities.properties.population}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Orbital Period</strong></p>
                        <p className="text-danger">{props.entities.properties.orbital_period}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Rotation Period</strong></p>
                        <p className="text-danger">{props.entities.properties.rotation_period}</p>
                    </div>
                    <div>
                        <p className="text-danger"><strong>Diameter</strong></p>
                        <p className="text-danger">{props.entities.properties.diameter}</p>
                    </div>
                </div>
      </div>
	);
};
