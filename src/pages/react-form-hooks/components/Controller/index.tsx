import { useFormState, useWatch } from "react-hook-form";

interface IController {
  control: any;
  register: any;
  placeholder: string;
  name: string;
  type: string;
  rules: any;
  render: any;
}

const Controller = ({
  control,
  register,
  placeholder,
  name,
  type,
  rules,
  render,
}: IController) => {
  const value = useWatch({
    control,
    name,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { errors } = useFormState({
    control,
    name,
  });

  switch (type) {
    case "text":
      break;

    case "number":
      rules = { ...rules, pattern: /[0-9]+/ };
      break;

    case "email":
      rules = {
        ...rules,
        required: "Campo obrigatório",
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Digite um email válido",
        },
      };
      break;

    case "password":
      rules = {
        ...rules,
        required: "Campo obrigatório",
        minLength: {
          value: 5,
          message: "Senha fraca, digite no mínimo 5 characteres",
        },
      };
      break;

    default:
      break;
  }

  const props = register(name, rules);

  return render({
    value,
    placeholder,
    onChange: (e: any) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

export default Controller;
