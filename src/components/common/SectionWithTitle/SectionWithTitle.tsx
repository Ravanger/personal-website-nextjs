import ResponsiveGrid from "../ResponsiveGrid"
import { SectionWithTitlePropTypes } from "./SectionWithTitle.types"
import styles from "./SectionWithTitle.module.scss"

const pattern = (
  <svg viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line
      x1="95.3702"
      y1="16.1739"
      x2="16.1742"
      y2="95.3698"
      stroke="#272727"
    />
    <line x1="154.06" y1="95.3692" x2="74.8636" y2="16.1732" stroke="#272727" />
    <line
      x1="129.311"
      y1="50.1153"
      x2="50.1151"
      y2="129.311"
      stroke="#272727"
    />
    <line
      x1="120.119"
      y1="129.311"
      x2="40.9227"
      y2="50.1146"
      stroke="#272727"
    />
    <line x1="112.34" y1="33.1446" x2="33.1444" y2="112.341" stroke="#272727" />
    <line x1="137.089" y1="112.34" x2="57.8929" y2="33.1439" stroke="#272727" />
    <line x1="146.281" y1="67.086" x2="67.0853" y2="146.282" stroke="#272727" />
    <line x1="103.148" y1="146.281" x2="23.952" y2="67.0853" stroke="#272727" />
    <line
      x1="103.855"
      y1="24.6582"
      x2="24.6591"
      y2="103.854"
      stroke="#272727"
    />
    <line
      x1="145.574"
      y1="103.856"
      x2="66.3782"
      y2="24.6595"
      stroke="#272727"
    />
    <line x1="137.796" y1="58.5996" x2="58.6" y2="137.796" stroke="#272727" />
    <line
      x1="111.633"
      y1="137.797"
      x2="32.4373"
      y2="58.6009"
      stroke="#272727"
    />
    <line
      x1="120.826"
      y1="41.6289"
      x2="41.6298"
      y2="120.825"
      stroke="#272727"
    />
    <line x1="128.604" y1="120.826" x2="49.408" y2="41.6302" stroke="#272727" />
    <line
      x1="154.767"
      y1="75.5704"
      x2="75.5707"
      y2="154.766"
      stroke="#272727"
    />
    <line x1="94.663" y1="154.766" x2="15.4671" y2="75.5697" stroke="#272727" />
  </svg>
)

const SectionWithTitle: React.FC<SectionWithTitlePropTypes> = ({
  title = "Title",
  children,
}) => {
  return (
    <ResponsiveGrid>
      <div className={styles.title}>
        <span>{title}</span>
        <div className={styles.pattern}>{pattern}</div>
      </div>
      <section className={styles.content}>{children}</section>
    </ResponsiveGrid>
  )
}

export default SectionWithTitle
