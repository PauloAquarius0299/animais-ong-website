import React from 'react';
import eth1 from '../assets/eth1.jpg';
import eth2 from '../assets/eth2.jpg';
import { BsArrowRight } from 'react-icons/bs'

export default function Like() {
  return (
    <div className='like'>
      <div className="container">
        <div className="content">
        <div className="image">
          <img src={eth2} alt="" />
          </div>
          <h2 className='title'>Quem somos nós e qual é nosso objetivo? </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae magnam velit est voluptates amet ex! Ullam neque voluptatum quisquam officia, blanditiis vel cupiditate sunt voluptas fugiat aut excepturi accusantium.
          </p>
          <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas reiciendis officiis! Voluptate error ut suscipit doloribus, labore cupiditate.
          <a href="#" className='link'>Saiba mais
          <BsArrowRight />
          </a>
          </p>
          </div>
          <div className="content">
        <div className="image">
          <img src={eth1} alt="" />
          </div>
          <h2 className='title'>Saiba como cuidar da saúde do seu pet </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae magnam velit est voluptates amet ex! Ullam neque voluptatum quisquam officia, blanditiis vel cupiditate sunt voluptas fugiat aut excepturi accusantium.
          </p>
          <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas reiciendis officiis! Voluptate error ut suscipit doloribus, labore cupiditate.
          <a href="#" className='link'>Saiba mais
          <BsArrowRight />
          </a>
          </p>
          </div>
      </div>
    </div>
  )
}
