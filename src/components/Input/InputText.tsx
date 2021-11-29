import React, { InputHTMLAttributes, useEffect, useState } from "react";

import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { error, type } = props;
  const [value, setValue] = useState<any>(props.value || "");

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <div className={styles.containerInput}>
      <input
        className={
          error ? [styles.input, styles.error].join(" ") : styles.input
        }
        placeholder={props.placeholder}
        name={props.name}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange && props.onChange(e);
        }}
        value={value}
        type={type}
      />
      <div className={styles.containerError}>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
};

export default Input;
