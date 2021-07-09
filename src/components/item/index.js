import React from 'react';

const Item = (props) => {
  const classItens =
    'list-group-item list-group-item-action' +
    (props.dark ? ' list-group-item-dark' : '');

  return (
    <a href="/" className={classItens}>
      {props.children}
    </a>
  );
};

export default Item;
