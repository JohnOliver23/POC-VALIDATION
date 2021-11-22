import styled from "styled-components";

interface IValidationProps {
  invalid: boolean,
  isTouched: boolean,
  isDirty: boolean
}

function colorValidation(props: IValidationProps) {
  const { invalid, isTouched, isDirty } = props;

  if (isDirty && !invalid) {
    return "blueviolet"
  }

  if (invalid || isTouched) {
    return "crimson";
  }
}

export const InputContainer = styled.div<IValidationProps>`
  input {
    width: 100%;
    margin: 10px 0;
    padding: 2px 15px;
    border-color: ${(props) => colorValidation(props)};
  }

  p {
    margin: 0;
    color: ${(props) => colorValidation(props)};
  }

  p:first-child {
    font-weight: bold;
  }
`
