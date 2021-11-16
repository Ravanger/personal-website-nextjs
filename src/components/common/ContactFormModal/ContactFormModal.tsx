import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import { showContactFormAtom } from "src/atoms/global"
import ButtonLink from "src/components/common/ButtonLink"
import ResponsiveGrid from "src/components/common/ResponsiveGrid"
import Spacer from "src/components/common/Spacer"
import styles from "./ContactFormModal.module.scss"
import { GrFormClose } from "react-icons/gr"
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { useClickOutside } from "src/hooks/useClickOutside"
import SocialsLink from "components/common/SocialsLink"
import { AnimatePresence, motion } from "framer-motion"

const ContactFormModal: React.FC = () => {
  const [showModal, setShowModal] = useAtom(showContactFormAtom)

  useEffect(() => {
    document.body.classList.toggle("modalOpen", showModal)
  }, [showModal])

  const modalRef = useRef(null)
  useClickOutside(modalRef, () => setShowModal(false))

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className={styles.modalbg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key={"modalbg"}>
          <ResponsiveGrid
            className={styles.modal}
            forwardRef={modalRef}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            key={"modalwindow"}>
            <Spacer className={styles.fullSpan} />
            <div className={styles.closeButton}>
              <button
                onClick={() => {
                  setShowModal(false)
                }}>
                <GrFormClose />
              </button>
            </div>
            <Spacer className={styles.fullSpan} size="2rem" />
            <div className={styles.socials}>
              <SocialsLink
                href="https://www.linkedin.com/in/brossovsky/"
                text="LinkedIn"
                skillIcon={<FaLinkedin />}
              />
              <SocialsLink
                href="https://www.instagram.com/ravanger666/"
                text="Instagram"
                skillIcon={<AiFillInstagram />}
              />
              <SocialsLink
                href="https://twitter.com/BRossovsky"
                text="Twitter"
                skillIcon={<FaTwitter />}
              />
              <SocialsLink
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
              className={styles.submitButton}>
              Send
            </ButtonLink>
            <Spacer className={styles.fullSpan} />
          </ResponsiveGrid>
        </motion.div>
      )}{" "}
    </AnimatePresence>
  )
}

export default ContactFormModal
