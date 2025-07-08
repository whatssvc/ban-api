const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let bannedUsers = [];

app.post('/banUser', (req, res) => {
    const { robloxUserId, discordUserId, reason } = req.body;
    bannedUsers.push({ robloxUserId, discordUserId, reason, date: new Date() });
    console.log(`Banned: Roblox ${robloxUserId}, Discord ${discordUserId}`);
    res.send({ success: true, message: 'User banned.' });
});

app.get('/bannedUsers', (req, res) => {
    res.send(bannedUsers);
});

app.listen(PORT, () => {
    console.log(`API live on port ${PORT}`);
});
