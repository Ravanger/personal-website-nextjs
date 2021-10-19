import type { InferGetStaticPropsType, NextPage } from "next"
import ImageGrid from "components/ArtPage/ImageGrid"
import artData from "data/Art/art"
import { getPlaiceholder } from "plaiceholder"
import Spacer from "components/common/Spacer"

const Art: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  artData,
}) => {
  return (
    <>
      <ImageGrid artData={artData} />
      <Spacer size="6rem" />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const data = await Promise.all(
      artData.map(async (artpiece) => {
        let imageToEncode = ""
        switch (artpiece.type) {
          case "STILL":
            imageToEncode = artpiece.image
            break
          case "VIDEO":
            imageToEncode = artpiece.video_still || ""
            break
        }

        const { base64 } = await getPlaiceholder(imageToEncode)
        artpiece.base64 = base64
        return artpiece
      })
    ).then((values) => values)

    return {
      props: {
        artData: data,
      },
    }
  } catch (e) {
    console.error("Error in art::getStaticProps", e)
    return {
      props: { artData: [] },
    }
  }
}

export default Art
