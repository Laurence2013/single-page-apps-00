const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/', 'index.html'))
});
app.get('/home', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/templates/', 'home.html'))
});
app.get('/dashboard', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/templates/', 'dashboard.html'))
});
app.get('/posts', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/templates/', 'posts.html'))
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
