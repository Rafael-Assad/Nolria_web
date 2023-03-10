import { TextareaHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from "react-hook-form";

import { TextAreaContainer } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  inputName: string;
  label: string;
  registerItem: UseFormRegister<FieldValues>;
  errors: any;
}

const TextArea = ({inputName, label, registerItem, errors, ...rest}:TextAreaProps) => {
  return (
    <TextAreaContainer>
      <label htmlFor={inputName}>
        {label}
      </label>
      
      <textarea id={inputName} 
        className={errors[inputName] && 'error'}
        {...registerItem(inputName)}
        {...rest}
      />
      <p className="errorMessage">
        {errors[inputName] && (errors[inputName].message)}
      </p>
    </TextAreaContainer>
  )
}

export default TextArea