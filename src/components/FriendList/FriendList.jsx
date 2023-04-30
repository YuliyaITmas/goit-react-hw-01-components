import PropTypes from 'prop-types';
import { Friend } from '../Friend/Friend';
import { FriendListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendListWrapper>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <Friend key={id} avatar={avatar} isOnline={isOnline} name={name} />
    ))}
  </FriendListWrapper>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired
};
