import styles from "./Button.module.scss"
import { ButtonPropTypes } from "./Button.types"

const Button: React.FC<ButtonPropTypes> = ({ children, className }) => {
  return (
    <button className={`${styles.btn} ${className || ""}`}>{children}</button>
  )
}

export default Button
