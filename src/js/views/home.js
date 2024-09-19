import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters";

export const Home = () => {
	const [starShips, setStarShips] = useState({});

	return(
	<>
	<Characters/>
		<div className="text-center mt-5 container-fluid">
					<h1>Hello Rigo desde home!</h1>
			<div className="card" style={{width: '18rem'}}>
					<img src={rigoImage} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	</>
	);
};
