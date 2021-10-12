import styles from "./ResponsiveGrid.module.scss"
import { ResponsiveGridPropTypes } from "./ResponsiveGrid.types"

const ResponsiveGrid: React.FC<ResponsiveGridPropTypes> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.responsiveGrid} ${className || ""}`}>
      {children}
    </div>
  )
}

export default ResponsiveGrid
