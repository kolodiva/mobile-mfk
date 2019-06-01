import React from "react";

import { Button, Container, Navbar, Nav, NavDropdown, Image, Tabs, Tab } from 'react-bootstrap';

class TabsMobile extends React.Component {

	render() {
	  
    return (

    	<div className = 'fixed-top' style={{ backgroundColor: 'white' }}>

    	<div className = 'mt-2 d-flex w-100 justify-content-around'>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>НОМ</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>AMBA</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>YOU</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>CUt</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>ING</p>
    		</div>
    	</div>

    	 <div className='mt-3' style={{ borderBottom: '1px solid red' }}/>

    	 </div>



	   );
	 }
};


class TabsMobile1 extends React.Component {

	render() {
	  
    return (


    	<div className = 'd-flex w-100 justify-content-around position-absolute'>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>yyY</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>N</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>N</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>N</p>
    		</div>
    		<div className='m-1' style={{ width: '50px', height: '50px', borderRadius: '10px', border: '1px solid red' }}>
    			<p className='text-center' style={{ lineHeight: '50px' }}>N</p>
    		</div>
    	</div>


	   );
	 }
};

//const expTabMob = { TabsMobile, TabsMobile1 }

export default TabsMobile;

