import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de rotação
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Estilo do Loader
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const Loader = () => (
  <LoaderWrapper>
    <Spinner />
  </LoaderWrapper>
);

export default Loader;
