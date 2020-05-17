import React, {useState} from 'react';
import {Button} from 'rsuite';

const Title: React.FC<any> = (props) => {
  const [isRender, setIsRender] = useState(false);

  const onSubmit = () => {
    setIsRender(!isRender);
  };

  return (
    <>
      <h1 style={{marginLeft: 16}}>{isRender ? 'rendered' : 'render agin'}</h1>
      <Button
        color="cyan"
        style={{marginLeft: 20, marginBottom: 20, width: 320}}
        onClick={() => {
          onSubmit();
        }}
      >
        Render
      </Button>
    </>
  );
};

export default React.memo(Title);
