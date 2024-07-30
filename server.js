const express = require('express');
const fetch = require('node-fetch');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/search' && req.method === 'GET') {
        const query = parsedUrl.query.q || '';
        // Dummy response for illustration
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Search query received: ${query}` }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const app = express();
const PORT = 3000;

const API_KEY = '0EnoKeLAoYW5UKcMXgxeYOh7F8RFO20q1UdfbIzC0oA';
const API_URL = 'https://trefle.io/api/v1/plants/search';

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const url = `${API_URL}?token=${API_KEY}&q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data. Please try again later.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});