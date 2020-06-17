import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post('/projects',{
      title: "back node",
      owner: "Iesley"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Homepage" />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="submit" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;