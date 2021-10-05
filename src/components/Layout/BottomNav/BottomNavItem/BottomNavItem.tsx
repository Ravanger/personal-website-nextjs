import styles from "./BottomNavItem.module.scss"
import { BottomNavItemPropTypes } from "./BottomNavItem.types"
import Link from "next/link"
import Spacer from "components/common/Spacer"

const BottomNavItem: React.FC<BottomNavItemPropTypes> = ({
  url,
  text,
  icon,
  isActive = false,
}) => {
  return (
    <Link href={url} passHref>
      <button className={`${styles.navItem} ${isActive && styles.active}`}>
        {icon}
        <Spacer axis="HORIZONTAL" size="0.5rem" />
        <span>{text}</span>
      </button>
    </Link>
  )
}

export default BottomNavItem
