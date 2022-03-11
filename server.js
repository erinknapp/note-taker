const { application } = require('express');
const express = require('express');

const PORT = process.env.port || 3001;
//defining the routes needed from backend
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// linking to routes to front end
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>{
    console.log('Server now on port 3001');
});