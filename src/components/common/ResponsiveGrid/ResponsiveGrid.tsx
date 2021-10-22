import { motion } from "framer-motion"
import styles from "./ResponsiveGrid.module.scss"
import { ResponsiveGridPropTypes } from "./ResponsiveGrid.types"

const ResponsiveGrid: React.FC<ResponsiveGridPropTypes> = ({
  children,
  className,
  forwardRef,
  initial,
  animate,
  exit,
}) => {
  return (
    <motion.div
      className={`${styles.responsiveGrid} ${className || ""}`}
      ref={forwardRef}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {children}
    </motion.div>
  )
}

export default ResponsiveGrid
