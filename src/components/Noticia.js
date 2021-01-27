import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {

    const {url, urlToImage, source, description, title} =noticia

    //cargar imagen o null
    const imagen = (urlToImage)?
        <div className='card-image'>
            <img src={urlToImage} alt={title}/>
            <span className='card-title'>{source.name}</span>
        </div>
        :null

        //hola
        ///ENSAYO DE MERGE 
        //PRUEBA

    return (
        <div className='col s12 m6 l4'>
            <div className='card'>
                {imagen}
                <div className ='card-content'>
                    <h3>{title} </h3>
                    <p>{description}</p>                  
                </div>
                
                <div className='card-action'>
                    <a 
                        href={url}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='waves-effect waves-light btn'
                    >Ver noticia</a>

                </div>
            </div>


        
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
