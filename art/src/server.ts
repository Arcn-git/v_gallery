const express = require('express');

const app = express();

//Middleware for ArtService
app.use(express.json());

// Port !TODO! Change to env
const PORT = 7001;

app.get('/', (req:any, res:any) => {
    res.send('Server is running and GET on / is working.');
})

app.listen(PORT, () => {
    console.log("ArtService is running on Port: %s", PORT);
})