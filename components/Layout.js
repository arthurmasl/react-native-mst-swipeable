import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Header from '../components/Header';
import Main from '../screens/Main';
import Item from '../screens/Item';

const LayoutWrapper = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

const Container = styled.View`
  flex: 1;
`;

const Layout = ({ main }) => {
  return (
    <NativeRouter>
      <LayoutWrapper>
        <StatusBar hidden />

        <Header />

        <Container>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/item" component={Item} />
          </Switch>
        </Container>
      </LayoutWrapper>
    </NativeRouter>
  );
};

export default Layout;
