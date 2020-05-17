import React from 'react';
import classNames from 'classnames';

import './index.scss';

const Item: React.FC<any> = (props) => {
  return (
    <button
      onClick={() => {
        console.log(props.flag);

        props.setItems(
          props.items.map((target: any) => {
            if (target.id === props.id) {
              return {
                id: target.id,
                name: target.name,
                flag: !target.flag,
              };
            }
            return target;
          })
        );
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
