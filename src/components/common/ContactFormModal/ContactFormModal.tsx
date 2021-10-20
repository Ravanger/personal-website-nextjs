import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import { showContactFormAtom } from "src/atoms/global"
import ButtonLink from "../ButtonLink"
import ResponsiveGrid from "../ResponsiveGrid"
import Spacer from "../Spacer"
import styles from "./ContactFormModal.module.scss"
import { GrFormClose } from "react-icons/gr"
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { useClickOutside } from "src/util/clickHandlers"
import ExternalLink from "../ExternalLink"

const ContactFormModal: React.FC = () => {
  const [showModal, setShowModal] = useAtom(showContactFormAtom)

  useEffect(() => {
    document.body.classList.toggle("modalOpen", showModal)
  }, [showModal])

  const modalRef = useRef(null)
  useClickOutside(modalRef, () => setShowModal(false))

  return showModal ? (
    <div className={styles.modalbg}>
      <ResponsiveGrid className={styles.modal} forwardRef={modalRef}>
        <Spacer className={styles.fullSpan} />
        <div className={styles.closeButton}>
          <button
            onClick={() => {
              setShowModal(false)
            }}
          >
            <GrFormClose />
          </button>
        </div>
        <Spacer className={styles.fullSpan} size="2rem" />
        <div className={styles.socials}>
          <ExternalLink
            href="https://www.linkedin.com/in/brossovsky/"
            text="LinkedIn"
            skillIcon={<FaLinkedin />}
          />
          <ExternalLink
            href="https://www.instagram.com/ravanger666/"
            text="Instagram"
            skillIcon={<AiFillInstagram />}
          />
          <ExternalLink
            href="https://twitter.com/BRossovsky"
            text="Twitter"
            skillIcon={<FaTwitter />}
          />
          <ExternalLink
            href="mailto:contact@borisr.dev"
            text="Email"
            skillIcon={<FaEnvelope />}
          />
        </div>
        <Spacer className={styles.fullSpan} size="3rem" />
        <form className={styles.contactForm} id="contactMe">
          <input type="text" placeholder="Name" id="name" required />
          <Spacer className={styles.fullSpan} size="2rem" />
          <input type="email" placeholder="Email" id="email" required />
          <Spacer className={styles.fullSpan} size="3rem" />
          <textarea placeholder="Message" id="message" rows={8} required />
        </form>
        <Spacer className={styles.fullSpan} size="2rem" />
        <ButtonLink
          type="submit"
          form="contactMe"
          className={styles.submitButton}
        >
          Send
        </ButtonLink>
        <Spacer className={styles.fullSpan} />
      </ResponsiveGrid>
    </div>
  ) : null
}

export default ContactFormModal
