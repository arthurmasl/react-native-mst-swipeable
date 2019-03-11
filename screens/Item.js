import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';
import { BgBlockWrapper } from '../components/BgBlock';
import TitleBlock from '../components/TitleBlock';
import ContentBlock, { ItemText } from '../components/ContentBlock';
import Heart from '../assets/Heart';

const StyledBgBlockWrapper = styled(BgBlockWrapper)`
  height: 200px;

  ${props =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `};
`;

const StyledItemText = styled(ItemText)`
  padding: 0 5%;
  margin-top: -10px;
  min-height: 60px;
`;

const Item = ({ store }) => {
  const item = store.currentItemView(store.currentItem)[0];

  return (
    <React.Fragment>
      <StyledBgBlockWrapper bg={item.bg} />
      <TitleBlock
        text={item.title}
        heart={
          <TouchableOpacity onPress={() => store.like(item.id)}>
            <Heart fill={item.liked ? '#f00' : '#333'} />
          </TouchableOpacity>
        }
      />
      <StyledItemText>{item.fullText}</StyledItemText>

      <TitleBlock text="Similar items" />
      <ContentBlock similar />
    </React.Fragment>
  );
};

export default inject('store')(observer(Item));
