import styled from "@emotion/styled"

const Text = styled.div`
    background-color: red;
    color: white;
    padding: .5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    border-radius: 10px;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default Error