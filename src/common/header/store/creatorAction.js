import {HANDLE_INPUT_CHANGE,HANDLE_INPUT_BLUR,CHANGE_LIST} from './actionTypes.js';
import axios from 'axios';

export const HandleInputChange = () => {
	return{
		type:HANDLE_INPUT_CHANGE,
		focused:true
	};
}

const changelist = (data) => {
	return{
		type:CHANGE_LIST,
		data:data.list
	};
} 

export const GetList = () => {
	return (dispatch) => {
		axios.get("/api/handleList.json")
		.then((res) => {
			const data = res.data;
			dispatch(changelist(data.data));
		})
		.catch(() => {
			console.log('error');
		})
	}
}

export const HandleInputBlur = () => {
	return{
		type:HANDLE_INPUT_BLUR,
		focused:false
	};
}