const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Local dev: start the server normally ────────────────────────────────────
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// ── Lambda: export a serverless handler ─────────────────────────────────────
const serverless = require('serverless-http');
module.exports.handler = serverless(app);
