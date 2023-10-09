const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));








app.listen(3001, () => {
    console.log("Server running on port 3001!");
});