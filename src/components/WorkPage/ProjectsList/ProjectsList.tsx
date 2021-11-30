import { ProjectsListPropTypes } from "./ProjectsList.types"
import styles from "./ProjectsList.module.scss"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import WorkCard from "../WorkCard"

const ProjectsList: React.FC<ProjectsListPropTypes> = ({ workData }) => {
  return (
    <ResponsiveGrid className={styles.container}>
      {workData.map((workProject) => {
        return (
          <WorkCard
            key={workProject.frontmatter.slug}
            frontmatter={workProject.frontmatter}
          />
        )
      })}
    </ResponsiveGrid>
  )
}

export default ProjectsList
