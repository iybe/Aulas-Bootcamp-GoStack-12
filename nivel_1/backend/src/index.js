const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

/**
 * Metodos HTTP:
 * Post: Metodo para criar informação
 * Get: Metodo para retornar informação
 * Put/Patch: Metodo para atualizar uma informação
 * Delete: Metodo para excluir uma informação
*/

/** 
 * Tipos de Parâmetros:
 * Query Params: Filtros e Paginação
 * Route Params: Identificar Recursos(Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON) 
 * 
*/

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;
  
  const result = title
    ? projects.filter(p => p.title.includes(title))
    : projects;

  return response.json(result);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };
  projects.push(project);
  
  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  
  const projectIndex = projects.findIndex(p => p.id == id);

  if(projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project; 

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  
  const projectIndex = projects.findIndex(p => p.id == id);

  if(projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }
  
  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Server running in http://localhost:3333');
});