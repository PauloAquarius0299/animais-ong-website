import React from 'react';
import logo from '../assets/logo.png'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const links = [
  { 
    title: 'About',
    data: ['About', 'Terms', 'Legal'],
  },
  { 
    title: 'Ajuda',
    data: ['Doação', 'Compartilhar', 'Legal'],
  },
  { 
    title: 'Contatos',
    data: ['redes', 'suporte'],
  },
  { 
    title: 'Social',
    data: ['Twitter', 'Instagram', 'Facebook', 'Tiktok'],
  },
];
const sociaLink = [
  <BsFacebook />,
  <BsTwitter />,
  <BsInstagram />,
  <FaTiktok />,
];

const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Fonte de conteúdo exclusivas</p>
          <ul>
            {sociaLink.map((link, index)=> (
            <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {
            links.map(({title,data}, index) =>{
              return (
                <div className="link" key={index}>
                  <h4>{title}</h4>
                  <ul>
                  {data.map((link, index2)=> (
                  <li key={index2}>{link}</li>
                ))}
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="lower">
        <span>&copy, Paulo.Dev 
          <br />
          <a href="https://github.com/PauloAquarius0299">PauloAquarius0299</a>
        </span>
        <span>Help animais Janeiro 2024</span>
      </div>
    </footer>
  )
}

export default Footer