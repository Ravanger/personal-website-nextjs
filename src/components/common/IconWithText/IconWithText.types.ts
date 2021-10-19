import { Key, ReactElement } from "react"

export interface IconWithTextPropTypes {
  key?: Key | null
  skillIcon: ReactElement
  text: string
}
