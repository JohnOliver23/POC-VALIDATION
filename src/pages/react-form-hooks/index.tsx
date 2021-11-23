import React from "react";
import { useForm } from "react-hook-form";
import Controller from "./components/Controller";
import Input from "./components/Input";

import { FormContainer, SubmitInput } from "./styles";

const defaultValues = {
  email: "",
  password: "",
};

let renderCount = 0;

function ReactFormHooks() {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  const onSubmit = (data: any) => {
    alert(`${JSON.stringify(data)}\nRenderCount: ${renderCount}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderCount++;

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          {...{
            control,
            register,
            name: "email",
            placeholder: "Email",
            rules: {
              required: "Campo obrigatório",
            },
            type: "email",
            render: (props: JSX.IntrinsicAttributes) => <Input {...props} />,
          }}
        />
        <p>{errors.email?.message}</p>

        <Controller
          {...{
            control,
            register,
            name: "password",
            placeholder: "Password",
            rules: {
              required: "Senha obrigatória",
            },
            type: "number",
            render: (props: JSX.IntrinsicAttributes) => <Input {...props} />,
          }}
        />
        <p>{errors.password?.message}</p>

        <SubmitInput className="submit" type="submit" />
        <SubmitInput
          className="submit"
          value="Reset"
          type="button"
          onClick={() => reset({ email: "", password: "" })}
        />
      </form>
    </FormContainer>
  );
}

export default ReactFormHooks;
