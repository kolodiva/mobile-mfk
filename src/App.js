import React, { useState, useEffect  } from "react";

import { addToPathSrvQry, greyColor } from './constants'

import { connect } from 'react-redux';

import TabsMobile from './components/test'

import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { autoPlay }   from 'react-swipeable-views-utils';

//import { Pagination } from 'react-native-snap-carousel';
import Pagination from './components/Pagination';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { makeStyles }         from '@material-ui/core/styles';
import BottomNavigation       from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon    from '@material-ui/icons/Restore';
import FavoriteIcon   from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon       from '@material-ui/icons/Home';
import NomenklIcon    from '@material-ui/icons/ViewHeadline';
import CourtIcon      from '@material-ui/icons/ChildFriendly';


import {blueColorMf, greyColorMf} from './constants/index'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative'
  },
  tabs: {
    background: '#fff',
  },
  slide: {
    display: 'flex', 
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 15,
    minHeight: 100,
    color: '#fff',
    minHeight: '70vh',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function App() {

	//state = { name: 'React here!' }
  const [ index, setIndex ] = useState(0);
  
  const handleChange = (event, value) => {
    setIndex(value);
  }

  const handleChangeIndex = (index) => {
    setIndex(index);
  }


  const Qd = () => {return <div className='m-1' style={{ height: '100px', width: '100px', backgroundColor: 'white' }}></div>}

  return (

  <div style={styles.root}>

        <Tabs value={index} variant="fullWidth" onChange={ handleChange } style={styles.tabs}>
          <Tab label='' icon={<HomeIcon />} />
          <Tab label="" icon={<NomenklIcon />} />
          <Tab label="" icon={<CourtIcon />} />
        </Tabs>

        <SwipeableViews  resistance enableMouseEvents index={index} onChangeIndex={ handleChangeIndex }>
          <div className='' style={Object.assign({}, styles.slide, styles.slide1,)}>
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
          </div>
          
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
          </div>
          
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
              <Qd />  
          </div>

        </SwipeableViews>
        <Pagination dots={3} index={index} onChangeIndex={ handleChangeIndex } />
      </div>
     );


	

};

export default connect(mapStateToProps)(App);



