import React from 'react';
import {TopicWrapper,TopicItem} from '../styled.js'
import {connect} from 'react-redux';

function Topic (props) {
	return (
	    <TopicWrapper>
	        {
	        	props.list.map((item)=>{
	        	    return (
                        <TopicItem key={item.id}>
                            <img src={item.imgUrl} className="topic-pic"/>
                            {item.title}
                        </TopicItem>
                    )  
	            })
	        }
	    </TopicWrapper>
	);	        
}

const mapState = (state) => {
	return{
		list: state.home.topic
	}
}

export default connect(mapState)(Topic);