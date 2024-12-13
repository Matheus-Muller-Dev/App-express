const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.send('<h1>Welcome to the home page</h1><p>This is the home page</p>');
});

app.get('/about', (req, res) => {
    res.send('<h1>ABout us</h1><p>This my page</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact us</h1><p>my e-mail: matheusmiiller44@gmail.com</p>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>')
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});