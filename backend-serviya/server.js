 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/visitas', require('./routes/visitas'));

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
