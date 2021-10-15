import SectionWithTitle from "components/common/SectionWithTitle"
import Spacer from "components/common/Spacer"
import CTAButton from "components/HomePage/CTAButton"
import IntroHeader from "components/HomePage/IntroHeader"
import ReachOutLink from "components/HomePage/ReachOutLink"
import type { NextPage } from "next"
import AboutMe from "data/Home/aboutme"
import ClientsAndSkills from "components/HomePage/ClientsAndSkills"

const Home: NextPage = () => {
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
      <ClientsAndSkills />
    </>
  )
}

export default Home
