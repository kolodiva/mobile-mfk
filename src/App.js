import React from "react";
import { Button, Container, Navbar, Nav, NavDropdown, Image, Tabs, Tab } from 'react-bootstrap';
import axios from'axios';

import { addToPathSrvQry, greyColor } from './constants'
import { connect } from 'react-redux';


import TabsMobile from './components/test'

import { Swipeable } from 'react-touch';



function mapStateToProps(state) {
  return {
    name: state.name
  };
}

class App extends React.Component {

  state = {data: []}

	//state = { name: 'React here!' }
	async handleBtn(e) { 

    e && e.preventDefault();

		const {data} = await axios.get(addToPathSrvQry + '/qry');

    this.setState( { data: data } );

    //alert( data );
	    
		//this.setState( { name: data } );
		//this.props.dispatch( { type: 'CNGE_NAME', payload: data } );
	}

  componentDidMount() {

    this.handleBtn();
  }

	render() {
	  
    return (

	  	<div className='p-2 position-relative' style={{ height: '100vh', width: '100vw'}}>

          <TabsMobile />

          { this.state.data.length === 0 ? null : 
            
            <div className='container d-flex flex-wrap' style={{marginTop: '85px'}}>
                { this.state.data.map( (rec, ind) => { return(<div key={ind} className='p-2'>
                                                                
                                                                <img src={rec.guid_picture} style={{ maxHeight: '150px'}} />
                                                                
                                                                
                                                              </div>) } ) }
            </div>

          }

      </div>
	   );
	 }
};

export default connect(mapStateToProps)(App);


//<p className='ml-2'>{rec.name}</p>
