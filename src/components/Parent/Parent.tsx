import { useState } from 'react'
import Child from '../Child/Child';
import styled from 'styled-components';

const ParentContainer = styled.div`
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

  p {
    margin: 10px;
    font-size: 2rem;
  }
`;

const Parent = () => {
    const [number, setNumber] = useState<number>(0);

    const incrementNumber = () => {
      setNumber(number + 1);
    };
  
    return (
      <ParentContainer>
        <p>{number}</p>
        <Child incrementNumber={incrementNumber} />
      </ParentContainer>
    );
  };


export default Parent
