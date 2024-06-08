const express = require('express');
const app = express();

// Endpoint untuk mengarahkan permintaan ke "https://doujindesu.tv"
app.get('/', (req, res) => {
  res.redirect(301, 'https://doujindesu.tv');
});

// Menjalankan server backend di port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
