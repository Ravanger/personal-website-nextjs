import TopNav from "components/common/TopNav"
import Spacer from "components/common/Spacer"
import styles from "./MainLayout.module.scss"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Spacer size="0.5rem" />
      <TopNav />
      {children}
    </div>
  )
}

export default MainLayout
