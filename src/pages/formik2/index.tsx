import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import Input from "../../components/Input";
import styles from "../../components/SignIn/styles.module.scss";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

function MyTextField(props: any) {
  // this will return field props for an <input />
  const [field, meta, helpers] = useField(props.name);

  switch (props.type) {
    case "text":
      break;

    case "number":
      meta.error = "numero invalido";
      break;

    case "email":
      meta.error = "email invalido";
      break;

    case "password":
      meta.error = "senha invalido";
      break;

    default:
      break;
  }

  return (
    <>
      <Input
        {...field}
        {...props}
        error={meta.error && meta.touched ? meta.error : ""}
      />
    </>
  );
}

const Example = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        firstName: "red",
        lastName: "",
      }}
      onSubmit={(values, actions) => {
        alert(`${values.email} logado`);
      }}
    >
      {(props: FormikProps<Values>) => (
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>My Form</h1>
            <Form>
              <MyTextField name="firstName" type="text" label="First Name" />
              <MyTextField name="lastName" type="text" label="Last Name" />
              <MyTextField name="email" type="email" label="Email" />
              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  </div>
);

export default Example;
