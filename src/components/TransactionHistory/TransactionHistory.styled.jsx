import styled from '@emotion/styled';


export const Table = styled.table`
  border-collapse: collapse;
  max-width:100%;
  width: 400px; 
  margin: 0 auto;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 1.4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 12px;
  text-align: center;
  
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
