const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
	const fileStream = fs.createReadStream('index.html');

	res.writeHead(200, {'Content-Type': 'text/html'});

	fileStream.pipe(res);
}).listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
