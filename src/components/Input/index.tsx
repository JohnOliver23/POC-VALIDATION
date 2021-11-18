import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from "react";

import { Container, ContainerInput, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ error, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container>
      <ContainerInput
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <Label isErrored={!!error}>{label}</Label>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...rest}
        />
      </ContainerInput>
      <section className="container-error">
        {error && <p className="label-error">{error}</p>}
      </section>
    </Container>
  );
};

export default Input;
