import { ruleRunner } from '../../../../utils/validation/validation';
import { required } from '../../../../utils/validation/validators';

export const NAME = 'name';
export const PHONE = 'phone';
export const EMAIL = 'email';
export const GENDER = 'gender';
export const BIRTHDATE = 'birthdate';

export const step1Runners = [
  ruleRunner(NAME, 'Name', required),
  ruleRunner(GENDER, 'Gender', required),
  ruleRunner(PHONE, 'Phone Number', required),
  ruleRunner(EMAIL, 'Email Address', required),
  ruleRunner(BIRTHDATE, 'Birth Date', required)
];
