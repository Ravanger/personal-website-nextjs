import { ProjectsListPropTypes } from "./ProjectsList.types"
import styles from "./ProjectsList.module.scss"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import WorkCard from "../WorkCard"

const ProjectsList: React.FC<ProjectsListPropTypes> = ({ workData }) => {
  return (
    <ResponsiveGrid className={styles.container}>
      {workData.map((workProject, index) => {
        return (
          <WorkCard key={workProject.title + index} projectData={workProject} />
        )
      })}
    </ResponsiveGrid>
  )
}

export default ProjectsList
