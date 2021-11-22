import React, { useEffect, useState } from "react";

function InputText({
  placeholder,
  value,
  name,
  onChange,
  autoComplete = "off",
}: any) {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <input
      autoComplete={autoComplete}
      type="text"
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange && onChange(e);
      }}
    />
  );
}

export default InputText;
