const express = require('express');
const EmailRoute = require('./app/routes/EmailRoute.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.use("/api/email",EmailRoute);

app.listen(port, () => {
    console.log(`Api rodando em http://localhost:${port}`);
});