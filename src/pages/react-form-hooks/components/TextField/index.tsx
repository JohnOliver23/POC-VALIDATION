import React from "react";
import Controller from "../Controller";
import InputText from "../../../../components/InputText";
import InputCpf from "../../../../components/InputCpf";
import InputCnpj from "../../../../components/InputCnpj";
import { type } from "os";
import { number } from "yup";

interface IInputProps {
  type: "text" | "number" | "email" | "password" | "cpf" | "cnpj";
  placeholder: string;
  label?: string;
  name?: string;
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
  name = "",
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
            <InputText {...props} error={errors[name]?.message} />
          )) ||
          (type === "number" && (
            <InputText {...props} error={errors[name]?.message} />
          )) ||
          (type === "email" && (
            <InputText {...props} error={errors[name]?.message} />
          )) ||
          (type === "password" && (
            <InputText {...props} error={errors[name]?.message} />
          )) ||
          (type === "cpf" && (
            <InputCpf {...props} error={errors[name].message} />
          )) ||
          (type === "cnpj" && (
            <InputCnpj {...props} error={errors[name]?.message} />
          )),
      }}
    />
  );
}

export default TextField;
