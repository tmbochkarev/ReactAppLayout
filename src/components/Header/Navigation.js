import React from 'react';
import './Navigation.css';


const link = `https://www.google.com`;

function Navigation (props) {
  return (
    <nav role="navigation">
      <h1><a href="#">Asperion</a></h1>
      <ul class="nav-ul">
        <li><a href={link} target='_blank'>Home</a></li>
        <li><a href={link} target='_blank'>About Us</a></li>
        <li><a href={link} target='_blank'>Technologies</a></li>
        <li><a href={link} target='_blank'>Projects</a></li>
        <li><a href={link} target='_blank'>Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;