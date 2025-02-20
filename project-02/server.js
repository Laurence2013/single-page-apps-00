const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/templates/', 'index.html'));
	//res.sendFile(path.join(__dirname, 'dist/components/', 'index.hbs'));
});
app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/templates/', 'about.html'));
	//res.sendFile(path.join(__dirname, 'dist/components/', 'about.hbs'));
});
app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/templates/', 'contact.html'));
	//res.sendFile(path.join(__dirname, 'dist/components/', 'contact.hbs'));
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

