import React, { Component } from 'react';
import InputField from '../../common/input-field/input-field';
import { run } from '../../../utils/validation/validation';

const StepHOC = (WrappedComponent, runners) => {
  return class extends Component {
    constructor (props) {
      super(props);
      this.state = {
        showError: false,
        formFields: {},
        validationErrors: {}
      };
    }

    displayName = 'StepHOC';

    getErrorText = (field) => {
      const errors = this.state.validationErrors;
      return errors[field];
    };

    hasErrors = (errors) => {
      return Object.keys(errors).length > 0;
    };

    submitForm = () => {
      const errors = run(this.state.formFields, runners);
      this.setState({
        showError: true,
        validationErrors: errors
      });
      if (!this.hasErrors(errors) && this.props.gotoNextStep) {
        this.props.gotoNextStep();
      }
    };

    addValueToState = (field, value) => {
      const oldFormFields = this.state.formFields;

      const formFields = {
        ...oldFormFields,
        [field]: value
      };
      const validationErrors = run(formFields, runners);
      this.setState({
        formFields,
        validationErrors
      });
    };

    handleDropdownChanged = field => (e, data) => {
      this.addValueToState(field, data.value);
    };

    handleInputChanged = field => e => {
      this.addValueToState(field, e.target.value);
    };

    getInputField = ({ fieldName, placeholder, type = 'text' }) => {
      return <InputField id={ fieldName }
                         isValidated
                         placeholder={ placeholder }
                         className="step-input-field"
                         showError={ this.state.showError }
                         type={ type }
                         onChange={ this.handleInputChanged(fieldName) }
                         errorText={ this.getErrorText(fieldName) }/>;
    };

    handleDateChange = field => date => {
      this.addValueToState(field, date);
    };

    render() {
      const passedProps = {
        handleDropdownChanged: this.handleDropdownChanged,
        handleDateChange: this.handleDateChange,
        getInputField: this.getInputField,
        showError: this.state.showError,
        getErrorText: this.getErrorText,
        submitForm: this.submitForm,
        formFields: this.state.formFields
      }
      return (
        <WrappedComponent {...this.props} {...passedProps} />
      )
    }
  }
};
export default StepHOC;
