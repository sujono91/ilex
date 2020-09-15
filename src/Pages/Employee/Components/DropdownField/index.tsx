import React, { FC } from 'react';
import { useField, FieldAttributes as FormikFieldAttributes } from 'formik';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

type Props = {
  label: string;
  items: Array<{key: string; value: string}>;
  required?: boolean;
} & FormikFieldAttributes<any>;

const DropdownField: FC<Props> = ({ label, items, required, ...otherProps}) => {
  const [field, meta] = useField(otherProps);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <FormGroup>
      <Label for={otherProps.name}>{label}{required && '*'}</Label>
      <Input
        invalid={!!errorText}
        id={otherProps.name}
        type="select"
        {...field}
        {...otherProps}
      >
        {items.map((item) => (
          <option key={item.key}>{item.value}</option>
        ))}
      </Input>
      <FormFeedback>{errorText}</FormFeedback>
    </FormGroup>
  );
};

export default DropdownField;
