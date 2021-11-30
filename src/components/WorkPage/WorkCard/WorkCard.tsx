import { WorkCardPropTypes } from "./WorkCard.types"
import styles from "./WorkCard.module.scss"
import Image from "next/image"
import Spacer from "components/common/Spacer"
import Link from "next/link"

const WorkCard: React.FC<WorkCardPropTypes> = ({ frontmatter }) => {
  return (
    <div className={styles.container}>
      <Link href={`/work/${frontmatter.slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={frontmatter.mainImage}
              layout="fill"
              alt={frontmatter.title}
            />
          </div>
        </a>
      </Link>
      <Link href={`/work/${frontmatter.slug}`}>
        <a>
          <div className={styles.content}>
            <div className={styles.tagsAndYear}>
              <div className={styles.tags}>
                {frontmatter.tags.map((tagData) => (
                  <span key={tagData}>{tagData}</span>
                ))}
              </div>
              <span>{frontmatter.year}</span>
            </div>
            <h2 className={styles.title}>{frontmatter.title}</h2>
            <p className={styles.snippet}>{frontmatter.snippet}</p>
            <Spacer size="0.1rem" />
          </div>
        </a>
      </Link>
      <Link href={`/work/${frontmatter.slug}`}>
        <a className={styles.readmore}>Read More</a>
      </Link>
    </div>
  )
}

export default WorkCard
