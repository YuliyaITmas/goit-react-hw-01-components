import PropTypes from 'prop-types';
import {
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
      return (
        <FriendListItem>
          <FriendStatus isOnline={isOnline} />
          <FriendAvatar src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendListItem>
      );
    };
    
    Friend.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    };
    