import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
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

export const IconProfile = styled.div`
  display: flex;
  background: #f5f6fa;
  color: #b6b6bc;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0 16px;
  width: 120px;
  height: 120px;
  position: relative;
`;

export const Icon = styled.div`
  font-size: 36px;
`;

export const AddPhoto = styled.div`
  background: #dbdbe2;
  position: absolute;
  bottom: -10px;
  right: -10px;
  font-size: 14px;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
`;
