import React, { Component } from 'react';
import { func } from 'prop-types';
import StepFooter from './step-footer';
import StepButton from './step-button';

export default class Step3 extends Component {
  render() {
    return (
      <div className="user-info-form__step">
        <StepFooter>
          <StepButton text="Previous" onClick={ this.props.gotoPreviousStep }/>
          <StepButton text="Complete" onClick={ this.props.submitForm }/>
        </StepFooter>
      </div>
    );
  }
}
Step3.propTypes = {
  gotoPreviousStep: func,
  submitForm: func
};
