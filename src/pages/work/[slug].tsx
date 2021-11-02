import { GetStaticPropsContext, GetStaticPaths, NextPage } from "next"

interface Props {
  post: string
}

const BlogPost: NextPage<Props> = ({ post }) => {
  return (
    <>
      <PostContent post={post} />
    </>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params
  const postData = getPostData(slug)
  return {
    props: {
      post: postData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""))
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default BlogPost
