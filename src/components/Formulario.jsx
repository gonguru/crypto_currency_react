import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'

import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 5px;
  transition: background-color .3s ease;
  ::hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }

`

const Formulario = ({setMonedas}) => {

  const [ criptos, setCriptos ] = useState([])
  const [ error, setError ] = useState(false)
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
  const [ cripto, SelectCripto ] = useSelectMonedas('Elige tu Cripto', criptos)

  useEffect( () => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const response = await fetch(url)
      const result = await response.json()

      const arrayCriptos = result.Data.map( cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCriptos)
    }
    consultarAPI()
  },[])

  const handleSubmit = e => {
    e.preventDefault()

    if([moneda, cripto].includes('')){
      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      cripto
    })
  }

  return (
    <form 
      onSubmit={handleSubmit}>
      <SelectMonedas/>
      <SelectCripto/>
      { error && <Error>Todos los campos son obligatorios</Error>}
      <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario