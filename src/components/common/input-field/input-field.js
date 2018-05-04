import React, { Component } from 'react';
import { string, object, bool, func } from 'prop-types';
import classNames from 'classnames';
import './input-field.css';
import omit from 'lodash.omit';

class InputField extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.initialValue || ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  getErrorContainer = () => {
    if (this.props.isValidated) {
      return (
        <div className="error-container">
          { this.getErrorText() }
        </div>
      );
    }
  };

  getIcon = () => {
    if (this.props.iconClass) {
      const iconClassList = classNames('fa', this.props.iconClass);
      return <label className="icon-container text-large" htmlFor={ this.props.id }>
        <i className={ iconClassList }></i>
      </label>;
    }
  }

  getErrorText = () => {
    if (this.props.showError && this.props.errorText) {
      return <div className="text-error text-left">{ this.props.errorText }</div>;
    }
  };

  render () {
    const { id, placeholder, style, className, ...otherProps } = this.props;
    const inputProps = omit(otherProps, ['isValidated', 'iconClass', 'showError', 'errorText']);
    const hasIcon = this.props.iconClass;
    const classList = classNames('input-field-container', className, {'input-field--no-icon': !hasIcon});
    return (
      <div className={ classList } style={ style }>
        <div className="input-field">
          { this.getIcon() }
          <input {...inputProps}
                 className="text-medium"
                 id={ id }
                 placeholder={ placeholder }
                 onChange={ this.handleChange }/>
        </div>
        {
          this.getErrorContainer()
        }
      </div>
    );
  }
}
InputField.defaultProps = {
  isValidated: false,
  showError: false,
  errorText: '',
  type: 'text'
};
InputField.propTypes = {
  id: string.isRequired,
  style: object,
  placeholder: string,
  iconClass: string,
  className: string,
  initialValue: string,
  isValidated: bool,
  showError: bool,
  errorText: string,
  onChange: func,
  type: string
};

export default InputField;
