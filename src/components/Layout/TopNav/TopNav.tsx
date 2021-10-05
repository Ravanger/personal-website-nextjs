import styles from "./TopNav.module.scss"
import { BsMoon } from "react-icons/bs"
import Image from "next/image"
import Button from "components/common/Button"

const TopNav: React.FC = () => {
  return (
    <header className={styles.header}>
      <button className={styles.logo}>
        <Image
          src="/images/logo/dark_solid.svg"
          alt="Logo"
          width="64"
          height="64"
          layout="responsive"
        />
      </button>
      <button className={styles.themeSwitch}>
        <BsMoon />
      </button>
      <Button className={styles.contact}>Contact</Button>
    </header>
  )
}

export default TopNav
