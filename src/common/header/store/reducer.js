import * as t from './actionTypes.js';

const defaultState = {
	focused:false,
	list:[]
}

export default (state = defaultState,action) => {
	if(action.type===t.HANDLE_INPUT_CHANGE){
		const copyState = JSON.parse(JSON.stringify(state));
		copyState.focused = action.focused;
		return copyState;
	}
	if(action.type===t.HANDLE_INPUT_BLUR){
		const copyState = JSON.parse(JSON.stringify(state));
		copyState.focused = action.focused;
		return copyState;
	}
	if(action.type===t.CHANGE_LIST){
		const copyState = JSON.parse(JSON.stringify(state));
		copyState.list = action.data;
		return copyState;
	}
	return state;
}