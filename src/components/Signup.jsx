import React from 'react';
import signup from '../assets/signup.png'

const Signup = () => {
  return (
    <div className='signup'>
      <div className="container">
        <div className="content">
          <p className="sub-title">
            help Animais
          </p>
          <h1 className="title">Faça seu cadastro oficial</h1>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum placeat labore dicta maiores soluta ducimus tenetur.
          </p>
          <button>Se escreva</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse yellow"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
