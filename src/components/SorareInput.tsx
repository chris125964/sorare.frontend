import { Input, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export function SorareInput() {
  const [count, setCount] = useState(0);
  // const [value, setValue] = React.useState('');
  // const handleChange = (event) => setValue(event.target.value);

  return (
    <Stack>
      {/* <Input
        value={value}
        onChange={handleChange}
        variant="filled"
        placeholder="Basic usage"
        width="auto"
        size="sm"
      />
      <Text mb="8px">Value: {value}</Text>{' '} */}
      <button
        data-testid="button.count"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </Stack>
  );
}
