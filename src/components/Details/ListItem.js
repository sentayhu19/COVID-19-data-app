import React from 'react';
import './ListItem.css';

const ListItem = ({ countries }) => (
  <div className='country'>
    <p>{countries}</p>
  </div>
);
export default ListItem;
