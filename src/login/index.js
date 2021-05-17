import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as styled from './styled.js';
import * as action from './store/action.js';
import { Redirect } from 'react-router-dom';

function Login (props) {
	const [ account, setAccount ] = useState("");
	const [ password, setPassword ] = useState("");
	if(props.login){
		return <Redirect to = '/'></Redirect>
	}
	else{
	    return(
		    <styled.LoginWrapper>
		        <styled.LoginItem>
		            <styled.Input placeholder = "account" onChange = {(e) => {setAccount(e.target.value)} } ></styled.Input>
		            <styled.Input placeholder = "password" type = "password" onChange = {(e) => {setPassword(e.target.value)}} ></styled.Input>
		            <button onClick = {() =>{props.handleLogin(account,password)}} style={{width:200, margin:25, background:"#ec6149", borderRadius:5}}>登陸</button>
		        </styled.LoginItem>
		    </styled.LoginWrapper>
	    )
    }
}

const mapState = (state) => {
	return{
		login:state.login.login
	}
}

const mapDispatch = (dispatch) =>{
	return{
		handleLogin(account,password) {
			dispatch(action.changeLogin(account,password))
		}
	}
}

export default connect (mapState,mapDispatch)(Login);