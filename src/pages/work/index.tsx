import type { InferGetStaticPropsType, NextPage } from "next"
import ProjectsList from "components/WorkPage/ProjectsList"
import Spacer from "components/common/Spacer"
import { getSortedMarkdownData } from "src/util/markdown"
import { ROUTES } from "src/config/routes"

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
  const workProjects = getSortedMarkdownData(ROUTES.work)

  return {
    props: {
      workProjects,
    },
  }
}

export default Work
