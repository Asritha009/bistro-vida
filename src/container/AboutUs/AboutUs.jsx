import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G-background-overlay"></img>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon__img"></img>
        <p className="p__opensans">Gericht is relaxed, simple and elegant. From the dining room's muted tones and white tablecloths to the ever-changing offerings steeped in traditional flavor pairings and techniques —  it is both a neighborhood restaurant as well as a celebratory destination. Our menu changes daily, featuring seasonal, simple food with influences from all over the world.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about__knife"></img>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon__img"></img>
        <p className="p__opensans">This restaurant was founded in 2021 by a group of friends with a shared passion for food and hospitality. The menu features globally inspired dishes made with locally sourced ingredients in a charming building in the city's historic district. . Despite opening during a pandemic, the restaurant has quickly become popular with a loyal following due to its warm hospitality and delicious food.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;