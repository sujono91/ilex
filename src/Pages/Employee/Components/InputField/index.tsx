import React, { FC } from 'react';
import { useField, FieldAttributes as FormikFieldAttributes } from 'formik';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

type Props = {
  label: string;
  type: string;
  required?: boolean;
} & FormikFieldAttributes<any>;

const InputField: FC<Props> = ({ label, type, required, ...otherProps}) => {
  const [field, meta] = useField(otherProps);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <FormGroup>
      <Label for={otherProps.name}>{label}{required && '*'}</Label>
      <Input
        type={type}
        invalid={!!errorText}
        {...field}
        {...otherProps}
      />
      <FormFeedback>{errorText}</FormFeedback>
    </FormGroup>
  );
};

export default InputField;
