import fs from "fs"
import { join } from "path"
import { remark } from "remark"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkHtml from "remark-html"
import { WorkProjectFrontmatterType } from "src/types/WorkProjectType.types"

const WORK_DIR = join(process.cwd(), "data/Work")

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

export const getMarkdownDataByFile = (file: string, dir: string) => {
  const fullPath = join(dir, file)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const processedData = remarkProcessor.processSync(fileContents)

  const frontmatterData: WorkProjectFrontmatterType = processedData.data
    .frontmatter as WorkProjectFrontmatterType

  return { frontmatterData, htmlData: processedData.value }
}

export const getMarkdownFiles = (dir = WORK_DIR) => {
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => getMarkdownDataByFile(file, dir))
    .sort((file1, file2) => {
      return file1.frontmatterData.date > file2.frontmatterData.date ? -1 : 1
    })

  return files
}
