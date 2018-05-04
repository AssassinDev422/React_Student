import React, { Component } from 'react';
import { func } from 'prop-types';
import StepFooter from './step-footer';
import StepButton from './step-button';

export default class Step2 extends Component {
  render() {
    return (
      <div className="user-info-form__step">
        <StepFooter>
          <StepButton text="Previous" onClick={ this.props.gotoPreviousStep }/>
          <StepButton text="Next" onClick={ this.props.gotoNextStep }/>
        </StepFooter>
      </div>
    );
  }
}
Step2.propTypes = {
  gotoPreviousStep: func,
  gotoNextStep: func
};
