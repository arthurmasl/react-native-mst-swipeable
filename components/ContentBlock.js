import React from 'react';
import { inject, observer } from 'mobx-react';

import styled, { css } from 'styled-components';
import SwipeableViews from 'react-swipeable-views-native';

const ContentBlockWrapper = styled.View`
  flex: 4;
  flex-direction: row;
  padding: 0px 5% 0px 5%;
`;

const ItemWrapper = styled.View`
  width: 100px;
  height: 220px;
  margin-right: 20px;
`;

const ItemPic = styled.View`
  flex: 1;
  background-color: ${props => props.bg};
  border-radius: 5px;
`;

const ItemContent = styled.View`
  flex: 1;
  padding-top: 20px;
`;

const ItemTitle = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemText = styled.Text`
  color: gray;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const Swiper = styled(SwipeableViews)`
  max-width: 115px;
  overflow: visible;
`;

const Item = ({ title, text, bg }) => {
  return (
    <ItemWrapper>
      <ItemPic bg={bg} />
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>
      </ItemContent>
    </ItemWrapper>
  );
};

const ContentBlock = ({ store }) => {
  return (
    <ContentBlockWrapper>
      <Swiper hysteresis={0.3} resistance>
        {store.items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </Swiper>
    </ContentBlockWrapper>
  );
};

export default inject('store')(observer(ContentBlock));
