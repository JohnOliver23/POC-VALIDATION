import React, { useState } from "react";
import { Controller } from "react-hook-form";
import InputText from "./components/InputText";
import { InputContainer } from "./components/styles";
import { ControllerContainer } from "./styles";

interface IInputProps {
  type: "text" | "number" | "email" | "password" | "cpf" | "cnpj",
  placeholder?: string,
  label?: string,
  name?: string,
  control: any,
  required?: boolean,
  maxLength?: number,
  minLength?: number,
}

function TextField({
  type = "text",
  placeholder,
  label,
  name = "",
  control,
  required,
  maxLength,
  minLength
}: IInputProps) {

  const [rules, setRules] = useState({});

  return (
    <ControllerContainer>
      <Controller
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <InputContainer {...{ invalid, isTouched, isDirty }}>
            {label && <p> {label} </p>}

            {type === "text" && <InputText
              placeholder={placeholder}
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              emitRules={(inputRules: React.SetStateAction<{}>) => setRules(inputRules)}
            />}
          
            {/* Ainda não implementado */}
            {type === "number" &&  <InputText placeholder={placeholder} />}
            {type === "email" && <InputText placeholder={placeholder} />}
            {type === "password" && <InputText placeholder={placeholder} />}
            {type === "cpf" && <InputText placeholder={placeholder} />}
            {type === "cnpj" && <InputText placeholder={placeholder} />}

            {error && <p> {error.message} </p>}

            {/* Exemplos */}
            <p> invalid: {JSON.stringify(invalid)} </p>
            <p> isTouched: {JSON.stringify(isTouched)} </p>
            <p> isDirty: {JSON.stringify(isDirty)} </p>
          </InputContainer>
        )}
        name={name}
        control={control}
        rules={{
          ...rules,
          required,
          maxLength: maxLength && {
            value: maxLength,
            message: `Quantidade máxima de caracteres: ${maxLength}`
          },
          minLength: minLength && {
            value: minLength,
            message: `Quantidade mínima de caracteres: ${minLength}`
          }
        }}
      />
    </ControllerContainer>
  );
}

export default TextField;
