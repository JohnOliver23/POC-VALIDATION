import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../components/SignIn/styles.module.scss";
import { SubmitInput } from "./styles";
import TextField from "./components/TextField";

const defaultValues = {
  email: "",
  password: "",
};

function ReactFormHooks() {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  const onSubmit = (data: any) => {
    alert(`${data.email} logado`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Faça Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <TextField
              {...{
                control,
                register,
                name: "email",
                placeholder: "Email",
                rules: {},
                type: "email",
                errors,
              }}
            />
          </div>
          <div className={styles.row}>
            <TextField
              {...{
                control,
                register,
                rules: {},
                name: "password",
                placeholder: "Password",
                type: "password",
                errors,
              }}
            />
          </div>

          <SubmitInput className="submit" type="submit" />
          <SubmitInput
            className="submit"
            value="Reset"
            type="button"
            onClick={() => reset({ email: "", password: "" })}
          />
        </form>
      </div>
    </div>
  );
}

export default ReactFormHooks;
