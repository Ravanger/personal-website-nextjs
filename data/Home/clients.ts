export interface ClientType {
  name: string
  img: string
  base64?: string
}

const Clients: ClientType[] = [
  {
    name: "Alden",
    img: "/images/clients/alden.png",
  },
  {
    name: "Emergent",
    img: "/images/clients/emergent.png",
  },
  {
    name: "George Brown College",
    img: "/images/clients/georgebrown.png",
  },
]

export default Clients
