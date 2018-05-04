import React from 'react';
import BannerFooter from './banner-footer/banner-footer';
import Button from '../../common/button/button';

import './banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="image"></div>
      <div className="banner-text">
        <div className="banner-title text-xxxlarge">
          Get Your Education Fully Paid For with the Click of A Button.
        </div>
        <div className="banner-secondary">
          Our propietary, free platform utilizes machine learning and artificial intelligence (AI) to match students of any age to the best scholarships, financial aid, grants, and much more.
          From Ivy-League universities to local trade schools and online colleges, Student Wallet will do the heavy lifting for you.
        </div>
        <Button text="Get Started" size={ Button.Size.LARGE }/>
      </div>
      <BannerFooter />
    </div>
  );
};

export default Banner;
