import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div class='container bg-dark'>
        <div class='row'>
            <div class='col-4 pt-4'>
            <img  class='image'src='https://i.pinimg.com/originals/92/13/df/9213df2e7622e767f9fd09fcd656c5cb.jpg'></img>
			</div>
            <div class='col-1 fs-2 pt-4 text-white'>0</div>
            <div class='col-1 fs-2  pt-4 text-white'>0</div>
            <div class='col-1 fs-2  pt-4 text-white'>0</div>
            <div class='col-1 fs-2   pt-4 text-white'>{props.tens}</div>
            <div class='col-1 fs-2   pt-4 text-white'>{props.hundreds}</div>
            <div class='col-1 fs-2   pt-4 text-white'>{props.unit}</div>
        </div>
    </div>
       
	);
};

export default Home;
