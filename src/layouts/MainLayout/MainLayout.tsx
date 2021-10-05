import styles from "./MainLayout.module.scss"
import TopNav from "components/Layout/TopNav"
import BottomNav from "components/Layout/BottomNav"
import Spacer from "components/common/Spacer"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Spacer size="0.3rem" className={styles.gridArea} />
      <TopNav />
      {children}
      <BottomNav />
    </div>
  )
}

export default MainLayout
