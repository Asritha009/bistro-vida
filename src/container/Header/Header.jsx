import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Header.css';

const Header = (props) => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Gericht dining experience.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome-img"></img>
    </div>  
  </div>
);

export default Header;