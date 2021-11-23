import React, { InputHTMLAttributes, useState, useEffect } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}
const Input = (props: InputProps) => {
  const [value, setValue] = useState<any>(props.value || "");

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <input
      placeholder={props.placeholder}
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
};

export default Input;
