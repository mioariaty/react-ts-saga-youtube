import React, { ReactNode } from 'react';
import { Text } from 'wiloke-react-core';
import FormHeader from './FormHeader';

interface FormProps {
  children: ReactNode;
  text: string;
}

const Form = ({ text, children }: FormProps) => {
  return (
    <form>
      <Text color="dark">{text}</Text>
      {children}
    </form>
  );
};

Form.Header = FormHeader;

export default Form;
