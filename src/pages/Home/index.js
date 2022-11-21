import React, { useState, useEffect } from 'react';
import { getBalance, getProjects } from './services';

import './styles.css';

function Home() {
  const [userData, setUserData] = useState({
    balance: '',
    nome: '',
  })
  const [projects, setProjects] = useState({ 
    projects: []
  })

  useEffect(() => {
    async function fetchUser() {
      const response = await getBalance();
      const responseProjects = await getProjects();

      if (response && responseProjects) {
        setUserData(response)
        setProjects(responseProjects)
      }
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

      {projects && projects.projects.length > 0 ? (

        projects.projects.map(project => (
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
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))

      ) : (
        'No projects...'
      )}

    </div>
  )
}

export default Home;