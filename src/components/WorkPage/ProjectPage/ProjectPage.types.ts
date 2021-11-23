import { WorkProjectFrontmatterType } from "src/types/WorkProjectType.types"
import { VFileValue } from "vfile"

export interface ProjectPagePropTypes {
  markdownData: {
    frontmatterData: WorkProjectFrontmatterType
    htmlData: VFileValue
  }
}
