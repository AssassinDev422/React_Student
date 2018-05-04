import React from 'react';
import { string } from 'prop-types';
import Signup from '../auth/auth-modal/auth-modal';
import { connect } from 'react-redux';
import './dashboard-withsignup.css';

class DashboardWithSignup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isModalOpen: true
    };
  }
  render () {
    return (
      <div className="dashboard-with-signup">
        <Signup isModalOpen={ this.state.isModalOpen } mode={ this.props.mode }/>
      </div>
    );
  }
}
DashboardWithSignup.propTypes = {
  mode: string
};
const mapStateToProps = ({ authModal }) => {
  return {
    mode: authModal.mode
  };
};
export default connect(mapStateToProps)(DashboardWithSignup);
