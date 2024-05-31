const express = require('express');
const path = require('path');
const app = express();

const PORT = 5173;



app.use(express.static(path.join(__dirname, 'public')));

app.get('/Bass', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
