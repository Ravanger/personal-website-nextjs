import styles from "./MainLayout.module.scss"
import TopNav from "components/Layout/TopNav"
import BottomNav from "components/Layout/BottomNav"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <TopNav />
      {children}
      <BottomNav />
    </div>
  )
}

export default MainLayout
