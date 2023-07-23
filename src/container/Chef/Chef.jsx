import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef-image"></img>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote-img'></img>
          <p className='p__opensans'>Kevin's the excuetive chef.</p>
        </div>
        <p className='p__opensans'>His appreciation of nature’s diversity and his endless experimentation in the kitchen and garden are the driving forces in his cooking. Kevin leads the Gericht team with a focus on excellence, innovation and hospitality.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Excuetive Chef</p>
        <img src={images.sign} alt='sign-img'></img>
      </div>
    </div>
  </div>
);

export default Chef;