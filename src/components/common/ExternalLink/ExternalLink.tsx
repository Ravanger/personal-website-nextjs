import { ExternalLinkPropTypes } from "./ExternalLink.types"
import { FaExternalLinkAlt } from "react-icons/fa"
import styles from "./ExternalLink.module.scss"

const ExternalLink: React.FC<ExternalLinkPropTypes> = ({
  children,
  className,
  href,
}) => {
  return (
    <a
      className={`${styles.externalLink} ${className || ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <FaExternalLinkAlt size="0.25em" className={styles.externalLinkIcon} />
      {children}
      <span className={styles.screenReader}>{"opens a new window"}</span>
    </a>
  )
}

export default ExternalLink
