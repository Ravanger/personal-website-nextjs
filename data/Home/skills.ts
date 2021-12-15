import { FaReact, FaNodeJs, FaSass } from "react-icons/fa"
import { IconType } from "react-icons/lib"
import { SiTypescript, SiBlender, SiAdobe } from "react-icons/si"

interface SkillType {
  name: string
  icon: IconType
}

const Skills: SkillType[] = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Typescript", icon: SiTypescript },
  { name: "Sass", icon: FaSass },
  { name: "Blender", icon: SiBlender },
  { name: "Adobe", icon: SiAdobe },
]

export default Skills
