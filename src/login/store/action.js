import React from 'react';
import axios from 'axios';
import firebase from '../../firebase/index.js';
import { CHANGE_LOGIN } from'./actionType';

const loginToReducer = (login) => {
	return{
		type:CHANGE_LOGIN,
		login:login
	}
}

export const changeLogin = (account,password) => {
	const ref = firebase.firestore().collection("User").doc("U646cf9feae389263b9836a503ceb4f4c").collection("Data").doc("account&password")
	return (dispatch) => {
		ref.set({account:account, password:password, login:true})
		.then(() => {
			ref.get()
			.then((res) => {dispatch(loginToReducer(res.data().login))});
		})
	}
}