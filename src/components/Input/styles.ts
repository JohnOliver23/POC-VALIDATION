import styled, { css } from "styled-components";
interface ContainerInputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
interface LabelProps {
  isErrored: boolean;
}
export const Container = styled.div`
  .container-error {
    height: 10px;
    margin: 0px;
    margin-top: 5px;
  }
  .label-error {
    color: var(--color-red);
    text-align: left;
  }
`;
export const ContainerInput = styled.div<ContainerInputProps>`
  background: var(--color-white);
  border-bottom: 2px solid var(--color-gray-light);
  padding-bottom: 8px;
  padding-right: 28px;
  width: 100%;
  color: #999392;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-red) !important;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-blue-dark);
      border-color: var(--color-blue-dark);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-blue-dark);
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;
    width: 100%;
    &::placeholder {
      color: #666360;
      ${(props) =>
        props.isErrored &&
        css`
          color: var(--color-red);
        `}
    }
  }
`;

export const Label = styled.p<LabelProps>`
  font-family: Nunito;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-gray-dark);
  margin-bottom: 2px;
  ${(props) =>
    props.isErrored &&
    css`
      color: var(--color-red);
      svg {
        stroke: var(--color-red);
      }
    `}
  svg {
    margin-top: -2px;
    margin-left: 3px;
  }
`;
