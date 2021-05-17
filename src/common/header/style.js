import styled from 'styled-components';
import logoPic from '../../static/blood.jpg';

export const HeaderWrapper = styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
  top:0;
  left:0;
  dispaly:block;
  position:absolute;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`;

export const Nav = styled.div`
  width:960px;
  height:56px;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0px 15px;
  font-size:17px;
  &.left{
  	float:left;
  }
  &.right{
  	float:right;
  }
`;

export const SearchWrapper = styled.div`
  position:relative;
  float:left;
`;

export const NavSearch = styled.input.attrs({placeholder:'收尋'})`
  width:160px;
  height:38px;
  padding:0 20px;
  box-sizing:border-box;
  border-radius:19px;
  margin-top:9px;
  background:#eee;
  border:none;
  outline:none;
  font-size:15px;
  &.focused{
    width:240px;
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  background:#ffffff;
  left:0;
  top:56px;
  width:240px; 
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2); 
  z-index:1; 
`;

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.div`
  float:right;
  font-size:13px;
`;

export const SearchInfoList = styled.div`
  overflow:hidden;
`;

export const SearchInfoItem = styled.a`
  float:left;
  dispaly:block;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#333;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
`;


export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  float:right;
  border-bottom:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  font-size:14px;
  &.reg{
  	color:#ec6149;
  }
  &.writting{
  	color:#fff;
  	background:#ec6149;
  }
`;