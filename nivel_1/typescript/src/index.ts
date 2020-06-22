import express from 'express';
import createUser from './services/CreateUser';

const app = express();

app.get('/', (request, response) => {
  const user = createUser({
    email: 'ib@email.com',
    password: '1234',
    techs: [
      'c',
      { title: 'java', experience: 90 }
    ];
  });

  return response.json({ message : "alguma coisa" });
});

app.listen(3333);