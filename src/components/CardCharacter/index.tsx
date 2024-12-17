import { ContainerCard } from "./Card.styles"
import { Characters } from "../Application"

interface CardCharacterProps {
  name: string
  gender: string
  species: string
  image: string
  origin: {
    name: string
  }
  status: string
  handleModal: (character: Characters) => void
}

export function CardCharacter({
  name,
  gender,
  species,
  image,
  handleModal,
  origin,
  status,
}: CardCharacterProps) {
  return (
    <ContainerCard
      onClick={() =>
        handleModal({ name, gender, species, image, origin, status })
      }
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li>Gender: {gender}</li>
          <li>Species: {species}</li>
        </ul>
      </div>
    </ContainerCard>
  )
}
