import styled from '@emotion/styled';


export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
  padding: 10px 70px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#3fba22' : '#ff3547')};
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
  border-radius: 50%;
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-weight:600;
`;
