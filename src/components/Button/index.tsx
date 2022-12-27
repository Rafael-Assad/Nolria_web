import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  buttonName: string;
  clickAction?: () => void;
}

const Button = ({buttonName, clickAction, type='button', ...rest}: ButtonProps) => {
  return (
    <ButtonContainer onClick={clickAction}
      type={type} {...rest}
    >
      {buttonName}
    </ButtonContainer>
  )
}

export default Button