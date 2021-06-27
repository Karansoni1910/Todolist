import React from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaLinkedin,FaGithubSquare } from 'react-icons/fa';

export const Footer = () => {

    return (
        <footer className="bg-dark text-light py-3 my-3" style={{
        position: 'relative',
        width: '100%',
        top: '10vh'
        }} >
            <div fluid className="text-center">
        <>
          <li md="6">
            <h3 className="title">Karan Soni</h3>
          </li>
          <li md="6">
            <h5 className="text-center">Find Me</h5>
            <h5> <a href={"https://www.linkedin.com/in/karan-soni-a021b4188/"}> <FaLinkedin/></a></h5>
            <h5> <a href={"https://github.com/Karansoni1910/"}> <FaGithubSquare/></a></h5>
            <h5> <a href={"https://www.instagram.com/karansoni19102/"}> <FaInstagramSquare/></a></h5>
            <h5> <a href={"https://www.facebook.com/profile.php?id=100014319942616"}> <FaFacebookSquare/></a></h5>
          </li>
        </>
      </div>
        </footer>
    )
}