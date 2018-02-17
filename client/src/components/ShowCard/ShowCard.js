//dont need any of this...

import React from "react";
import "./ShowCard.css";

const ShowCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="showcard">
		<div className="img-container">
			<img src={props.image} />
		</div>
	</div>
);


export default Card;