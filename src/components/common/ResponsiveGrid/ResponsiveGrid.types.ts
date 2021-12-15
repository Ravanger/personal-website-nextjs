import {
  AnimationControls,
  Target,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion"
import { MutableRefObject } from "react"

export interface ResponsiveGridPropTypes {
  className?: string
  forwardRef?: MutableRefObject<any>
  initial?: boolean | Target | VariantLabels
  animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition
  exit?: VariantLabels | TargetAndTransition
}
