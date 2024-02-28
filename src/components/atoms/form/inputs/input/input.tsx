import { DetailedHTMLProps, ReactNode } from "react";
import "./input-styles.scss";

interface IInputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = ({
  label,
  id,
  leftIcon,
  rightIcon,
  ...rest
}: IInputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        {leftIcon && leftIcon}
        <input id={id} {...rest} />
        {rightIcon && rightIcon}
      </div>
    </div>
  );
};
