import fs from "fs"
import { join } from "path"
import { remark } from "remark"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkHtml from "remark-html"
import { WorkProjectFrontmatterType } from "src/types/WorkProjectType.types"

const remarkProcessor = remark()
  .use(remarkHtml)
  .use(remarkFrontmatter)
  .use(remarkParseFrontmatter, {
    properties: {
      title: { type: "string", required: true },
      year: { type: "number", required: true },
      siteUrl: { type: "string" },
      sourceUrl: { type: "string" },
      mainImage: { type: "string", required: true },
      tags: { type: "array", maxItems: 4, required: true },
    },
  })
  .freeze()

const processesMarkdown = (fullPath: string) => {
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const processedData = remarkProcessor.processSync(fileContents)

  const frontmatterData: WorkProjectFrontmatterType = processedData.data
    .frontmatter as WorkProjectFrontmatterType

  return { frontmatterData, htmlData: processedData.value }
}

export const getMarkdownDataByFile = (file: string, dir: string) => {
  const fullPath = join(dir, file)
  const data = processesMarkdown(fullPath)
  data.frontmatterData.slug = file.replace(/\.md$/, "")
  return data
}

export const getMarkdownDataBySlug = (slug: string, relativePath: string) => {
  const fullPath = join(process.cwd(), relativePath, `${slug}.md`)
  const data = processesMarkdown(fullPath)
  data.frontmatterData.slug = slug

  return data
}

export const getProcessedMarkdownFiles = (relativePath: string) => {
  const dir = join(process.cwd(), relativePath)

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => getMarkdownDataByFile(file, relativePath))
    .sort((file1, file2) => {
      return file1.frontmatterData.date > file2.frontmatterData.date ? -1 : 1
    })

  return files
}

export const getAllFrontmatterData = (relativePath: string) => {
  return getProcessedMarkdownFiles(relativePath).map(
    (file) => file.frontmatterData
  )
}

export const getFileSlugs = (relativePath: string) => {
  const dir = join(process.cwd(), relativePath)

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))

  return files
}
