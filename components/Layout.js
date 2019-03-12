import React from 'react';
import styled, { css } from 'styled-components';
import SwipeableViews from 'react-swipeable-views-native';
import { inject, observer } from 'mobx-react';
import { StatusBar } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Header from '../components/Header';
import Main from '../screens/Main';
import Item from '../screens/Item';

import NavBar from './NavBar';

const LayoutWrapper = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

const Container = styled.View`
  flex: 1;
  overflow: hidden;
`;

const Layout = ({ store }) => {
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

          <NavBar />
        </SwipeableViews>
      </LayoutWrapper>
    </NativeRouter>
  );
};

export default inject('store')(observer(Layout));
