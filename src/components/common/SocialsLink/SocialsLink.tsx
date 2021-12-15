import { SocialsLinkPropTypes } from "./SocialsLink.types"
import IconWithText from "../IconWithText"
import ExternalLink from "../ExternalLink"

const SocialsLink: React.FC<SocialsLinkPropTypes> = ({
  href,
  text,
  skillIcon,
}) => {
  return (
    <ExternalLink href={href}>
      <IconWithText text={text} skillIcon={skillIcon} />
    </ExternalLink>
  )
}

export default SocialsLink
