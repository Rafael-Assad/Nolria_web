import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  inputName: string;
  label: string;
  registerItem: UseFormRegister<FieldValues>;
  errors: any;
}

const Input = ({inputName, label, type="text", registerItem, errors, ...rest}: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={inputName}>
        {label}
      </label>

      <input type={type} 
        id={inputName}
        className={errors[inputName] && 'error'}
        {...registerItem(inputName)}
        {...rest}
      />

      <p className="errorMessage">
        {errors[inputName] && (errors[inputName].message)}
      </p>
    </InputContainer>
  )
}

export default Input