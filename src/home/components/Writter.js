import React from 'react';
import { connect } from 'react-redux';

function Writter (props) {
	return(
	    <h1>目前血壓為:{props.BP}</h1>
	);
}

const mapState = (state) => {
    return{
        login:state.login.login,
        BP:state.write.BP
    }
}

export default connect(mapState,null)(Writter);