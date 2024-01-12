import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import realese1 from '../assets/realese1.png';
import realese2 from '../assets/realese2.jpg';
import Card from './Card';

export default function Realese() {
  return <div className='realeses'>
    <div className='realese blue'>
      <div className='content'>
        <h2 className='title'>Como você pode ajudar?</h2>
        <p className='description'>
          Algumas das especíes de animais da fauna brasileira em extinção:
        <a href='https://g1.globo.com/jornal-hoje/noticia/2022/08/23/lista-de-animais-ameacados-de-extincao-no-brasil-e-atualizada-depois-de-8-anos.ghtml'>Veja Mais</a>
        </p>
        <p className='description'>
        Aqui você irá descobrir quais espécies de animais da fauna brasileira sofre perigo de extinção.
        </p>
        <p className='description'>
        Se inscreva no nosso programada e ajuda cada especie da fauna brasileira.
        </p>
        <a href='#' className='link'>Se escreva e faça uma doação
        <BsArrowRight /> 
        </a>
      </div>
      <div className='image'>
        <img src={realese1} />
        <div className='ellipse purple'></div>
      </div>
    </div>
    <div className='realese yellow'>
    <div className='card-container'>
      <Card 
      image={realese2}
      series='Gato-mourisco'
      title='Caatinga e Savana'
      prince={''}
      tag={'expectativa de vida: 8 a 15 anos'}
      time={5}
      />
        <img src={''} />
        <div className='ellipse green'></div>
      </div>
    
      <div className='content'>
        <h2 className='title'>Nossos Contatos</h2>
        <p className='description'>
          Algumas das especíes de animais da fauna brasileira em extinção:
        <a href='https://g1.globo.com/jornal-hoje/noticia/2022/08/23/lista-de-animais-ameacados-de-extincao-no-brasil-e-atualizada-depois-de-8-anos.ghtml'>Veja Mais</a>
        </p>
        <p className='description'>
        Aqui você pode acessar o link que te lava para nossa pagina de contatos, onde você tera acesso ao nossas redes sociais, telefones e emails.
        </p>
        <p className='description'>
        Compartilhe nosso conteudo e nós ajude na preservação da fauna brasileira
        </p>
        <a href='#' className='link'>Pagina de contatos
        <BsArrowRight /> 
        </a>
      </div>
      </div>
  </div>
}
