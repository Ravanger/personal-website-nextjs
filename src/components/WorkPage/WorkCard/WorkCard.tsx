import { WorkCardPropTypes } from "./WorkCard.types"
import styles from "./WorkCard.module.scss"
import Image from "next/image"
import Spacer from "components/common/Spacer"

const WorkCard: React.FC<WorkCardPropTypes> = ({ projectData }) => {
  return (
    <div className={styles.container}>
      <a>
        <div className={styles.image}>
          <Image
            src={projectData.image}
            layout="fill"
            alt={projectData.title}
          />
        </div>
      </a>
      <a>
        <div className={styles.content}>
          <div className={styles.tagsAndYear}>
            <div className={styles.tags}>
              {projectData.tags.map((tagData) => (
                <span key={tagData}>{tagData}</span>
              ))}
            </div>
            <span>{projectData.year}</span>
          </div>
          <h2 className={styles.title}>{projectData.title}</h2>
          <p className={styles.snippet}>{projectData.snippet}</p>
          <Spacer size="0.1rem" />
        </div>
      </a>
      <a className={styles.readmore}>Read More</a>
    </div>
  )
}

export default WorkCard
