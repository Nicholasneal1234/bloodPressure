import React, { useEffect } from 'react';
import { DetailWrapper } from './styled.js';
import { connect } from 'react-redux';
import * as action from './store/actionCreator.js';

function Detail (props) {
	useEffect(
		() => {
			props.mountChange(props.match.params.id)
		}
		,
		[]
    );
	return(
		<div>
		    <DetailWrapper>
		       {props.list.map((item,index) => {
		       	if(index+1==props.match.params.id)
		       		return <div key = {index} ><h1>{item.title}</h1><p>{item.content}</p></div>
		        })
		       }
		    </DetailWrapper>
		</div>
		);
}

const mapState = (state) => {
	return{
		list:state.detail.detailList
	}
}

const mapDispatch = (dispatch) => {
	return{
	    mountChange (id) {
		    dispatch(action.changeDetailData(id));
	    } 
    }
}

export default connect (mapState,mapDispatch)(Detail);