import { WorkProjectFrontmatterType } from "src/types/WorkProjectType.types"

export interface ProjectPagePropTypes {
  markdownData: {
    markdown: string
    frontmatter: WorkProjectFrontmatterType
  }
}
