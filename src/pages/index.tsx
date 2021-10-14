import Spacer from "components/common/Spacer"
import CTAButton from "components/HomePage/CTAButton"
import IntroHeader from "components/HomePage/IntroHeader"
import ReachOutLink from "components/HomePage/ReachOutLink"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <IntroHeader />
      <CTAButton />
      <Spacer />
      <ReachOutLink />
    </>
  )
}

export default Home
