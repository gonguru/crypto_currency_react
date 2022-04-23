import styled from "@emotion/styled"

const Resultado = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: center;
`

const Imagen = styled.img`
    max-width: 5rem;
    padding: 10px;
    max-height: 150px;
    object-fit: cover;
    align-self: center;
`

const Text = styled.p`
    font-size: 1rem;
    span {
        font-weight: 700;
    }
`
const Price = styled.p`
    font-size: 1.5rem;
    span {
        font-weight: 700;
    }
`
const Cotizacion = ({cotizacion}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
    
  return (
    <Resultado>
        <Imagen src={`https://www.cryptocompare.com${IMAGEURL}`} alt="cripto_image" />
        <div>
            <Price>El precio es de:  <span>{PRICE}</span></Price>
            <Text>Precio más alto del día:  <span>{HIGHDAY}</span></Text>
            <Text>Precio más bajo del día:  <span>{LOWDAY}</span></Text>
            <Text>Variación últimas 24h:  <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Última actualización:  <span>{LASTUPDATE}</span></Text>
        </div>
    </Resultado>
  )
}

export default Cotizacion