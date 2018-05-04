import React, { Component } from 'react';
import { func, array } from 'prop-types';
import StepFooter from './step-footer';
import StepButton from './step-button';
import StepsFormSection from './form/steps-form-section';
import FieldsRow from './form/field-row';
import { getGenders } from '../../../utils/store-getters';
import FieldContainer from '../../common/field-container/field-container';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import DateInput from '../../common/sw-date-picker/sw-date-picker';
import {NAME, PHONE, EMAIL, GENDER, BIRTHDATE} from './form/field-config';

const getOptions = (data, valueProp, textProp) => {
  return data.map(d => {
    const value = d[valueProp];
    const text = d[textProp];
    return {
      value,
      text
    };
  });
};

class Step1 extends Component {
  render() {
    return (
      <div className="user-info-form__step step-1">
        <StepsFormSection>

          <FieldsRow>
            { this.props.getInputField({fieldName: NAME, placeholder: 'Full Name'}) }
            { this.props.getInputField({fieldName: PHONE, placeholder: 'Phone Number'}) }
          </FieldsRow>
          <FieldsRow>
            { this.props.getInputField({fieldName: EMAIL, placeholder: 'Email Address', type: 'email'}) }
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={ this.props.showError }
                            errorText={ this.props.getErrorText(GENDER) }>
              <Dropdown placeholder='Gender'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(this.props.genders, 'subcategory', 'friendly_sub_name')}
                        defaultValue=""
                        onChange={ this.props.handleDropdownChanged(GENDER) }/>
            </FieldContainer>
          </FieldsRow>
          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={ this.props.showError }
                            errorText={ this.props.getErrorText(BIRTHDATE) }>
              <DatePicker
                locale="en-gb"
                customInput={ <DateInput value={ this.props.formFields[BIRTHDATE] }/>}
                className="input-field"
                calendarClassName="sw-date-picker"
                onChange={this.props.handleDateChange(BIRTHDATE)}
                selected={this.props.formFields[BIRTHDATE]}/>
            </FieldContainer>
          </FieldsRow>

          <StepFooter>
            <StepButton text="Next" onClick={ this.props.submitForm }/>
          </StepFooter>
        </StepsFormSection>
      </div>
    );
  }
}
Step1.propTypes = {
  gotoNextStep: func,
  genders: array
};

const mapStateToProps = (state) => {
  return {
    genders: getGenders(state)
  };
};
export default connect(mapStateToProps)(Step1);
