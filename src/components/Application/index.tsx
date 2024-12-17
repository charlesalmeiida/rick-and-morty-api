import { CardCharacter } from "../CardCharacter"
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./App.styles"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { ModalCharacter } from "../ModalCharacter"

export interface Characters {
  name: string
  gender: string
  species: string
  image: string
  origin: {
    name: string
  }
  status: string
}

interface Info {
  count: number
}

export function Application() {
  const [characters, setCharacters] = useState<Characters[]>([])
  const [info, setInfo] = useState<Info>()
  const [page, setPage] = useState(1)
  const [isLoader, setLoader] = useState(true)
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedCharater, setSelectedCharacter] = useState<Characters | null>()

  useEffect(() => {
    api.get(`?page=${page}`).then((response) => {
      const array = [...characters, ...response.data.results]
      setCharacters(array)
    })
    api.get("/").then((response) => setInfo(response.data.info))
    setLoader(false)
  }, [page])

  const handleClick = () => setPage(page + 1)

  const openModal = (character: Characters) => {
    setSelectedCharacter(character)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      {isLoader && (
        <Loader>
          <img src="./loader.gif" alt="" />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <h1>Rick and Morty API</h1>
          <span>Nº de personagens: {info?.count}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {characters?.map(
              (
                { name, status, gender, species, image, origin }: Characters,
                index
              ) => (
                <CardCharacter
                  origin={origin}
                  status={status}
                  handleModal={openModal}
                  key={index}
                  name={name}
                  gender={gender}
                  species={species}
                  image={image}
                />
              )
            )}
          </div>
          {isModalOpen && selectedCharater && (
            <ModalCharacter
              handleModal={closeModal}
              gender={selectedCharater.gender}
              image={selectedCharater.image}
              name={selectedCharater.name}
              origin={selectedCharater.origin.name}
              species={selectedCharater.species}
              status={selectedCharater.status}
            />
          )}
          {page < 42 && <button onClick={handleClick}>Carregar mais</button>}
        </ContentCharacters>
      </ContainerApp>
    </>
  )
}
