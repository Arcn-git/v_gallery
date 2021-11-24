// Dependency imports
const express = require('express');
const routes  = require('/routes/routes.ts');

// Express Initialisierung
const app = express();

// Middleware for ArtService
app.use(express.json());

// Port !TODO! Change to env
const PORT = 7001;

// Routes
app.use(routes);

app.listen(PORT, () => {
    console.log("ArtService is running on Port: %s", PORT);
});
