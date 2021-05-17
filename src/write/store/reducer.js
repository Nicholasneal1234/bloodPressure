 import { CHANGE_BLOODPRESSURE } from'./actionType.js';

 const defaultState = {
 	BP:"0"
 }

 export default (state = defaultState, action) => {
 	if(action.type===CHANGE_BLOODPRESSURE){
 		const newState = JSON.parse(JSON.stringify(state));
 		newState.BP = action.BP;
 		return newState;
 	}
 	return state;
 }