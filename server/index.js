const express = require('express');
const cors = require('cors');
const bookCtrl = require('./controllers/books_controller');
const SERVER_PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/../build'));

//endpoints
app.post(`/api/books`, bookCtrl.create);
app.get(`/api/books`, bookCtrl.read);
app.put(`/api/books/:id`, bookCtrl.update);
app.delete('/api/books/:id', bookCtrl.delete);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));