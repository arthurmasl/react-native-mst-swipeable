import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const TitleBlockWrapper = styled.View`
  height: 70px;
  padding: 0 5% 0 5%;
  /* background-color: #f9f9f9; */

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 20px;
`;

const TitleBlock = ({ text, heart }) => {
  return (
    <TitleBlockWrapper>
      <TitleText>{text}</TitleText>
      {heart}
    </TitleBlockWrapper>
  );
};

export default TitleBlock;
