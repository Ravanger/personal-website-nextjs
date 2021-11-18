import type { InferGetStaticPropsType, NextPage } from "next"
import ProjectsList from "components/WorkPage/ProjectsList"
import Spacer from "components/common/Spacer"
import { getAllFrontmatterData } from "src/util/markdown"

const Work: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  workProjects,
}) => {
  return (
    <>
      <ProjectsList workData={workProjects} />
      <Spacer size="6rem" />
    </>
  )
}

export const getStaticProps = async () => {
  const workProjects = getAllFrontmatterData("data/Work")

  return {
    props: {
      workProjects,
    },
  }
}

export default Work
