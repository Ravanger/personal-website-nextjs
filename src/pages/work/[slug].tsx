import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { GetStaticPaths, NextPage } from "next"
import {
  getAllMarkdownFileSlugs,
  getMarkdownDataBySlug,
} from "src/util/markdown"
import InferNextPropsType from "infer-next-props-type"
import ProjectPage from "components/WorkPage/ProjectPage"
import { ROUTES } from "src/config/routes"
import Spacer from "components/common/Spacer"

const WorkProject: NextPage<InferNextPropsType<typeof getStaticProps>> = ({
  markdownData,
}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <ProjectPage markdownData={markdownData} />
      <Spacer size="6rem" />
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const markdownData = getMarkdownDataBySlug(params.slug, ROUTES.work)

  return {
    props: {
      markdownData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getAllMarkdownFileSlugs(ROUTES.work)

  return {
    paths: files.map((file) => {
      return {
        params: {
          slug: file,
        },
      }
    }),
    fallback: false,
  }
}

export default WorkProject
