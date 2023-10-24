import './App.css';
import { MenuButton } from './components/MenuButton';
import { Box, Center } from '@chakra-ui/react';
import { SorareInput } from './components/SorareInput';

function App() {
  return (
    <Box width={'100vw'}>
      <Center>
        <h1>Vite + React</h1>
      </Center>
      <Center>
        <SorareInput />
      </Center>
      <MenuButton />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Box>
  );
}

export default App;
