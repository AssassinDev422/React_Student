import React, { Component } from 'react';
import PageHeader from '../common/page-header/page-header';
import PageFooter from '../common/page-footer/page-footer';
import StepHOC from './steps/step-hoc';
import Step1 from './steps/step-1';
import Step2 from './steps/step-2';
import Step3 from './steps/step-3';
import {step1Runners} from './steps/form/field-config';
import StepsBreadcrumb from './steps-breadcrumb/steps-breadcrumb';
import './user-info-form.css';
import './steps/form/form.css';

const steps = ['Personal Details', 'Education Details', 'Social Media'];

export default class UserInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1
    };
  }

  gotoNextStep = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  gotoPreviousStep = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  submitForm = () => {

  };

  getStepComponent = () => {
    switch (this.state.activeStep) {
      case 1: {
        const C = StepHOC(Step1, step1Runners);
        return <C gotoNextStep={this.gotoNextStep}/>;
      }

      case 2: {
        return <Step2 gotoNextStep={this.gotoNextStep} gotoPreviousStep={this.gotoPreviousStep}/>;
      }

      case 3: {
        return <Step3 gotoPreviousStep={this.gotoPreviousStep} submitForm={ this.submitForm }/>;
      }

      default: {
        return null;
      }
    }
  };

  render() {
    return (
      <div className="signup-user-info">
        <PageHeader/>
        <StepsBreadcrumb steps={ steps } activeStep={ this.state.activeStep }/>
        <div className="steps-section">
          { this.getStepComponent() }
        </div>
        <PageFooter/>
      </div>
    );
  }
}
