import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: var(--color-blue);
  font-size: 14px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: var(--color-white);
  width: 100%;
  font-weight: 700;
  transition: background-color 0.2s;

  ${(props) =>
    props.disabled &&
    css`
      background: var(--color-gray-light);
      pointer-events: none;
    `}

  &:hover {
    background: ${shade(0.2, "#2e50d4")};
  }
`;
