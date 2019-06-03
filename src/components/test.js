import React from "react";

import { Button, Container, Navbar, Nav, NavDropdown, Image, Tabs, Tab } from 'react-bootstrap';

import {blueColorMf, greyColorMf} from '../constants/index'

class TabsMobile extends React.Component {

	render() {

		//console.log( blueColorMf )

		const styleSquare = { width: '50px', height: '50px', borderRadius: '15px', border: `2px solid ${ blueColorMf }` } 

		const lnHght = '45px';

		const styleSqName = { lineHeight: `${ lnHght }`, fontWeight: 'bold', color: `${ greyColorMf }`  };
	  
    return (

    	<div className = 'fixed-top' style={{ backgroundColor: 'white' }}>

	    	<div className = 'mt-2 d-flex w-100 justify-content-around'>
	    		<div className='m-1' style={ styleSquare }>
	    			<p className='text-center' style={ {...styleSqName, fontWeight: 'bold'} }>N</p>
	    		</div>
	    		<div className='m-1' style={ styleSquare }>
	    			<p className='text-center' style={ styleSqName }>A</p>
	    		</div>
	    		<div className='m-1' style={ styleSquare }>
	    			<p className='text-center' style={ styleSqName }>G</p>
	    		</div>
	    		<div className='m-1' style={ styleSquare }>
	    			<p className='text-center' style={ styleSqName }>O</p>
	    		</div>
	    		<div className='m-1' style={ styleSquare }>
	    			<p className='text-center' style={ styleSqName }>C</p>
	    		</div>
	    	</div>

	    	 <div className='mt-3' style={{ borderBottom: `2px solid ${ blueColorMf }` }}/>

    	 </div>



	   );
	 }
};



//const expTabMob = { TabsMobile, TabsMobile1 }

export default TabsMobile;

