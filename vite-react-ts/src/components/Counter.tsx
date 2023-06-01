import { useState } from "react";
import {Button, Stack} from '@mui/material'

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Stack direction='column' spacing={1} justifyContent='center' alignItems='center' mt={2}>
      <h3>{count}</h3>
      <Stack direction='row' spacing={1}>
      <Button
        variant="contained"
        color='success'
        size='small'
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increase
      </Button>

      <Button
      variant="contained"
      color='error'
      size='small'
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrease
      </Button>
      </Stack>
    </Stack>
  );
};
