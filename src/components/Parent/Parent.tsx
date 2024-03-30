import { useState } from 'react'
import Child from '../Child/Child';

const Parent = () => {
    const [number, setNumber] = useState<number>(0);

    const incrementNumber = () => {
      setNumber(number + 1);
    };
  
    return (
      <div>
        <Child incrementNumber={incrementNumber} parentNumber={number} />
      </div>
    );
  };


export default Parent
