import * as React from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

type PhoneNumberInputProps = {
  control: any;
  name: string;
  inputComponent: any;
};

export const PhoneNumberInput = ({
  control,
  name,
  inputComponent,
}: PhoneNumberInputProps) => {
  return (
    <PhoneInput
      name={name}
      control={control}
      country="NG"
      rules={{ required: true }}
      inputComponent={inputComponent}
    />
  );
};
