const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
// files where the routes are
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// connecting the routes to the frontend
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Server now on Port 3001');
});