import React from 'react'
import "../index.css";
import img from "../images/DH.png";
import fb from "../images/ico-facebook.png";
import wp from "../images/ico-whatsapp.png";
import ig from "../images/ico-instagram.png";
import tik from "../images/ico-tiktok.png";
import { useAppContext } from './AppContext';


const Footer = () => {
  const { state, dispatch } = useAppContext();


  return (
    <footer className={state.theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <img src={img} alt='DH-logo' className="logo" />
        <a href="www.facebook.com">
          {" "}
          <img className="redes" src={fb} alt="" />
        </a>
        <a href="www.instagram.com">
          {" "}
          <img className="redes" src={ig} alt="" />
        </a>
        <a href="www.whatsapp.com">
          {" "}
          <img className="redes" src={wp} alt="" />
        </a>
        <a href="www.tiktok.com">
          {" "}
          <img className="redes" src={tik} alt="" />
        </a>
    </footer>
  )
}

export default Footer
