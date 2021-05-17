import React, { useEffect } from 'react';
import * as HS from './styled.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Topic from './components/Topic.js';
import Writter from './components/Writter.js';
import { connect } from 'react-redux';
import * as action from './store/actionCreater.js';

function Home (props) {
	useEffect(
	    props.changeData
        ,
        []
    );

	return(
        <HS.HomeWrapper>
            <HS.HomeLeft>
                <Topic/>
                <List/>
            </HS.HomeLeft>
            <HS.HomeRight>
                <Recommend>Recommend</Recommend>
                <Writter></Writter>
            </HS.HomeRight>
        </HS.HomeWrapper>
	);
}


const mapDispatch = (dispatch) => {
	return{
		changeData  ()  {
			dispatch(action.getData());
		}
	}
}

export default connect( null, mapDispatch )( Home );