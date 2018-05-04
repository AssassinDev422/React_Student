import React, { Component } from 'react';
import PageHeader from '../common/page-header/page-header';
import Banner from './banner/banner';
import AppFeatures from './app-features/app-features';
import HowItWorks from './how-it-works/how-it-works';
import OpportunityForAll from './opportunity-for-all/opportunity-for-all';
import Testimonials from './testimonials/testimonials';
import GettingStarted from './getting-started/getting-started';
import LandingFooter from '../common/page-footer/page-footer';
import Divider from '../common/divider';

import './landing-page.css';

class App extends Component {
  render () {
    return (
      <div className="landing-page">
        <PageHeader/>
        <Banner/>
        <AppFeatures/>
        <Divider backgroundColor="#f3f3f3" />

        <HowItWorks/>
        <OpportunityForAll/>
        <Testimonials/>
        <GettingStarted/>
        <LandingFooter/>

        <Divider height={4} backgroundColor="#8dc449" />
      </div>
    );
  }
}

export default App;
