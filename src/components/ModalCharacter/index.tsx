import {
  Backdrop,
  ButtonClose,
  InfoCharacter,
  ModalContainer,
} from "./Modal.styles"

interface ModalCharacterProps {
  name: string
  gender: string
  species: string
  image: string
  status: string
  origin: string
  handleModal: () => void
}

export function ModalCharacter({
  name,
  gender,
  species,
  image,
  status,
  origin,
  handleModal,
}: ModalCharacterProps) {
  return (
    <Backdrop>
      <ModalContainer onClick={handleModal}>
        <ButtonClose>X</ButtonClose>
        <img src={image} alt="" />
        <InfoCharacter>
          <h2>{name}</h2>
          <ul>
            <li>Gender: {gender}</li>
            <li>Status: {status}</li>
            <li>Species: {species}</li>
            <li>Origin: {origin}</li>
          </ul>
        </InfoCharacter>
      </ModalContainer>
    </Backdrop>
  )
}
