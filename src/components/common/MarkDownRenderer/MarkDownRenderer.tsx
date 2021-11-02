import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react"

const MarkDownRenderer: React.FC = ({ children }) => {
  const MarkdownComponents = {
    p: (paragraph: ReactMarkdownProps) => {
      const { node } = paragraph

      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "")
        const isPriority = image.properties.alt
          ?.toLowerCase()
          .includes("{priority}")
        const metaWidth = image.properties.alt.match(/{([^}]+)x/)
        const metaHeight = image.properties.alt.match(/x([^}]+)}/)
        const width = metaWidth ? metaWidth[1] : "768"
        const height = metaHeight ? metaHeight[1] : "432"

        return (
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
        )
      }
      return <p>{paragraph.children}</p>
    },
  }

  return (
    <ReactMarkdown components={MarkdownComponents}>{"# Test"}</ReactMarkdown>
  )
}

export default MarkDownRenderer
