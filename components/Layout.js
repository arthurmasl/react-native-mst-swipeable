import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';
import SwipeableViews from 'react-swipeable-views-native';
import { inject, observer } from 'mobx-react';
import { StatusBar } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Header from '../components/Header';
import Main from '../screens/Main';
import Item from '../screens/Item';
import LikedItem from './LikedItem';
import TitleBlock from './TitleBlock';

const LayoutWrapper = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

const Container = styled.View`
  flex: 1;
  overflow: hidden;
`;

const NavBar = styled.ScrollView`
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

const Layout = ({ store }) => {
  const removeLike = id => {
    setTimeout(() => {
      store.like(id);
    }, 250);
  };

  return (
    <NativeRouter>
      <LayoutWrapper>
        <StatusBar hidden />

        <Header />

        <SwipeableViews disabled index={store.navOpened ? 1 : 0}>
          <Container>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/item" component={Item} />
            </Switch>
          </Container>

          <NavBar>
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
              />
            ))}

            {/* <TitleBlock text="Search" />
            <Input placeholder="Type here to find some fancy things..." /> */}

            <TitleBlock
              text={
                store.likedItems.length
                  ? 'Your Favorites'
                  : 'Favorites list is empty'
              }
            />

            {store.likedItems.map(item => (
              <LikedItem
                key={item.id}
                {...item}
                handleChange={() => removeLike(item.id)}
              />
            ))}
          </NavBar>
        </SwipeableViews>
      </LayoutWrapper>
    </NativeRouter>
  );
};

export default inject('store')(observer(Layout));
