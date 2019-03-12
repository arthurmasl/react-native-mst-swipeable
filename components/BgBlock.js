import React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { css } from 'styled-components';
import colors from '../utils/colors';
import { withRouter } from 'react-router-native';

export const BgBlockWrapper = styled.View`
  height: 250px;
  background-color: ${colors[0]};

  flex-direction: row;
  justify-content: space-around;

  padding: 30px 2.5%;
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

const BgBlock = ({ store, history }) => {
  return (
    <BgBlockWrapper>
      {store.featuredItems.map(item => (
        <Item
          activeOpacity={0.8}
          key={item.id}
          bg={item.bg}
          onPress={() => {
            history.push('/item');
            store.setCurrentItem(item.id);
          }}
        />
      ))}
    </BgBlockWrapper>
  );
};

export default withRouter(inject('store')(observer(BgBlock)));
