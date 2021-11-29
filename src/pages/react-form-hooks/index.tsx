import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../components/SignIn/styles.module.scss";
import TextField from "./components/TextField";
import Button from "../../components/Button";

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
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", defaultValues });
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

          <Button disabled={!isValid} type="submit">
            Entrar
          </Button>
          <Button
            type="button"
            onClick={() => reset({ email: "", password: "" })}
          >
            Reset
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ReactFormHooks;
