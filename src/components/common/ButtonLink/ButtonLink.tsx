import styles from "./ButtonLink.module.scss"
import { ButtonPropTypes } from "./ButtonLink.types"
import Link from "next/link"

const ButtonLink: React.FC<ButtonPropTypes> = ({
  children,
  className,
  href = "",
  type,
  form,
  value,
  onClick,
}) => {
  return href ? (
    <Link href={href}>
      <a className={`${styles.btn} ${className || ""}`}>{children}</a>
    </Link>
  ) : (
    <button
      className={`${styles.btn} ${className || ""}`}
      type={type}
      form={form}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonLink
