import React from 'react';
import axios from 'axios';
import { CHANGE_DETAIL } from './actionType.js';

const changeDetail = (data) => {
	return {
		type:CHANGE_DETAIL,
		detailList:data.detailList
	}
}


export const changeDetailData = (id) =>{
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id)
		.then((res) => {
			const data = res.data.data;
		    dispatch(changeDetail(data));
		})
		.catch(() => {
			console.log("error");
		})
	}
}