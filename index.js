/* index.js */
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Personal Profile</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="profile-container">
                <img src="/photograph.jpg" alt="Profile Picture" class="profile-pic">
                <h1>Pranav Anand</h1>
                <p>Decision Analyst | Data Science Enthusiast</p>
                <h2>About Me</h2>
                <p>
                    Welcome to my personal profile! I am passionate about Data Science, Banking, and building cool projects.
                </p>
                <h2>+91 9770841128</h2>
                <ul>
                    <li>Email: pranavanand2@outlook.com</li>
                    <li>GitHub: <a href="https://github.com/anandpranav02" target="_blank">anandpranav02</a></li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Profile website running at http://localhost:${port}`);
});
