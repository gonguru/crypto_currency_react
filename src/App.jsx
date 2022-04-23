import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import ImagenCripto from './img/imagen-criptos.png'
import Spinner from './components/Spinner';
import Cotizacion from './components/Cotizacion';

 const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  `

 const Imagen = styled.img`
  display: block;
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
 `

const Heading = styled.h1`
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  font-family: 'Lato', sans-serif;
  color: #FFF;

  &::after {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
  `

function App() {

  const [ monedas, setMonedas ] = useState({})
  const [ cotizacion, setCotizacion ] = useState({})
  const [ loading, setloading ] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const consultarCripto = async () => {
        setCotizacion({})
        setloading(true)
        const { moneda, cripto } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const response = await fetch(url)
        const result = await response.json()
        console.log(result)
        const cotizacion = result.DISPLAY[cripto][moneda]
        setCotizacion(cotizacion)
        setloading(false)
     }
     consultarCripto()
    }
  }, [monedas])
  

  return (
    <Container>
      <Imagen 
        src={ImagenCripto}
        alt="imagen_criptomonedas"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        { loading && <Spinner/>}
        { cotizacion.PRICE && 
          <Cotizacion 
            cotizacion={cotizacion}
          />}
      </div>
    </Container>
  )
}

export default App
