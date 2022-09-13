const express = require('express');
const cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.listen(API_PORT, () => console.log(`Listenint on port ${API_PORT}`));