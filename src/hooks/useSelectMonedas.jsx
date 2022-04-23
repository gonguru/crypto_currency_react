import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    display: block;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    margin: 10px 0;
`

const Select = styled.select`
    width: 100%;
    padding: 10px 0;
    border: none;
    margin: 10px 0;
    border-radius: 10px;
    text-align: center;
`
const useSelectMonedas = (label, opciones) => {

    const [ state, setState ] = useState('')

    const selectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select name="" id=""
                value={state}
                onChange={ e => {setState(e.target.value)}}>
                <option value="" disabled={true}>-- Seleccione --</option>
                {
                    opciones.map(option => (
                        <option
                            key={option.id}
                            value={option.id}
                        >{option.nombre}</option>
                    ))
                }
            </Select>
        </>
    )

    return [state, selectMonedas]
}

export default useSelectMonedas