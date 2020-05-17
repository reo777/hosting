import React, {memo, useState} from 'react';

import Item from './Item';

const List: React.FC<any> = (props) => {
  const dummies = Array.apply(0, Array(10000)).map((x, y) => ({
    name: Number(y + 1),
    id: Number(y + 1),
    flag: false,
  }));

  const [items, setItems] = useState(dummies);

  return (
    <div className="w__list">
      {items.map((item: any, index: number) => {
        return (
          <Item
            id={item.id}
            name={item.name}
            flag={item.flag}
            setItems={setItems}
            items={items}
          />
        );
      })}
    </div>
  );
};

export default memo(List);
