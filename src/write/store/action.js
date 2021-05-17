import React from 'react';
import firebase from '../../firebase/index.js';
import { CHANGE_BLOODPRESSURE } from'./actionType.js';

const BPChange = (bloodPressure) => {
	return{
		type:CHANGE_BLOODPRESSURE,
		BP:bloodPressure
	}
}

export const changeWrite = (month,date,BP) => {
	let id = month+date;
	const ref = firebase.firestore().collection("User").doc("U646cf9feae389263b9836a503ceb4f4c").collection("Data").doc("id="+id);
	return (dispatch) => {
        ref.set({ bloodPressure:BP })
        .then(() => {
    	    ref.get()
    	    .then((res) => {dispatch(BPChange(res.data().bloodPressure))})
        })
    }
}