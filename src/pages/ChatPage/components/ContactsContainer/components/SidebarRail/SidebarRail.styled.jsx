import styled from "styled-components";

export const RailButton = styled.button`
  position: absolute;
  inset-y: 0;
  z-index: 20;
  width: 1rem; /* w-4 */
  transform: translateX(-50%);
  transition: all 0.2s linear;
  display: none;
  background: transparent;
  border: none;

  &::after {
    content: "";
    position: absolute;
    inset-y: 0;
    left: 50%;
    width: 2px;
    background-color: transparent;
    transition: background-color 0.2s ease;
  }

  &:hover::after {
    background-color: #e2e2e2; /* аналог hover:bg-sidebar-border */
  }

  @media (min-width: 640px) {
    display: flex; /* sm:flex */
  }

  cursor: ew-resize; /* для изменения ширины */
`;
