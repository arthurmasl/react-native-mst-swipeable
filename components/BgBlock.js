import React from 'react';
import styled, { css } from 'styled-components';
import colors from './colors';
import { withRouter } from 'react-router-native';

export const BgBlockWrapper = styled.View`
  height: 250px;
  background-color: ${colors[0]};

  flex-direction: row;
  justify-content: space-around;

  padding: 30px 5%;
`;

const Item = styled.TouchableOpacity`
  /* flex: 1; */
  width: 100px;
  background-color: ${props => props.bg};
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  ${props =>
    props.center &&
    css`
      margin: 0 10px;
    `};
`;

const BgBlock = ({ history }) => {
  return (
    <BgBlockWrapper>
      <Item bg={colors[1]} onPress={() => history.push('/item')} />
      <Item bg={colors[2]} center onPress={() => history.push('/item')} />
      <Item bg={colors[3]} onPress={() => history.push('/item')} />
    </BgBlockWrapper>
  );
};

export default withRouter(BgBlock);
