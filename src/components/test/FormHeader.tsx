import React from 'react';
import { Text } from 'wiloke-react-core';

export interface FormHeaderProps {
  title: string;
}

const FormHeader = ({ title }: FormHeaderProps) => {
  return <Text color="dark">{title}</Text>;
};
export default FormHeader;
