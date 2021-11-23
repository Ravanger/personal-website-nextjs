import ExternalLink from "components/common/ExternalLink"
import { ProjectPagePropTypes } from "./ProjectPage.types"
import Image from "next/image"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import PatternTitleText from "components/common/PatternTitleText"

const ProjectPage: React.FC<ProjectPagePropTypes> = ({ markdownData }) => {
  return (
    <>
      <div>
        <button>{"<"}</button>
        {markdownData.frontmatterData.siteUrl && (
          <ExternalLink href={markdownData.frontmatterData.siteUrl}>
            {"Live site"}
          </ExternalLink>
        )}
        {markdownData.frontmatterData.sourceUrl && (
          <ExternalLink href={markdownData.frontmatterData.sourceUrl}>
            {"Source"}
          </ExternalLink>
        )}
      </div>
      {/* <div>
        <Image
          src={markdownData.frontmatterData.mainImage}
          alt={markdownData.frontmatterData.title}
          layout="fill"
        />
      </div> */}
      <div>
        {markdownData.frontmatterData.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ResponsiveGrid>
        <PatternTitleText title={markdownData.frontmatterData.title} />
        <article
          dangerouslySetInnerHTML={{ __html: markdownData.htmlData.toString() }}
        />
      </ResponsiveGrid>
    </>
  )
}

export default ProjectPage
