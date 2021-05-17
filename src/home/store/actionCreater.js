import React from 'react';
import axios from 'axios';
import { CHANGE_DATA } from './actionType.js';

const changeData = (data) => {
	return{
		type: CHANGE_DATA,
		topic: data.topic,
	    list: data.list
	}
}

export const getData = () =>{
	return (dispatch) => {
	    axios.get("/api/home.json")
	    .then( (res) => {
	        const data = res.data.data;
		    dispatch (changeData(data));
	    })
	    .catch( () => {
		    console.log("error");
	    })
	}    
}