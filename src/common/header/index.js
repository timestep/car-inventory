import React from 'react';
import header from '../../assets/header.png';

const style = {
  backgroundImage: `url('${header}')`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 0,
  backgroundPositionY: 0,
  backgroundSize: '100%',
  height: '12rem',
};

export const HeaderComponent = () => (
  <div style={style} />
);
