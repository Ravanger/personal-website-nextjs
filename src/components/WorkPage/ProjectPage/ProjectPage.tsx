import ExternalLink from "components/common/ExternalLink"
import { ProjectPagePropTypes } from "./ProjectPage.types"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import PatternTitleText from "components/common/PatternTitleText"
import ReactMarkdown from "react-markdown"

const ProjectPage: React.FC<ProjectPagePropTypes> = ({ markdownData }) => {
  return (
    <>
      <div>
        <button>{"<"}</button>
        {markdownData.frontmatter.siteUrl && (
          <ExternalLink href={markdownData.frontmatter.siteUrl}>
            {"Live site"}
          </ExternalLink>
        )}
        {markdownData.frontmatter.sourceUrl && (
          <ExternalLink href={markdownData.frontmatter.sourceUrl}>
            {"Source"}
          </ExternalLink>
        )}
      </div>
      {/* <div>
        <Image
          src={markdownData.frontmatter.mainImage}
          alt={markdownData.frontmatter.title}
          layout="fill"
        />
      </div> */}
      <div>
        {markdownData.frontmatter.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ResponsiveGrid>
        <PatternTitleText title={markdownData.frontmatter.title} />
        <article>
          <ReactMarkdown>{markdownData.markdown}</ReactMarkdown>)
        </article>
      </ResponsiveGrid>
    </>
  )
}

export default ProjectPage
