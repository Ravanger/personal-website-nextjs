import styles from "./ImageGrid.module.scss"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import { ImageGridPropTypes } from "./ImageGrid.types"
import Image from "next/image"

const ImageGrid: React.FC<ImageGridPropTypes> = ({ artData }) => {
  const renderArray = artData.map((artPiece) => {
    const imageToRender = (
      <Image
        key={artPiece.image}
        src={artPiece.image}
        alt={artPiece.name}
        width={1024}
        height={1024}
        sizes="50vw,100vw"
        placeholder="blur"
        blurDataURL={artPiece.base64}
        objectFit="cover"
      />
    )

    return (
      <div className={styles.artImage} key={artPiece.image}>
        {(() => {
          switch (artPiece.type) {
            case "STILL":
              return imageToRender

            case "VIDEO":
              return (
                <video width="448" height="448" autoPlay loop muted>
                  <source src={artPiece.image} type="video/mp4" />
                  {imageToRender}
                </video>
              )
            default:
              return null
          }
        })()}
      </div>
    )
  })

  return <ResponsiveGrid>{renderArray}</ResponsiveGrid>
}

export default ImageGrid
