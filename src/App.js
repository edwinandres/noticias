import React , { Fragment, useEffect, useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import axios from 'axios'
import ListadoNoticias from './components/ListadoNoticias'


function App() {

  const [categoria, guardarCategoria] = useState('Seleccione una categoria')
  const [noticias, guardarNoticias] = useState([])
  //prueba para hacer merge

  useEffect(() => {
    const consultarNoticias = async () =>{
      const url=`http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=896d6ab30f7b4cd9961783c820c7f638`
      const resultado = await axios.get(url)
      console.log(resultado.data)
      guardarNoticias(resultado.data.articles)
    }
    consultarNoticias()

  },[categoria])

  return (
    <Fragment >
      <Header
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
      <ListadoNoticias
        noticias={noticias}
      />
      
    </Fragment>
  );
}

export default App;
