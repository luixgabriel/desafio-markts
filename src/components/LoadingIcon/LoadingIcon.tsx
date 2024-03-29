import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 0.25rem solid transparent;
  border-top-color: #f09431;  
  border-bottom-color: #f09431;
  border-radius: 9999px;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Loading;
