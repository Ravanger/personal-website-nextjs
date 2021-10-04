import HeaderBar from "components/common/HeaderBar"
import Spacer from "components/common/Spacer"
import styles from "./MainLayout.module.scss"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Spacer size="0.5rem" />
      <HeaderBar />
      {children}
    </div>
  )
}

export default MainLayout
