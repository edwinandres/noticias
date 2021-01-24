import React , { useState }from 'react'

const useSelect = (stateInicial, opciones) => {

    const [categoria, guardarCategoria] = useState(stateInicial)
    

    const Seleccionar = () =>(
        <select
            className='browser-default'
            value={categoria}
            onChange={e => guardarCategoria(e.target.value)}
            
        >
            
            {opciones.map(opcion => (
                
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                //console.log(opcion.label)
                
    ))}
        </select>
    )

    return [categoria, Seleccionar]
}

export default useSelect
