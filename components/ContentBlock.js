import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-native';

import styled, { css } from 'styled-components';
import SwipeableViews from 'react-swipeable-views-native';

const ContentBlockWrapper = styled.View`
  flex: 4;
  flex-direction: row;
  padding: 0px 5% 0px 5%;
`;

const ItemWrapper = styled.View`
  height: 100%;
  padding-right: 20px;
`;

const ItemInner = styled.TouchableOpacity`
  height: 100%;
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
  max-width: 33.33%;
  overflow: visible;
`;

const ClickBlocker = styled.TouchableOpacity`
  height: 100%;
  width: 20px;
  position: absolute;
  right: 0;
  z-index: 1000;
`;

const Item = ({ title, text, bg, onPress }) => {
  return (
    <ItemWrapper>
      <ClickBlocker />
      <ItemInner onPress={onPress} activeOpacity={1}>
        <ItemPic bg={bg} />
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemText>{text}</ItemText>
        </ItemContent>
      </ItemInner>
    </ItemWrapper>
  );
};

const ContentBlock = ({ history, store, similar }) => {
  const items = similar ? store.similarItems : store.objectsItems;

  return (
    <ContentBlockWrapper>
      <Swiper hysteresis={0.3} resistance>
        {items.map(item => (
          <Item
            key={item.id}
            {...item}
            onPress={() => {
              history.push('/item');
              store.setCurrentItem(item.id);
            }}
          />
        ))}
      </Swiper>
    </ContentBlockWrapper>
  );
};

export default withRouter(inject('store')(observer(ContentBlock)));
