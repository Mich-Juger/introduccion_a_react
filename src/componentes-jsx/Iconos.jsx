import '../componentes-css/Iconos.css'
import React, { Component } from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";


class Iconos extends Component {
  render() {
    return (
      <div>
        <BsInstagram/>  <BsFacebook/> <BsTwitter/> <BsWhatsapp/> <BsYoutube/>
      </div>
      );
  }
}

export default Iconos;