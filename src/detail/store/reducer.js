import React from 'react';
import { CHANGE_DETAIL } from './actionType.js';


const defaultState = {
	detailList : []
}

export default(state = defaultState,action) => {
	if(action.type===CHANGE_DETAIL){
		const newState = JSON.parse(JSON.stringify(state));
		newState.detailList=action.detailList;
		return newState;
	}
	return state;
}