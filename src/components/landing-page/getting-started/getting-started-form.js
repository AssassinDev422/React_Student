import React from 'react';
import Button from '../../common/button/button';
import './getting-started-form.css';

const GettingStartedForm = () => {
  return (
    <div className="getting-started-form">
      <Button size={ Button.Size.MEDIUM }
              text="Get Started" />
    </div>
  );
};
export default GettingStartedForm;
