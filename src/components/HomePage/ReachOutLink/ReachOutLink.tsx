import { useAtom } from "jotai"
import { showContactFormAtom } from "src/atoms/global"
import styles from "./ReachOutLink.module.scss"

const ReachOutLink: React.FC = () => {
  const [, setShowModal] = useAtom(showContactFormAtom)

  return (
    <span className={styles.contactLink}>
      <span>or</span>{" "}
      <button onClick={() => setShowModal(true)}>reach out</button>
    </span>
  )
}

export default ReachOutLink
