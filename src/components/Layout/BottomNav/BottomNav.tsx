import styles from "./BottomNav.module.scss"
import BottomNavItem from "./BottomNavItem"
import { AiFillHome } from "react-icons/ai"
import { FiMonitor } from "react-icons/fi"
import { FaPalette } from "react-icons/fa"
import { useRouter } from "next/dist/client/router"
import { MenuItemType } from "./BottomNav.types"

const MenuItems: MenuItemType[] = [
  { name: "Home", url: "/", icon: <AiFillHome /> },
  { name: "Work", url: "/work", icon: <FiMonitor /> },
  { name: "Art", url: "/art", icon: <FaPalette /> },
]

const BottomNav: React.FC = () => {
  const router = useRouter()

  return (
    <nav className={styles.bottomNav}>
      {MenuItems.map((menuItem) => (
        <BottomNavItem
          key={menuItem.name}
          url={menuItem.url}
          text={menuItem.name}
          icon={menuItem.icon}
          isActive={router.pathname === menuItem.url}
        />
      ))}
    </nav>
  )
}

export default BottomNav
