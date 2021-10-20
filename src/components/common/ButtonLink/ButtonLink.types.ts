import { MouseEventHandler } from "react"

export interface ButtonPropTypes {
  className?: string
  href?: string
  type?: "button" | "submit" | "reset"
  form?: string
  value?: string | number | readonly string[]
  onClick?: MouseEventHandler<HTMLButtonElement>
}
