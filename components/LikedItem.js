import React from 'react';
import styled, { css } from 'styled-components';
import SwipeableViews from 'react-swipeable-views-native';

const LikedItemWrapper = styled(SwipeableViews)`
  background-color: #fff;
  height: 100px;
  margin-bottom: 15px;
  /* flex-direction: row; */
  border-radius: 10px;
  /* overflow: hidden; */

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ItemContent = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Pic = styled.View`
  flex: 1;
  background-color: ${props => props.bg};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Content = styled.View`
  flex: 2;
  padding: 15px;
`;

const Title = styled.Text`
  font-weight: bold;
`;

const Text = styled.Text`
  margin-top: 5px;
  color: gray;
  font-weight: 300;
`;

const Unlike = styled.View`
  background-color: #f1706a;
  flex: 1;
  justify-content: center;
  padding-left: 20px;

  ${props =>
    props.forLike &&
    css`
      background-color: #88d8b0;
    `};
`;

const UnlikeText = styled.Text`
  color: #fff;
  font-size: 30px;
`;

const LikedItem = ({
  title,
  bg,
  text,
  handleChange,
  handleSwipe,
  handleSwipeEnd,
  forLike,
  liked
}) => {
  return (
    <LikedItemWrapper
      onChangeIndex={handleChange}
      index={forLike && liked ? 1 : 0}
      onSwitching={i => handleSwipe(i)}
      onTransitionEnd={handleSwipeEnd}
      hysteresis={0.9}
    >
      <ItemContent>
        <Pic bg={bg} />

        <Content>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Content>
      </ItemContent>

      <Unlike forLike={forLike}>
        <UnlikeText>{!forLike ? 'Unlike :(' : 'Like :)'}</UnlikeText>
      </Unlike>
    </LikedItemWrapper>
  );
};

export default LikedItem;
