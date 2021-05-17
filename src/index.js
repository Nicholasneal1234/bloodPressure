import ReactDOM from 'react-dom';
import {GlobalStyle} from './style';
import App from './App';
import React,{Fragment} from 'react';
ReactDOM.render(
  <Fragment>	
    <GlobalStyle/>
    <App/>  
  </Fragment> 
    ,
  document.getElementById('root')
);
