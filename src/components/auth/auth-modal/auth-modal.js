import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';
import './auth-modal.css';
import LoginForm from '../login/login-form';
import SignupForm from '../signup/signup-form';
import LoginFormInfo from '../login/login-form-info';
import { SIGNUP_MODE } from '../../../constants/signup-modes';
import AuthModalBody from './auth-modal-body';
export default class AuthModal extends React.Component {
  getSections = () => {
    if (this.props.mode === SIGNUP_MODE) {
      return (
        <AuthModalBody>
          <LoginFormInfo className="signup-modal__content"/>
          <SignupForm className="signup-modal__form-section" mode={this.props.mode}/>
        </AuthModalBody>
      );
    } else {
      return (
        <AuthModalBody>
          <LoginFormInfo className="signup-modal__content"/>
          <LoginForm className="signup-modal__form-section" mode={this.props.mode}/>
        </AuthModalBody>
      );
    }
  }

  render () {
    const classList = classNames('rm-modal rm-modal__signup');
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
        overlayClassName="rm-overlay"
        contentLabel="Auth Modal"
        className={ classList }>
        { this.getSections() }
      </Modal>
    );
  };
}

AuthModal.propTypes = {
  mode: PropTypes.string,
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func
};
