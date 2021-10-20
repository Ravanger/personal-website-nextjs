import styles from "./ResponsiveGrid.module.scss"
import { ResponsiveGridPropTypes } from "./ResponsiveGrid.types"

const ResponsiveGrid: React.FC<ResponsiveGridPropTypes> = ({
  children,
  className,
  forwardRef,
}) => {
  return (
    <div
      className={`${styles.responsiveGrid} ${className || ""}`}
      ref={forwardRef}
    >
      {children}
    </div>
  )
}

export default ResponsiveGrid
