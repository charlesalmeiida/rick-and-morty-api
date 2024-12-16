import { CardCharacter } from "../CardCharacter"
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./styles"
import { api } from "../../services/api"
import { useEffect, useState } from "react"

interface Characters {
  id: number
  name: string
  gender: string
  species: string
  image: string
}

interface Info {
  count: number
}

export function Application() {
  const [characters, setCharacters] = useState<Characters[]>([])
  const [info, setInfo] = useState<Info>()
  const [page, setPage] = useState(1)
  const [isLoader, setLoader] = useState(true)

  useEffect(() => {
    api.get(`?page=${page}`).then((response) => {
      const array = [...characters, ...response.data.results]
      setCharacters(array)
    })
    api.get("/").then((response) => setInfo(response.data.info))
    setLoader(false)
  }, [page])

  const handleClick = () => setPage(page + 1)

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
              ({ id, name, gender, species, image }: Characters) => (
                <CardCharacter
                  key={id}
                  name={name}
                  gender={gender}
                  species={species}
                  image={image}
                />
              )
            )}
          </div>
          {page < 42 && <button onClick={handleClick}>Carregar mais</button>}
        </ContentCharacters>
      </ContainerApp>
    </>
  )
}
