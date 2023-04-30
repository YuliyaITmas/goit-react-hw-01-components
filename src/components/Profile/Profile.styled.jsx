import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  padding:20px;

`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 500;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 0, 0, 0.5);

`;
export const Location = styled.p`
  font-size: 16px;
  font-weight: 400;
`;


export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 16px 0 0 0;
  gap: 30px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
