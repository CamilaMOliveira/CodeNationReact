import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {

  function myTest() {
    console.log('Test bla');
    return(<Loading></Loading>)
    // setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    //   console.log('Test ble');
    //   return(<div>Div</div>);
    // }, 2000)
  }

  myTest();
  return (
    <div data-testid="feed-route">
      <Stories/>
      
      <Posts/>
    </div>
  );
};

export default FeedRoute;
