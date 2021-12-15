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

  const isMenuItemActive = (
    currentRoute: string,
    menuRoute: string,
    subPath: string
  ) => {
    const isBasePathActive = currentRoute === menuRoute
    const isSubPathActive =
      menuRoute.indexOf(subPath) != -1 && currentRoute.indexOf(subPath) != -1

    return isBasePathActive || isSubPathActive
  }

  return (
    <nav className={styles.bottomNav}>
      {MenuItems.map((menuItem) => (
        <BottomNavItem
          key={menuItem.name}
          url={menuItem.url}
          text={menuItem.name}
          icon={menuItem.icon}
          isActive={isMenuItemActive(router.pathname, menuItem.url, "/work")}
        />
      ))}
    </nav>
  )
}

export default BottomNav
