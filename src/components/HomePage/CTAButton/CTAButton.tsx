import styles from "./CTAButton.module.scss"
import ButtonLink from "components/common/ButtonLink"

const CTAButton: React.FC = () => {
  return (
    <ButtonLink href="/work" className={styles.ctaButton}>
      Check out my work
    </ButtonLink>
  )
}

export default CTAButton
