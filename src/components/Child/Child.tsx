import styled from "styled-components";
import Button from "../Button/Button";

interface IChildProps {
  parentNumber: number
  incrementNumber: ()=> void
}

const ShieldContainer = styled.div`
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
    font-size: 1.8rem;
  }
  `

const Child = ({incrementNumber, parentNumber}: IChildProps) => {
    return (
        <ShieldContainer>
          <p>{parentNumber}</p>
          <Button onClick={incrementNumber}>Incrementar Número no Child</Button>
        </ShieldContainer>
      );
}

export default Child
