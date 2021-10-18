import styles from "./ScrollToTopButton.module.scss"
import { BsTriangleFill } from "react-icons/bs"
import { useEffect, useState } from "react"

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return isVisible ? (
    <button className={styles.scrollToTop} onClick={scrollToTop}>
      <BsTriangleFill />
    </button>
  ) : null
}

export default ScrollToTopButton
