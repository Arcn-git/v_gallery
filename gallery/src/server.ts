const express = require('express');

const app = express();

const PORT = 7002;

app.get('/', (res:any) => {
    res.send('GalleryService is running and GET on / is working.');
});

app.listen(PORT, () => {
    console.log('GalleryService is running on Port: %s', PORT);
});