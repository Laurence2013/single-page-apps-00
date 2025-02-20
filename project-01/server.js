const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/static/js/templates/', 'about.html'));
});
app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/static/js/templates/', 'contact.html'));
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

