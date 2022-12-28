import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  buttonName: string;
}

const Button = ({buttonName, type='button', ...rest}: ButtonProps) => {
  return (
    <ButtonContainer type={type} {...rest}>
      {buttonName}
    </ButtonContainer>
  )
}

export default Button