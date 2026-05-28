import express from 'express';


const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Servidor subiu na porta ${PORT}`));
