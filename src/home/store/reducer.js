import { CHANGE_DATA } from './actionType.js';

const defaultState = {
	topic: [],
	List: []
}

export default (state = defaultState, action) => {
	if(action.type===CHANGE_DATA){
		const newState = JSON.parse(JSON.stringify(state));
		newState.topic = action.topic;
		newState.List = action.list;
		return newState;
	}
	return state;
}