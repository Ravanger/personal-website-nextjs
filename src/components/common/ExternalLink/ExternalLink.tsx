import { ExternalLinkPropTypes } from "./ExternalLink.types"
import styles from "./ExternalLink.module.scss"
import { FaExternalLinkAlt } from "react-icons/fa"
import IconWithText from "../IconWithText"

const ExternalLink: React.FC<ExternalLinkPropTypes> = ({
  href,
  text,
  skillIcon,
}) => {
  return (
    <a
      className={styles.socialLink}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <FaExternalLinkAlt size="0.25em" className={styles.externalLink} />
      <IconWithText text={text} skillIcon={skillIcon} />
      <span className={styles.screenReader}>{"opens a new window"}</span>
    </a>
  )
}

export default ExternalLink
