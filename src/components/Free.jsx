import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import Card from './Card';
import super1 from '../assets/super1.jpg';

 import release2 from '../assets/release2.JPG';

const Free = () => {
  return (
    <div className='free'>
      <div className="container">
        <div className="background">
          <div className="ellipse right"></div>
          <div className="ellipse left"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={''} alt="" />
          </div>
          <h2 className='title'>Cada animal em extinção enfrenta dificuldades </h2>
          <p className="description">
          Aqui você irá descobrir quais espécies de animais da fauna brasileira sofre <br /> perigo de extinção.
        
          </p>
          <p className='description'>
          Se inscreva no nosso programada e ajuda cada especie da fauna brasileira.
          <br /> 
          <a href='#' className='link'>Se escreva
          <BsArrowRight />
          </a>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card 
          image={super1}
          series='Mico Leão Dourado'
          title='Mata Atlântica do Brasil'
          price={''}
          tag={12983}
          time={3}
          />
        </div>
        <div className='card2'>
        <Card 
          image={release2}
          series='Onça Pintada'
          title='Florestas tropicais úmidas '
          price={''}
          tag={12983}
          time={4}
          />
        </div>
        <div className="card2"></div>
      </div>
    </div>
  )
}

export default Free
