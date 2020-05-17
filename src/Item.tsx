import React from 'react';
import classNames from 'classnames';

import './index.scss';

const Item: React.FC<any> = (props) => {
  return (
    <button
      onClick={() => {
        props.dummies.map((element: any) => {
          if (element.key === props.i) {
            console.log(element);
            element.flag = !element.flag;
          }
        });
      }}
    >
      <li
        key={props.id}
        className={classNames('color', {selected: props.flag})}
      >
        {props.name}
      </li>
    </button>
  );
};

export default Item;
