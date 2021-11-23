import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { GetStaticPaths, NextPage } from "next"
import { getFileSlugs, getMarkdownDataBySlug } from "src/util/markdown"
import InferNextPropsType from "infer-next-props-type"
import ProjectPage from "components/WorkPage/ProjectPage"

const WorkProject: NextPage<InferNextPropsType<typeof getStaticProps>> = ({
  markdownData,
}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />
  }

  return <ProjectPage markdownData={markdownData} />
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const markdownData = getMarkdownDataBySlug(params.slug, "data/Work")

  return {
    props: {
      markdownData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFileSlugs("data/Work")

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
