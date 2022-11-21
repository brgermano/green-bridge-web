import React, { useState, useEffect } from 'react';
import { getBalance } from './services';

import './styles.css';

function Home() {
  const [userData, setUserData] = useState({
    balance: '',
    nome: '',
  })

  useEffect(() => {
    async function fetchUser() {
      const response = await getBalance();

      if (response) {
        setUserData(response)
      }

      console.log('response', response);
    }
    fetchUser();
  }, [])

  return (
    <div className="home-container">
      <h1>Olá, {userData.nome || 'loading...'}</h1>
      <div className="balance-box">
        <p>Saldo disponível para investimento:</p>
        <h3>R$ {userData.balance || 'loading...'}</h3>
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