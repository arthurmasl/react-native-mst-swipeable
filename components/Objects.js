import React from 'react';
import TitleBlock from './TitleBlock';
import ContentBlock from './ContentBlock';

const Objects = ({ text }) => {
  return (
    <React.Fragment>
      <TitleBlock text="Categories"> </TitleBlock>
      <ContentBlock />
    </React.Fragment>
  );
};

export default Objects;
