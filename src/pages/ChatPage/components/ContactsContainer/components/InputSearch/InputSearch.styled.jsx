import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem; /* эквивалент max-w-sm */
`;

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  left: 0.75rem; /* ~12px */
  top: 50%;
  transform: translateY(-50%);
  height: 1rem; /* 16px */
  width: 1rem;
  z-index: 2;
  pointer-events: none;
  color: #6b7280; /* эквивалент text-muted-foreground */
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.25rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background: white;
  padding: 0.25rem 0.75rem 0.25rem 2rem;
  font-size: 0.875rem;
  color: #111;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2563eb; /* синий — аналог ring */
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }

  &::placeholder {
    color: #9ca3af; /* muted text */
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
