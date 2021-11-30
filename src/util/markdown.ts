import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import {
  WorkProjectFrontmatterType,
  WorkProjectType,
} from "src/types/WorkProjectType.types"

const getFileSlug = (file: string) => {
  return file.replace(/\.md$/, "")
}

const getFileContents = (fullPath: string) => {
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return fileContents
}

const separateMarkdownData = (rawData: string) => {
  const { content, data } = matter(rawData)
  return { markdown: content, rawFrontmatter: data }
}

const mapFrontmatterData = (
  rawFrontmatter: { [key: string]: any },
  slug: string
) => {
  const frontmatter: WorkProjectFrontmatterType = {
    title: rawFrontmatter.title || "Title",
    year: rawFrontmatter.year || new Date().getFullYear(),
    date: rawFrontmatter.date.toString() || new Date().toISOString(),
    siteUrl: rawFrontmatter.siteUrl || null,
    sourceUrl: rawFrontmatter.sourceUrl || null,
    mainImage: rawFrontmatter.mainImage || "/images/missing.jpg",
    tags: rawFrontmatter.tags || [],
    snippet: rawFrontmatter.snippet || "Project snippet",
    slug,
  }

  return frontmatter
}

export const getMarkdownDataBySlug = (
  slug: string,
  relativePath: string
): WorkProjectType => {
  const fullPath = join(process.cwd(), relativePath, `${slug}.md`)
  const data = getFileContents(fullPath)
  const { markdown, rawFrontmatter } = separateMarkdownData(data)
  const frontmatter = mapFrontmatterData(rawFrontmatter, slug)

  return { markdown, frontmatter }
}

export const getAllMarkdownFiles = (relativePath: string) => {
  const dir = join(process.cwd(), relativePath)
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"))

  return files
}

export const getSortedMarkdownData = (relativePath: string) => {
  const files = getAllMarkdownFiles(relativePath)
  const processedFiles = files
    .map((file) => {
      return getMarkdownDataBySlug(getFileSlug(file), relativePath)
    })
    .sort((file1, file2) => {
      return new Date(file1.frontmatter.date) > new Date(file2.frontmatter.date)
        ? -1
        : 1
    })
  return processedFiles
}

export const getAllMarkdownFileSlugs = (relativePath: string) => {
  const files = getAllMarkdownFiles(relativePath).map((file) => {
    return getFileSlug(file)
  })

  return files
}
