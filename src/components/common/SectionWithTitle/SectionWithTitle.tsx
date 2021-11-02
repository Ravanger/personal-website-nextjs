import ResponsiveGrid from "../ResponsiveGrid"
import { SectionWithTitlePropTypes } from "./SectionWithTitle.types"
import styles from "./SectionWithTitle.module.scss"
import PatternTitleText from "components/common/PatternTitleText"

const SectionWithTitle: React.FC<SectionWithTitlePropTypes> = ({
  title = "Title",
  children,
}) => {
  return (
    <ResponsiveGrid>
      <PatternTitleText title={title} />
      <section className={styles.content}>{children}</section>
    </ResponsiveGrid>
  )
}

export default SectionWithTitle
