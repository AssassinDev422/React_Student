import React from 'react';
import PropTypes from 'prop-types';
import { AppLogo } from '../app-logo/app-logo';
import classNames from 'classnames';
import {FACEBOOK_URL, TWITTER_URL} from '../../../constants/urls';
import './page-footer.css';

const TextWithIcon = ({ iconClass, children }) => {
  const iconClassList = classNames('fa', iconClass);
  return (
    <div className="text-with-icon">
      <i className={ iconClassList }></i>
      { children }
    </div>
  );
};
TextWithIcon.propTypes = {
  iconClass: PropTypes.string,
  children: PropTypes.node
};

const LandingFooter = () => {
  return (
    <div className="landing-footer">
      <div className="landing-footer-content container">
        <div className="landing-footer-columns">
          <div className="landing-footer__column">
            <div className="landing-footer__column-title">
              <AppLogo isWhite/>
            </div>
            <div className="landing-footer__column-content">
              StudentWallet helps students of any age find the best scholarships for college, university, trade school, and any other post-secondary opportunity.
            </div>
          </div>
          <div className="landing-footer__column">
            <div className="landing-footer__column-title">
              <div>Say Hello!</div>
            </div>
            <div className="landing-footer__column-content">
              <TextWithIcon iconClass="fa-map-marker fa-lg">
                <div>
                  <div><a href="/">StudentWallet.org</a></div>
                  <div>4340 E. Indian School Rd.</div>
                  <div>Suite #21-216</div>
                  <div>Phoenix, Arizona 85018</div>
                </div>
              </TextWithIcon>
              <TextWithIcon iconClass="fa-envelope">
                <div>hello@studentwallet.org</div>
              </TextWithIcon>
            </div>
          </div>
          <div className="landing-footer__column stay-connected">
            <div className="landing-footer__column-title">
              <div>Stay Connected</div>
            </div>
            <div className="landing-footer__column-content">
              <div className="social-icons">
                <a href={FACEBOOK_URL}><i className="fa fa-facebook"></i></a>
                <a href={TWITTER_URL}><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-footer__copyright text-center text-normal">
          © 2017 Student Wallet. All Rights Reserved.
        </div>
        <div className="landing-footer__bottom-links text-center text-medium">
          <ul>
            <li>Partner with us</li>
            <li>Job opportunities</li>
            <li>Terms & Condiditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LandingFooter;
