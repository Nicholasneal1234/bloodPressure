import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as styled from './styled.js';
import * as action from './store/action.js';
import { Redirect } from 'react-router-dom';

function Write (props) {
	const [ month, setMonth ] = useState("");
	const [ date, setDate ] = useState("");
	const [ id, setId ] = useState("");
	const [ BP, setBP ] = useState("");
	if(props.login){
		return (
			<styled.WriteWrapper>
			    <styled.WriteItem>
			        <styled.Input placeholder = "請輸入月份" onChange = {(e) => {setMonth(e.target.value)} } ></styled.Input>
			        <styled.Input placeholder = "請輸入日期" onChange = {(e) => {setDate(e.target.value)} } ></styled.Input>
			        <styled.Input placeholder = "請輸入血壓" onChange = {(e) => {setBP(e.target.value)} } ></styled.Input>
			        <button style={{width:200, margin:25, background:"#ec6149", borderRadius:5}} onClick = {() => {props.handleChange(month,date,BP)}} >確認</button>
			        <div style={{width:200, marginLeft:25, background:"#969696", borderRadius:5}} >血壓目前為:{props.BP}</div>
			    </styled.WriteItem>
			</styled.WriteWrapper>
		)
	}
	else{
	    return <Redirect to = '/login'></Redirect>
    }
}

const mapState = (state) => {
	return{
		login:state.login.login,
		BP:state.write.BP
	}
}

const mapDispatch = (dispatch) =>{
	return{
		handleChange(month,date,BP) {
			dispatch(action.changeWrite(month,date,BP));
		}
	}
}

export default connect (mapState,mapDispatch)(Write);