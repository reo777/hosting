import React, {useState, useMemo} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Input, Button} from 'rsuite';

import List from './List';
import Title from './Title';

export default function App() {
  const {reset, control, handleSubmit} = useForm();

  return (
    <div>
      <Title />
      <List />
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
    </div>
  );
}
