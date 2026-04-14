const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Single endpoint: GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});