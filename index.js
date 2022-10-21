const path = require('path');
const express = require('express');
const sendNotification = require('./service/fcm');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getToken', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.post('/send', async (req, res) => {
    const response = await sendNotification();
    console.log("Message has been send ",response);
    res.send("Completed");
});

app.listen(5000, () => {
    console.log("server is running");
});