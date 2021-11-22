import React from "react"
import { useForm } from 'react-hook-form';
import TextField from "./components/TextField";

import { FormContainer, SubmitInput } from "./styles";

const defaultValues = {
  nome: ""
};

let renderCount = 0;

function ReactFormHooks() {
  const { handleSubmit, control, register, reset } = useForm({ defaultValues });
  const onSubmit = (data: any) => {alert(`${JSON.stringify(data)}\nRenderCount: ${renderCount}`)};
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderCount++;
  
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          control={control}
          register={register}
          placeholder="Ex: Laura, Diego, etc."
          label="Informe seu nome:"
          type="text"
          name="nome"
          maxLength={10}
          minLength={3}
          required
        />

        <SubmitInput className="submit" type="submit" />
        <SubmitInput
          className="submit"
          value="Reset"
          type="button"
          onClick={() => reset({ nome: "" }) }
        />
      </form>
    </FormContainer>
  );
}

export default ReactFormHooks;
