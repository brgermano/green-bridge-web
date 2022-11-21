import React from 'react';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Olá, Matheus Gagliardi</h1>
      <div className="balance-box">
        <p>Saldo disponível para investimento:</p>
        <h3>R$ 8.600</h3>
      </div>

      <h2>Conheça nossos projetos:</h2>

      <div className='home-card'>
        <div className='home-card-left'>
          <img 
            src='https://epa.aero/wp-content/uploads/magem-sp-negocios-img-002.jpg' 
            alt="sp 1" 
            height="120px"
            width="100px"
          />
        </div>

        <div className='home-card-right'>
          <h2>Projeto SP Verde</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
      </div>
    </div>
  )
}

export default Home;