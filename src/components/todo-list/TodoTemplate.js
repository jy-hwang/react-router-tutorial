import React from 'react';

import { createGlobalStyle, styled } from 'styled-components';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
body {
background : #e9ecef;
}
`;

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplateBlock>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplateBlock>
    </TodoProvider>
  );
};

export default TodoTemplate;
