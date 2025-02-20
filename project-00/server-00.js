const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    // Determine the file path based on the request URL
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Get the fileextension to set the correct content type
    let extname = path.extname(filePath);
    let contentType = 'text/html'; // Default to HTML
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    // Read the requested file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // File not found, return 404
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found', 'utf-8');
            } else {
                // Some other error, return 500
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // File found, send it back with the correct content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

