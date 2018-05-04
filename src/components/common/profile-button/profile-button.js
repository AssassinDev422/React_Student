import React from 'react';
import { func, object } from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../../../actions/auth';
import { hideHeaderLinks } from '../../../actions/header-links-visibility';
import {getUser, getUserName} from '../../../utils/store-getters';
import './profile-button.css';
import {ROUTES} from '../../../constants/routes';

class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksDisplayed: false
    };
  }
  logout() {
    this.props.logout();
    this.props.push(ROUTES.ROOT);
  }

  redirectTo = (path) => () => {
    this.props.push(path);
    this.props.hideHeaderLinks();
  };

  showLinks = () => {
    this.toggleLinks(true);
  }
  hideLinks = () => {
    this.toggleLinks(false);
  }

  toggleLinks = show => {
    const newValue = typeof show === 'boolean' ? show : !this.state.linksDisplayed;
    this.setState({
      linksDisplayed: newValue
    });
  }

  getimage = () => {
    if (this.props.user.user_img) {
      const imageUrl = `url(${this.props.user.user_img})`;
      return (<div className="profile-image" style={{ backgroundImage: imageUrl }}></div>);
    }
    return (<div className="profile-image profile-image__default-user"></div>);
  }

  render() {
    const linkClass = classnames('profile-links', { 'show': this.state.linksDisplayed });
    const fullName = getUserName(this.props.user);
    return (
      <div className="profile-button-section" onMouseOver={ this.showLinks } onTouchStart={ this.toggleLinks }
           onMouseOut={ this.hideLinks }>
        <div className="profile-button">
          <div className="user-name">{ fullName }</div>
          { this.getimage() }
        </div>
        <ul className={ linkClass }>
          <li className="dashboard-link" onClick={ this.redirectTo(ROUTES.DASHBOARD) }>
            <div className="text-content">Dashboard</div>
          </li>
          <li onClick={ this.props.logout }>
            <div className="text-content">Logout</div>
          </li>
        </ul>
      </div>
    );
  }
}

ProfileButton.propTypes = {
  logout: func,
  push: func,
  hideHeaderLinks: func,
  user: object
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state)
  };
};
const mapDispatchToProps = { push, logout, hideHeaderLinks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileButton);
