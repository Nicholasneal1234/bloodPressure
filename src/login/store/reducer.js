import { CHANGE_LOGIN } from'./actionType';

const defaultState = {
	login:false
}

export default ( state = defaultState, action ) => {
	if(action.type===CHANGE_LOGIN){
		const newState = JSON.parse(JSON.stringify(state));
		newState.login = action.login;
		console.log(newState.login);
		return newState;
	}
	return state;
}