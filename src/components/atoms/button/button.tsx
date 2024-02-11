import { DetailedHTMLProps, ReactNode } from "react"
import './button-styles.scss'
import clsx from "clsx";

interface IButtonTypes extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonType: "primary" | "secondary" | "other";
  children: ReactNode | string;
}

export const Button = ({buttonType, children, ...props}: IButtonTypes) => {
  return (
    <button className={clsx(buttonType === "primary" && 'primary-button', buttonType === 'secondary' && 'secondary-button')} {...props}>{children}</button>
  )
}
