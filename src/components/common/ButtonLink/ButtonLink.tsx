import styles from "./ButtonLink.module.scss"
import { ButtonPropTypes } from "./ButtonLink.types"
import Link from "next/link"

const ButtonLink: React.FC<ButtonPropTypes> = ({
  children,
  className,
  href = "",
}) => {
  return href ? (
    <Link href={href}>
      <a className={`${styles.btn} ${className || ""}`}>{children}</a>
    </Link>
  ) : (
    <button className={`${styles.btn} ${className || ""}`}>{children}</button>
  )
}

export default ButtonLink
