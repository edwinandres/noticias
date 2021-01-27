import React from 'react'
import style from './Formulario.module.css'
import useSelect from './hooks/useSelect'
import PropTypes from 'prop-types'

const Formulario = ({guardarCategoria}) => {

    

    const OPCIONES =[
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnologia'}
    ]
    const [categoria, Seleccionar] = useSelect('general', OPCIONES)

    const actualizarCategoria = e => {
        e.preventDefault()
        guardarCategoria(categoria)
    }

    return (
        <div className={`${style.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={actualizarCategoria}
                >
                    <h2 className={style.heading}>Encuentra noticias por categoria</h2>
                    <div className='input-field col s12'>
                        <Seleccionar/>
                        <input 
                            type='submit'
                            //las dos formas de agregar las clases css al boton segun guion o guion bajo
                            //className={`${style.btn_block} btn-large amber darken-2`}
                            className={`${style['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario
