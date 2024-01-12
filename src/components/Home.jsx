import React from 'react';
import home from '../assets/home.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='content' >
          <p className='sub-title'>Arara Azul</p>
          <h1 className='title'> Uma belissíma ave em extinção</h1>
          <p className='description'>
          As principais ameaças à sua sobrevivência incluem a perda de habitat devido ao desmatamento, a captura ilegal para o comércio de animais de estimação e a caça. A destruição do Cerrado para a agricultura e a pecuária tem sido uma das principais razões para a redução do habitat dessas aves.
          </p>
          <a href="https://www.nationalgeographicbrasil.com/animais/2023/09/de-arara-azul-a-pica-pau-conheca-5-aves-brasileiras-ameacadas-de-extincao"><button>Saiba Mais</button></a>
        </div>
        <div className='image-container'>
          <div className='image'>
            <img src={home} alt='' />
          </div>
          <div className='ellipse-container'>
            <div className='ellipse green'></div>
            <div className='ellipse blue'></div>
            
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Home