import React from 'react';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflower:hidden;
  width:960px;
  margin 0 auto;
`; 

export const HomeLeft = styled.div`
  float:left;
  width:625px;
  margin-left:15px;
  padding-top:30px;
  .banner-img{
  	width:625px;
  	height:270px;
  }
`;

export const HomeRight = styled.div`
  float:right;
  width:240px;
`;

export const TopicWrapper = styled.div`
  overflower:hidden;
  paddinf:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  margin-left:18px;
  margin-bottom:18px;
  padding-right:10px;
  background:#f7f7f7;
  font-size:14px;
  color#000;
  border:1px solid #dcdcdc;
  border-radius:4px; 
  .topic-pic{
  	display:block;
  	float:left;
  	width:32px;
  	height:32px;
  	margin-right:10px;
  }
`;

export const ListItem = styled.div`
  overflower:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    margin-top:20px;
  	display:block;
  	width:125px;
  	height:80px;
  	float:right;
  	border:ridus:10px;
  }
`;

export const ListInfo = styled.div`
  float:left;
  width:500px;
  &.title{
  	line-height:27px;
  	font-size:18px;
  	font-weight:bold;
  	color:#333;
  }
  &.desc{
  	line-height:24px;
  	font-size:13px;
  	color#999;
  }
`;

