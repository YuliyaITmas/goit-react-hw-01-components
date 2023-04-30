import styled from '@emotion/styled';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const StatisticsCard = styled.section`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  // margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  // margin-bottom: 30px;
  text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.2);
`;

export const StatList = styled.ul`

  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  padding:24px;
  padding-bottom:0;

`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap:4px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding:8px 0;
  width: 100%;
  height: 100%;
  background-color: ${stats => getRandomHexColor(stats.id)}
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const Percentage = styled.span`
  font-size: 16px;
  font-weight:600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
