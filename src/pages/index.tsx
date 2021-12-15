import SectionWithTitle from "components/common/SectionWithTitle"
import Spacer from "components/common/Spacer"
import CTAButton from "components/HomePage/CTAButton"
import IntroHeader from "components/HomePage/IntroHeader"
import ReachOutLink from "components/HomePage/ReachOutLink"
import type { InferGetStaticPropsType, NextPage } from "next"
import AboutMe from "data/Home/aboutme"
import ClientsAndSkills from "components/HomePage/ClientsAndSkills"
import Clients from "data/Home/clients"
import { getPlaiceholder } from "plaiceholder"

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  clientsData,
}) => {
  return (
    <>
      <IntroHeader />
      <CTAButton />
      <Spacer size="2rem" />
      <ReachOutLink />
      <Spacer size="2rem" />
      <SectionWithTitle title={AboutMe.title}>
        {AboutMe.content}
      </SectionWithTitle>
      <Spacer size="4rem" />
      <ClientsAndSkills clientsData={clientsData} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const clientsData = await Promise.all(
      Clients.map(async (client) => {
        const { base64 } = await getPlaiceholder(client.img)
        client.base64 = base64
        return client
      })
    ).then((values) => values)

    return {
      props: {
        clientsData,
      },
    }
  } catch (e) {
    console.error("Error in Home::getStaticProps", e)
    return {
      props: { clientsData: [] },
    }
  }
}

export default Home
