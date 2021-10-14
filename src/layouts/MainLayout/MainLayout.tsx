import styles from "./MainLayout.module.scss"
import TopNav from "components/Layout/TopNav"
import BottomNav from "components/Layout/BottomNav"
import Spacer from "components/common/Spacer"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <TopNav />
      <main className={styles.content}>
        <Spacer size="6rem" />
        {children}
        <Spacer size="6rem" />
      </main>
      <BottomNav />
    </div>
  )
}

export default MainLayout
