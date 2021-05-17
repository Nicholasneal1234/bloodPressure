import {combineReducers} from 'redux';
import headerReducer from '../common/header/store/reducer';
import * as homeReducer from '../home/store/index';
import * as detailReducer from '../detail/store/index';
import * as loginReducer from '../login/store/index';
import * as writeReducer from '../write/store/index';

export default combineReducers({
	header: headerReducer,
	home: homeReducer.reducer,
	detail: detailReducer.reducer,
	login: loginReducer.reducer,
	write: writeReducer.reducer
})