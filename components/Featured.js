import React from 'react';
import TitleBlock from './TitleBlock';
import BgBlock from './BgBlock';

const Featured = ({ text }) => {
  return (
    <React.Fragment>
      <TitleBlock text="Weekly Featured" />
      <BgBlock />
    </React.Fragment>
  );
};

export default Featured;
