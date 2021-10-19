import { IconWithTextPropTypes } from "./IconWithText.types"
import styles from "./IconWithText.module.scss"
import Spacer from "../Spacer"

const IconWithText: React.FC<IconWithTextPropTypes> = ({
  key,
  skillIcon,
  text,
}) => {
  return (
    <div key={key} className={styles.iconWithText}>
      {skillIcon}
      <Spacer size="0.25rem" />
      <span>{text}</span>
    </div>
  )
}

export default IconWithText
