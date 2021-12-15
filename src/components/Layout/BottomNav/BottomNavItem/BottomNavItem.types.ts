import { UrlObject } from "url"

export interface BottomNavItemPropTypes {
  url: string | UrlObject
  text: string
  icon: JSX.Element
  isActive?: boolean
}
