const express = require('express');
const { uuid, isUuid } = require('uuidv4');

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

/**
 * Middleware:
 * 
 * Interceptador de requisiçoes, pode interromper ou alterar dados de requisições
 */

app.use(express.json());

function logRequests(request, response, next) {
  const { url, method } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)){
    return response.status(400).json({ error : "Invalid ID" });
  }

  return next();
}

app.use(logRequests);
//app.use('/projects/:id', validateId);

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

app.put('/projects/:id', validateId, (request, response) => {
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

app.delete('/projects/:id', validateId, (request, response) => {
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