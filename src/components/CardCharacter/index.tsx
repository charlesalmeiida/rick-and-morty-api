import { ContainerCard } from "./styles"

interface CardCharacterProps {
  name: string
  gender: string
  species: string
  image: string
}

export function CardCharacter({
  name,
  gender,
  species,
  image,
}: CardCharacterProps) {
  return (
    <ContainerCard>
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
