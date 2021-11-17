import styles from "./TopNav.module.scss"
import { BsMoon } from "react-icons/bs"
import Image from "next/image"
import ButtonLink from "components/common/ButtonLink"
import Link from "next/link"
import { useAtom } from "jotai"
import { showContactFormAtom } from "src/atoms/global"

const TopNav: React.FC = () => {
  const [, setShowModal] = useAtom(showContactFormAtom)

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            src="/images/logo/dark_solid.svg"
            alt="Logo"
            width="64"
            height="64"
            layout="responsive"
            priority
          />
        </a>
      </Link>
      <button className={styles.themeSwitch}>
        <BsMoon />
      </button>
      <ButtonLink className={styles.contact} onClick={() => setShowModal(true)}>
        Contact
      </ButtonLink>
    </header>
  )
}

export default TopNav
