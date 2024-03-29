import ExternalLink from "components/common/ExternalLink"
import { ProjectPagePropTypes } from "./ProjectPage.types"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import PatternTitleText from "components/common/PatternTitleText"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import remarkUnwrapImages from "remark-unwrap-images"
import styles from "./ProjectPage.module.scss"
import Spacer from "components/common/Spacer"
import Link from "next/link"

const ProjectPage: React.FC<ProjectPagePropTypes> = ({ markdownData }) => {
  return (
    <ResponsiveGrid className={styles.content}>
      <nav className={styles.projectLinksNav}>
        <div>
          <Link href="/work">
            <a className={styles.backButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <g transform="rotate(-90 11 13)">
                  <path d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029l8.468-14.113z" />
                </g>
              </svg>
            </a>
          </Link>
        </div>
        {markdownData.frontmatter.siteUrl ? (
          <ExternalLink href={markdownData.frontmatter.siteUrl}>
            {"Live site"}
          </ExternalLink>
        ) : (
          <div />
        )}
        {markdownData.frontmatter.sourceUrl ? (
          <ExternalLink href={markdownData.frontmatter.sourceUrl}>
            {"Source"}
          </ExternalLink>
        ) : (
          <div />
        )}
      </nav>
      <Spacer size="2rem" />
      <div className={styles.mainImage}>
        <Image
          src={markdownData.frontmatter.mainImage}
          alt={markdownData.frontmatter.title}
          layout="fill"
        />
      </div>
      <Spacer size="2rem" />
      <div className={styles.projectTags}>
        {markdownData.frontmatter.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <Spacer size="2rem" />
      <div className={styles.articleTitle}>
        <span>{markdownData.frontmatter.year}</span>
        <PatternTitleText title={markdownData.frontmatter.title} />
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkUnwrapImages]}
        components={{
          img: (node) => (
            <div className={styles.inlineImage}>
              <Image
                src={node.src || "/images/missing.jpg"}
                alt={node.alt || ""}
                layout={"fill"}
              />
            </div>
          ),
        }}>
        {markdownData.markdown}
      </ReactMarkdown>
    </ResponsiveGrid>
  )
}

export default ProjectPage
