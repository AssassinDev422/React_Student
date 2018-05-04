import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SubmitButton from '../../common/button/button-types/submit-button';
import FacebookButton from '../../common/button/facebook-button';
import InputField from '../../common/input-field/input-field';
import SignupLoginText from '../auth-modal/signup-login-text';
import AuthFormTitle from '../auth-modal/auth-form-title';
import { ruleRunner, run } from '../../../utils/validation/validation';
import { minLength, required } from '../../../utils/validation/validators';
import { connect } from 'react-redux';
import { displaySignupModal } from '../../../actions/authModal';

const EMAIL = 'email';
const PASSWORD = 'password';

const runners = [
  ruleRunner('email', 'Email Address', required),
  ruleRunner('password', 'Password', required, minLength(6))
];
const InputFieldStyle = {
  marginBottom: 10
};

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showError: false,
      formFields: {},
      validationErrors: {}
    };
  }

  handleFieldChanged = field => e => {
    const oldFormFields = this.state.formFields;

    const formFields = {
      ...oldFormFields,
      [field]: e.target.value
    };
    const validationErrors = run(formFields, runners);
    this.setState({
      formFields,
      validationErrors
    });
  };

  getErrorText = (field) => {
    const errors = this.state.validationErrors;
    return errors[field];
  };

  submitForm = (e) => {
    e.preventDefault();
    const errors = run(this.state.formFields, runners);
    this.setState({
      showError: true,
      validationErrors: errors
    });
  };

  redirectToSignup = (e) => {
    this.props.displaySignupModal();
    e.preventDefault();
  }

  render () {
    const classList = classNames(this.props.className);
    return (
      <div className={ classList }>
        <div className="form-box signup-form" style={ { backgroundColor: '#f0f8fd', border: '1px solid #d8e1e6' } }>
          <AuthFormTitle text="Access your Account"/>
          <div style={ { padding: '30px 20px' } }>
            <FacebookButton mode={ this.props.mode }/>
            <SignupLoginText mode={ this.props.mode }/>
            <form noValidate onSubmit={ this.submitForm }>
              <InputField id={ EMAIL }
                          isValidated
                          placeholder="Email Address"
                          style={ InputFieldStyle }
                          showError={ this.state.showError }
                          type="email"
                          onChange={ this.handleFieldChanged(EMAIL) }
                          errorText={ this.getErrorText(EMAIL) }/>
              <InputField id={ PASSWORD }
                          isValidated
                          placeholder="Password"
                          style={ InputFieldStyle }
                          type="password"
                          showError={ this.state.showError }
                          onChange={ this.handleFieldChanged(PASSWORD) }
                          errorText={ this.getErrorText(PASSWORD) }/>
              <SubmitButton text='LOG IN'/>
            </form>
          </div>
        </div>
        <div className="text-gray text-small" style={ { margin: '14px 0' } }>
          Don't have an account? <a href="#" onClick={ this.redirectToSignup }>Sign up</a>
        </div>
      </div>
    );
  }
}
LoginForm.propTypes = {
  displaySignupModal: PropTypes.func,
  mode: PropTypes.string,
  className: PropTypes.string
};
export default connect(null, { displaySignupModal })(LoginForm);
