import Spacer from "components/common/Spacer"
import styles from "./IntroHeader.module.scss"
import Image from "next/image"
import ResponsiveGrid from "components/common/ResponsiveGrid"

const IntroHeader: React.FC = () => {
  return (
    <div className={styles.introHeader}>
      <ResponsiveGrid className={styles.introContent}>
        {/* <Spacer size="10rem" className={styles.gridStretch} /> */}
        <div className={styles.introText}>
          <p className={styles.boris}>{"I'm Boris,"}</p>
          <Spacer size="1.5rem" />
          <p className={styles.icanhelp}>
            {"and I can help bring your ideas to life"}
          </p>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/images/me.svg"
            alt="Logo"
            width="339"
            height="335"
            layout="responsive"
          />
        </div>
      </ResponsiveGrid>
    </div>
  )
}

export default IntroHeader
