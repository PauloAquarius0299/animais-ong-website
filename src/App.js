import React, {useState,useEffect} from 'react';
import scrollreveal from 'scrollreveal';
import Clients from './components/Clients';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Like from './components/Like';
import Free from './components/Free';
import SuperRare from './components/SuperRare';
import Realese from './components/Realese';
import Signup from './components/Signup';
import Footer from './components/Footer';
import "./scss/index.scss"

function App() {
  const [theme,setTheme] = useState('dark');
  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(`
      nav,
      .home,
      .free,
      .clients,
      .super-rare,
      .realeses,
      .like,
      .signup,
      .footer
      `,
       {
        interval: 500,
       }
      );
    };
    registerAnimations()
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div className='app-container' data-theme={theme}>
       <ScrollToTop /> 
       <Navbar changeTheme={changeTheme} currentTheme={theme} />
       <Home />
       <Free />
       <Clients />
       <SuperRare />
       <Realese />
       <Like />
       <Signup />
       <Footer />
    </div>
  )
}

export default App
