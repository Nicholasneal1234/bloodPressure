import React,{useState} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,Search,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList,SearchInfoItem} from './style.js'; 
import * as createAction from './store/creatorAction.js';
import {connect} from 'react-redux'; 
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';

function Header (props) {
	const listArea = (show) => {
		if(show){
			return(<SearchInfo>
		                    <SearchInfoTitle>
		                        熱門收尋
		                        <SearchInfoSwitch>換一批</SearchInfoSwitch>
		                    </SearchInfoTitle>
		                    <SearchInfoList>
		                        {props.list.map((item,index) => {
		                        	return <SearchInfoItem key={index}>{item}</SearchInfoItem>
		                        })}
		                    </SearchInfoList>   
		                </SearchInfo>
		                );
		}
	}
	const [focused,setFocused] = useState(false);
	return(
		    <HeaderWrapper>
		        <Link to = '/' ><Logo></Logo></Link>
		        <Nav>
		            <NavItem className='left'><Link to = '/'>首頁</Link></NavItem>
		            <NavItem className='left'>下載App</NavItem>
		            <SearchWrapper>
		                <NavSearch className={props.focused?'focused':''} onFocus={props.HandleInputChange} onBlur={props.HandleInputBlur}></NavSearch>  
		                {listArea(props.focused)}
		            </SearchWrapper>
		            {(props.login)?<NavItem className='right'><a href = '/'>退出</a></NavItem>:<NavItem className='right'><Link to = '/login'>登陸</Link></NavItem>}
		            <NavItem className='right'>Aa</NavItem>
		        </Nav>
		        <Addition>
		            <Link to = '/write' ><Button className='writting'>血壓</Button></Link> 
		            <Button className='reg'>註冊</Button>
		        </Addition>
		    </HeaderWrapper>
	    );
}

const mapStateToProps = (state) =>{
	return{
		focused:state.header.focused,
		list:state.header.list,
		login:state.login.login
	};
}

const mapDispatchToProps = (dispatch) =>{
	return{
		HandleInputChange(){
			dispatch(createAction.GetList());
			dispatch(createAction.HandleInputChange());
		}
		,
		HandleInputBlur(){
			dispatch(createAction.HandleInputBlur());
		}
	}
}

 export default connect(mapStateToProps,mapDispatchToProps)(Header);
