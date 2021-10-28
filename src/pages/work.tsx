import type { NextPage } from "next"
import ProjectsList from "components/WorkPage/ProjectsList"
import WorkData from "data/Work/work"
import Spacer from "components/common/Spacer"

const Work: NextPage = () => {
  return (
    <>
      <ProjectsList workData={WorkData} />
      <Spacer size="6rem" />
    </>
  )
}

export default Work
