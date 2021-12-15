import styles from "./ScrollToTopButton.module.scss"
import { BsTriangleFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    document.addEventListener("scroll", toggleVisibility)

    return () => {
      document.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.scrollToTop}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: -100 }}
        >
          <BsTriangleFill />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
