import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import styled from 'styled-components';

const HeaderWrapper = styled.View`
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;
  flex-direction: row;
  /* background-color: #fff; */
`;

const Logo = styled.Text`
  font-weight: bold;
  letter-spacing: 2px;
`;

const HeaderButton = styled.View`
  width: 20px;
  height: 20px;
  justify-content: center;
`;

const Line = styled.View`
  background-color: gray;
  width: 100%;
  height: 3px;
  margin: 2px 0;
  opacity: 0.5;
`;

const Header = ({ history }) => {
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Logo>LOGO</Logo>
      </TouchableOpacity>
      <HeaderButton>
        <Line />
        <Line />
      </HeaderButton>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
