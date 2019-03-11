import React from 'react';
import styled from 'styled-components';

const TitleBlockWrapper = styled.View`
  height: 70px;
  padding-left: 5%;
  justify-content: center;
  background-color: #f9f9f9;
`;

const TitleText = styled.Text`
  font-size: 20px;
`;

const TitleBlock = ({ text }) => {
  return (
    <TitleBlockWrapper>
      <TitleText>{text}</TitleText>
    </TitleBlockWrapper>
  );
};

export default TitleBlock;
