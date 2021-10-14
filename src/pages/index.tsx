import SectionWithTitle from "components/common/SectionWithTitle"
import Spacer from "components/common/Spacer"
import CTAButton from "components/HomePage/CTAButton"
import IntroHeader from "components/HomePage/IntroHeader"
import ReachOutLink from "components/HomePage/ReachOutLink"
import type { NextPage } from "next"
import AboutMe from "data/Home/aboutme"

const Home: NextPage = () => {
  return (
    <>
      <IntroHeader />
      <CTAButton />
      <Spacer />
      <ReachOutLink />
      <SectionWithTitle title={AboutMe.title}>
        {AboutMe.content}
      </SectionWithTitle>
    </>
  )
}

export default Home
