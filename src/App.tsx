import React, {useState, useMemo} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Input, Button} from 'rsuite';

import List from './List';

export default function App() {
  const {reset, control, handleSubmit} = useForm();
  const [isRender, setIsRender] = useState(false);

  const onSubmit = (data: any, e: any) => {
    setIsRender(!isRender);
    reset({controller: ''});
  };

  return (
    <div>
      <List />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={React.memo(Input)}
          name="controller"
          control={control}
          defaultValue=""
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 20,
            width: 320,
          }}
        />
        <h1 style={{marginLeft: 16}}>
          {isRender ? 'rendered' : 'render agin'}
        </h1>

        <Button
          color="cyan"
          style={{marginLeft: 20, marginBottom: 20, width: 320}}
          type="submit"
        >
          Render
        </Button>
      </form>
    </div>
  );
}
