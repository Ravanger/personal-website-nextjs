import { WorkCardPropTypes } from "./WorkCard.types"
import styles from "./WorkCard.module.scss"
import Image from "next/image"
import Spacer from "components/common/Spacer"
import Link from "next/link"

const WorkCard: React.FC<WorkCardPropTypes> = ({ projectData }) => {
  return (
    <div className={styles.container}>
      <Link href={`/work/${projectData.slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={projectData.mainImage}
              layout="fill"
              alt={projectData.title}
            />
          </div>
        </a>
      </Link>
      <Link href={`/work/${projectData.slug}`}>
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
      </Link>
      <Link href={`/work/${projectData.slug}`}>
        <a className={styles.readmore}>Read More</a>
      </Link>
    </div>
  )
}

export default WorkCard
