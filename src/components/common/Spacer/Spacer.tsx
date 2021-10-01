import styles from "./Spacer.module.scss"
import { SpacerPropTypes } from "./Spacer.types"

const defaultProps: SpacerPropTypes = {
  size: "1rem",
  axis: "VERTICAL",
}

const Spacer: React.FC<SpacerPropTypes> = (props) => {
  const width = props.axis === "VERTICAL" ? null : props.size
  const height = props.axis === "HORIZONTAL" ? null : props.size

  return (
    <span
      className={`${styles.spacer} ${props.className || ""}`}
      style={{
        ...(width && { width: width }),
        ...(height && { height: height }),
      }}
    />
  )
}

Spacer.defaultProps = defaultProps

export default Spacer
