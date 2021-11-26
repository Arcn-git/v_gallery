// Dependency imports
const express = require('express');
const routes  = require('/routes/routes.ts');
var mongoose = require('mongoose');

// Express Initialisierung
const app = express();

// Mongodb Access
var mongoDB = 'localhost:17001';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware for ArtService
app.use(express.json());

// Port !TODO! Change to env
const PORT = 7001;

// Routes
app.use(routes);

app.listen(PORT, () => {
    console.log("ArtService is running on Port: %s", PORT);
});
