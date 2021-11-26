import React from "react";
import Button from "../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputText from "../../components/InputText";
import styles from "./styles.module.scss";

const SignIn: React.FC = () => {
  //Yup
  const userSchema = Yup.object({
    email: Yup.string()
      .required("O email é obrigatório")
      .email("Informe um email válido"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(5, "Digite no minimo 5 digitos"),
  });

  //Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      alert(`${values.email} logado`);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={formik.handleSubmit}>
          <h1>Faça Login</h1>

          <div className={styles.row}>
            <InputText
              label="Email"
              name="email"
              placeholder="Digite seu Email"
              onChange={formik.handleChange}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }
              value={formik.values.email}
            />
          </div>

          <div className={styles.row}>
            <InputText
              label="Senha"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              onChange={formik.handleChange}
              error={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : ""
              }
              value={formik.values.password}
            />
          </div>

          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
