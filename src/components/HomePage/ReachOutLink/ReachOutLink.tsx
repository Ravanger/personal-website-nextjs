import styles from "./ReachOutLink.module.scss"

const ReachOutLink: React.FC = () => {
  return (
    <span className={styles.contactLink}>
      <span>or</span> <button>reach out</button>
    </span>
  )
}

export default ReachOutLink
