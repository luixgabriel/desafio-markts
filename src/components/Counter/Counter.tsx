import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const CounterContainer = styled.div`
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterValue = styled.p`
  font-size: 2rem;
`;

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev)=> prev + 1);
  };

  const decrement = () => {
    setCount((prev)=> prev - 1);
  };

  return (
    <CounterContainer>
      <CounterValue>{count}</CounterValue>
      <div>
        <Button onClick={increment}>Incrementar</Button>
        <Button onClick={decrement}>Decrementar</Button>
      </div>
    </CounterContainer>
  );
};

export default Counter;
