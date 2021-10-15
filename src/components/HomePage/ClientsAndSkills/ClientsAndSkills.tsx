import styles from "./ClientsAndSkills.module.scss"
import Clients from "data/Home/clients"
import { ClientsAndSkillsPropTypes } from "./ClientsAndSkills.types"
import ResponsiveGrid from "components/common/ResponsiveGrid"
import PatternTitleText from "components/common/PatternTitleText/PatternTitleText"
import Spacer from "components/common/Spacer"
import Image from "next/image"

const ClientsAndSkills: React.FC<ClientsAndSkillsPropTypes> = () => {
  return (
    <div className={styles.bg}>
      <Spacer size="2rem" />
      <ResponsiveGrid className={styles.content}>
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
      </ResponsiveGrid>
    </div>
  )
}

export default ClientsAndSkills
