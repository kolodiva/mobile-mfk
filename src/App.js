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

  state = { data: [], countOnPage: 9, countAll: 0, curPage: 1 }

	//state = { name: 'React here!' }
	async handleBtn(e) { 

    e && e.preventDefault();

		const {data} = await axios.get(addToPathSrvQry + '/qry');

    //console.log( data.length )

    this.setState( { data: data, countAll: data.length } );

    //alert( data );
	    
		//this.setState( { name: data } );
		//this.props.dispatch( { type: 'CNGE_NAME', payload: data } );
    window.rrr = this.state;

	}

  componentDidMount() {

    this.handleBtn();

    const h = window.height;
    const w = window.width;

    console.log( w, h );
    
  }

	render() {

    const w = window.width;

    let group = []

        let i, k, j = Math.trunc(this.state.countAll/this.state.countOnPage) + (this.state.countAll%this.state.countOnPage === 0 ? 0:1);

        for(k = 1; k <= j; k++) {

          let tmp = [];

          for(let r = (k-1)*this.state.countOnPage ; r < (k-1)*this.state.countOnPage + this.state.countOnPage; r++) { 

            if (this.state.data[r]) {
              tmp.push(
                <div key={r} className='p-2'>
                  <img src={this.state.data[r].guid_picture} style={{ maxHeight: '85px'}} />
                </div>)
                } 
            }

          //tmp = $(tmp);


          group.push(<div key={k} className='d-flex justify-content-between flex-wrap' style={{ border: '0.5px solid blue', minWidth:'320px'}} >

                  {tmp}
                
                </div>);
          }

    return (

	  	<div className='p-2 position-relative' style={{ height: '100vh', width: '100vw'}}>

          <TabsMobile />

          { this.state.data.length === 0 ? null : 
            
            <div className='container d-flex' style={{marginTop: '85px'}}>
                
                { 

                    group

                }

            </div>

          }

      </div>
	   );
	 }
};

export default connect(mapStateToProps)(App);


//<p className='ml-2'>{rec.name}</p>
