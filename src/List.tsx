import React, {memo, useState} from 'react';

import Item from './Item';

const List: React.FC<any> = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const dummies = Array.apply(0, Array(10)).map((x, y) => ({
    name: Number(y + 1),
    id: Number(y + 1),
    flag: false,
  }));

  return (
    <div className="w__list">
      {dummies.map((dummy: any, index: number) => {
        return (
          <Item
            key={dummy.id}
            name={dummy.name}
            flag={dummy.flag}
            dummies={dummies}
          />
        );
      })}
    </div>
  );
};

export default memo(List);
