import styles from "./MainLayout.module.scss"
import TopNav from "components/Layout/TopNav"
import BottomNav from "components/Layout/BottomNav"
import Spacer from "components/common/Spacer"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <TopNav />
      <Spacer size="6rem" />
      {children}
      <Spacer size="6rem" />
      <BottomNav />
    </div>
  )
}

export default MainLayout
