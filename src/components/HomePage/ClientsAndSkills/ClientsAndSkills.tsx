import styles from "./ClientsAndSkills.module.scss"
import Clients from "data/Home/clients"
import Skills from "data/Home/skills"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import PatternTitleText from "components/common/PatternTitleText/PatternTitleText"
import Spacer from "components/common/Spacer"
import Image from "next/image"
import IconWithText from "components/common/IconWithText"

const ClientsSection: React.FC = () => {
  return (
    <>
      <PatternTitleText title="Clients" alignDir="RIGHT" />
      <div className={styles.clientLogos}>
        {Clients.map((client) => {
          return (
            <div className={styles.logo} key={client.name}>
              <Image
                src={client.img}
                alt={client.name}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

const SkillsSection: React.FC = () => {
  return (
    <div className={styles.skillsSection}>
      {Skills.map((skill) => (
        <IconWithText
          key={skill.name}
          skillIcon={<skill.icon />}
          text={skill.name}
        />
      ))}
    </div>
  )
}

const ClientsAndSkills: React.FC = () => {
  return (
    <div className={styles.bg}>
      <Spacer size="4rem" />
      <ResponsiveGrid className={styles.content}>
        <ClientsSection />
        <Spacer size="6rem" className={styles.fullstretch} />
        <SkillsSection />
      </ResponsiveGrid>
    </div>
  )
}

export default ClientsAndSkills
