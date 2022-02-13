const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

const router = require('./routes/apiRoutes/candidateRoutes');
router.use(require('./routes/apiRoutes/partyRoutes'));

//Default response for any other request (NOT FOUND)  *needs to be at the end of routes)
app.use((req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});