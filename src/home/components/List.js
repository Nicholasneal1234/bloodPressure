import React from 'react';
import { ListItem, ListInfo } from '../styled.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function List (props) {
	return(
	    <ListItem>
	        {
	        	props.list.map( (item) => {
	        		return  <Link key = {item.id} to = {"/detail/"+item.id}>
	        		                <img className = "pic" src = {item.imgUrl} />
	        		                <ListInfo className = "title"  >{ item.title }</ListInfo>
	        		                <ListInfo className = "desc" >{ item.content }</ListInfo>
	        		        </Link>
	        	} )
	        }
	    </ListItem>   
	);
}

const mapState = (state) => {
	return{
		list:state.home.List
	}
}

export default connect( mapState )( List );