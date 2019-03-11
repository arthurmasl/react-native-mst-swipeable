import React from 'react';
import styled from 'styled-components';
import { BgBlockWrapper } from '../components/BgBlock';
import TitleBlock from '../components/TitleBlock';
import ContentBlock, { ItemText } from '../components/ContentBlock';

const StyledBgBlockWrapper = styled(BgBlockWrapper)`
  height: 200px;
`;

const StyledItemText = styled(ItemText)`
  padding: 0 5%;
  margin-top: -10px;
`;

const Item = props => {
  return (
    <React.Fragment>
      <StyledBgBlockWrapper />
      <TitleBlock text="LEE MON" />
      <StyledItemText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatem dicta laboriosam ad laudantium odio quo delectus ut esse
        deserunt.
      </StyledItemText>

      <TitleBlock text="Similar items" />
      <ContentBlock />
    </React.Fragment>
  );
};

export default Item;
