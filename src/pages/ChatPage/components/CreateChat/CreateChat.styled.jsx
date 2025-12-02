import styled from "styled-components";

export const CreateChatContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CreateChatContent = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  /* from 768px */
  @media (min-width: 768px) {
    height: 500px;
    width: 400px;
    border-radius: 8px;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 16px;
  }
`;

export const CreateChatFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  height: 68px;
`;

export const ButtonCancel = styled.button`
  padding: 0.5rem;
  font-size: 16px;
`;

export const ButtonDelete = styled.button`
  padding: 0.5rem;
  font-size: 16px;
  color: #ff3b30;
`;

export const CreateChatHeader = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
`;

export const ArrowBack = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #4c4c4c;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InputStyle = styled.input`
  //   background-color: #f5f6fa;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: 0.2s;
  height: 48px;

  &:focus {
    border-color: #8a5cff;
    outline: none;
    background-color: #fff;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

export const CreateButtonStyle = styled.button`
  padding: 1rem;
  background-color: #1570ef;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border-radius: 8px;
  border: 1px solid #1570ef;
  line-height: 90%;
  width: 100%;
  height: 44px;
`;
