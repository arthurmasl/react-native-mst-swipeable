import React from 'react';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';

import LikedItem from './LikedItem';
import TitleBlock from './TitleBlock';

const NavBarWrapper = styled.ScrollView`
  background-color: #f0f0f0;

  padding: 0 5%;
`;

const Input = styled.TextInput`
  margin-left: 5%;
`;

const TagsBlock = styled.View`
  flex-direction: row;
  padding: 0 5%;
  margin-bottom: 20px;
`;

const TagWrapper = styled.TouchableOpacity`
  background-color: ${props => props.bg};
  width: 30px;
  height: 30px;
  margin-right: 5px;

  border-radius: 50px;

  ${props =>
    props.active &&
    css`
      border: 2px solid #333;
      opacity: 1;
    `};
`;

const NavBarEnableScroll = styled.TouchableOpacity``;

const Tag = ({ bg, active, changeState }) => {
  return (
    <TagWrapper
      bg={bg}
      active={active}
      onPress={changeState}
      activeOpacity={1}
    />
  );
};

const NavBar = ({ store }) => {
  const removeLike = id => {
    setTimeout(() => {
      store.like(id);
    }, 250);
  };

  return (
    <NavBarWrapper scrollEnabled={store.scroll}>
      <TitleBlock text="Tags" />
      <TagsBlock>
        {store.tags.map(item => (
          <Tag
            key={item.color}
            bg={item.color}
            active={item.isActive}
            changeState={() => store.changeTagState(item.color)}
          />
        ))}
      </TagsBlock>

      {store.filteredByTag.map(item => (
        <LikedItem
          key={item.id}
          {...item}
          forLike
          handleChange={() => removeLike(item.id)}
          handleSwipe={i => i > 0.04 && store.changeScroll(false)}
          handleSwipeEnd={() => store.changeScroll(true)}
        />
      ))}

      {/* <TitleBlock text="Search" />
            <Input placeholder="Type here to find some fancy things..." /> */}

      <TitleBlock
        text={
          store.likedItems.length ? 'Your Favorites' : 'Favorites list is empty'
        }
      />

      {store.likedItems.map(item => (
        <LikedItem
          key={item.id}
          {...item}
          handleChange={() => removeLike(item.id)}
        />
      ))}
    </NavBarWrapper>
  );
};

export default inject('store')(observer(NavBar));
