import React from 'react';
import Card from '../card/card';
import CircleImage from '../circle-image/circle-image';
import userImage from '../../../assets/images/user_placeholder.png';
import Divider from '../divider';
import PropTypes from 'prop-types';
import './user-card.css';
import { getUserName } from '../../../utils/store-getters';

const marginStyle = {
  margin: '25px 20px 0 20px',
  textAlign: 'left',
  lineHeight: 1.3
};

const UserCard = ({ user }) => {
  const { user_img, user_email } = user;
  const fullName = getUserName(user);
  return (
    <Card>
      <div className="text-center">
        <CircleImage src={ user_img || userImage } style={ { marginBottom: 14 } }/>
        <div className="text-normal">{ fullName }</div>
        <div className="text-small text-gray">{ user_email }</div>
{/*
        <Divider height={1} style={ { margin: '20px 0' } }/>
        <div style={ marginStyle } className="text-normal">{ user.location }</div>
        <div style={ marginStyle } className="text-normal">{ user.university }</div>
        <div style={ marginStyle } className="text-normal">{ user.degree }</div>
*/}
      </div>
    </Card>
  );
};
UserCard.propTypes = {
  user: PropTypes.object
};
export default UserCard;
