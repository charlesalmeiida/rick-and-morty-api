import styled from "styled-components"

export const ModalContainer = styled.div`
  display: flex !important;
  width: 100%;
  position: fixed;
  padding: 2rem;
  background-color: #040011;
  max-width: fit-content;
  border-radius: 0.4rem;
  top: 25%;
  left: 40%;
  img {
    width: 24.3rem;
    height: 24.3rem;
    object-fit: cover;
    border-radius: 0.4rem;
  }
`

export const InfoCharacter = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 1.6rem;
  h2 {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }
  ul {
    max-width: fit-content;
    li {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }
  }
`

export const ButtonClose = styled.div`
  font-size: 2.4rem;
  position: absolute;
  right: 1rem;
  top: 0;
  cursor: pointer;
`
