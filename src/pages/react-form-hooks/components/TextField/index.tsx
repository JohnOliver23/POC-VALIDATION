import React from "react";
import { useWatch } from "react-hook-form";
import InputText from "./components/InputText";
import { InputContainer } from "./components/styles";
import { ControllerContainer } from "./styles";

interface IInputProps {
  type: "text" | "number" | "email" | "password" | "cpf" | "cnpj";
  placeholder?: string;
  label?: string;
  name?: string;
  control: any;
  register: any;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

function InputController({
  control,
  register,
  name,
  placeholder,
  type,
  rules,
  render,
}: any) {
  const value = useWatch({
    control,
    name,
  });

  // const { errors } = useFormState({
  //   control,
  //   name
  // });

  // console.log(errors);

  switch (type) {
    case "text":
      rules = { ...rules };
      break;

    default:
      rules = { ...rules };
  }

  const props = register(name, rules);

  return render({
    ...props,
    placeholder,
    value,
    onChange: (e: any) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
  });
}

function TextField({
  type = "text",
  placeholder,
  label,
  name = "",
  control,
  register,
  required,
  maxLength,
  minLength,
}: IInputProps) {
  return (
    <ControllerContainer>
      <InputController
        {...{
          control,
          register,
          name,
          placeholder,
          rules: {
            required,
            maxLength,
            minLength,
          },
          type,
          render: ({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }: any) => {
            return (
              <InputContainer invalid isTouched isDirty>
                {label && <p> {label} </p>}

                {type === "text" && <InputText {...field} />}

                {/* Ainda não implementado */}
                {type === "number" && <InputText {...field} />}
                {type === "email" && <InputText {...field} />}
                {type === "password" && <InputText {...field} />}
                {type === "cpf" && <InputText {...field} />}
                {type === "cnpj" && <InputText {...field} />}

                {error && <p> {error.message} </p>}

                {/* Exemplos */}
                <p> invalid: {JSON.stringify(invalid)} </p>
                <p> isTouched: {JSON.stringify(isTouched)} </p>
                <p> isDirty: {JSON.stringify(isDirty)} </p>
              </InputContainer>
            );
          },
        }}
      />
    </ControllerContainer>
  );
}

export default TextField;
