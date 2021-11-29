import React from "react";
import Controller from "../Controller";
import InputText from "../../../../components/Input/InputText";
import InputCpf from "../../../../components/Input/InputCpf";
import InputCnpj from "../../../../components/Input/InputCnpj";

interface IInputProps {
  type: "text" | "number" | "email" | "password" | "cpf" | "cnpj";
  placeholder: string;
  label?: string;
  name: string;
  control: any;
  register: any;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  errors?: any;
  rules?: any;
}

function TextField({
  type = "text",
  placeholder,
  label,
  name,
  control,
  register,
  required,
  maxLength,
  minLength,
  errors,
  rules,
}: IInputProps) {
  return (
    <Controller
      {...{
        control,
        register,
        name: name,
        placeholder: placeholder,
        rules: { ...rules },
        type: type,
        render: (props: JSX.IntrinsicAttributes) =>
          (type === "text" && (
            <InputText type={type} {...props} error={errors[name]?.message} />
          )) ||
          (type === "number" && (
            <InputText type={type} {...props} error={errors[name]?.message} />
          )) ||
          (type === "email" && (
            <InputText type={type} {...props} error={errors[name]?.message} />
          )) ||
          (type === "password" && (
            <InputText type={type} {...props} error={errors[name]?.message} />
          )) ||
          (type === "cpf" && (
            <InputCpf type={type} {...props} error={errors[name].message} />
          )) ||
          (type === "cnpj" && (
            <InputCnpj type={type} {...props} error={errors[name]?.message} />
          )),
      }}
    />
  );
}

export default TextField;
