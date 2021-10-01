import styles from "./HeaderBar.module.scss"
import { BsMoon } from "react-icons/bs"
import Image from "next/image"
import logo_dark from "../../../../public/images/logo/dark_solid.svg"
import Button from "components/common/Button"

const HeaderBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <button className={styles.logo}>
        <Image src={logo_dark} alt="Logo" layout="responsive" />
      </button>
      <button className={styles.themeSwitch}>
        <BsMoon />
      </button>
      <Button className={styles.contact}>Contact</Button>
    </header>
  )
}

export default HeaderBar
