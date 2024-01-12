import React from 'react';
import Card from './Card';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';
import animal4 from '../assets/animal4.jpg';

export default function SuperRare() {
  const data = [
    {
      image: animal1,
      series: 'Onça Pintada',
      title: 'Florestas tropicais úmidas',
      tag: 'expectativa de vida: 10 a 12 anos',
      time: 1,
    },
    {
      image: animal2,
      series: 'Tartaruga-de-couro',
      title: 'Ambiente marinho',
      tag: 'expectativa de vida: 30 a 50 anos',
      time: 2,
    },
    {
      image: animal3,
      series: 'Tatu-Bola',
      title: 'Caatinga',
      tag: 'expectativa de vida: 9 a 15 anos',
      time: 3,
    },
    {
      image: animal4,
      series: 'Tamanduá-bandeira',
      title: 'Tropicaís e Savanas',
      tag: 'expectativa de vida: 10 a 15 anos',
      time: 4,
    },
  ];
  return <div className='super-rare'>
    <div className='title-container'>
      <h2 className='title'> Especíes em extinção</h2>
      <p className='description'>
        Algumas das especíes de animais da fauna brasileira em extinção:
        <a href='https://g1.globo.com/jornal-hoje/noticia/2022/08/23/lista-de-animais-ameacados-de-extincao-no-brasil-e-atualizada-depois-de-8-anos.ghtml'>Veja Mais</a>
      </p> 
    </div>
    <div className='cards'>
      {
        data.map(({image, series, title, price, tag, time}, index) =>
        <Card 
          image={image}
          series={series}
          title={title}
          price={price}
          tag={tag}
          time={time}
          key={index}
          />
        )
      }
    </div>
  </div>
}