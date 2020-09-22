import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world from express!' });
});

app.listen(8888, () => {
  console.log('Server started on port 8888!');
});
