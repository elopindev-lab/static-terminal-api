const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock data
const mockData = [
  {
    "id": "eq:US:AAPL",
    "label": "Apple Inc. (AAPL)",
    "type": "stock",
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "country": "US",
    "flag": "🇺🇸",
    "url": "/equities/aapl.html"
  },
  {
    "id": "reit:US:PLD",
    "label": "Prologis, Inc. (PLD)",
    "type": "reit",
    "ticker": "PLD",
    "exchange": "NYSE",
    "country": "US",
    "flag": "🇺🇸",
    "url": "/equities/pld.html"
  },
  {
    "id": "adr:CN:BABA",
    "label": "Alibaba Group ADR (BABA)",
    "type": "adr",
    "ticker": "BABA",
    "exchange": "NYSE",
    "country": "CN",
    "flag": "🇨🇳",
    "url": "/equities/baba.html"
  },
  {
    "id": "adr:JP:SONY",
    "label": "Sony Group ADR (SONY)",
    "type": "adr",
    "ticker": "SONY",
    "exchange": "NYSE",
    "country": "JP",
    "flag": "🇯🇵",
    "url": "/equities/sony.html"
  },
  {
    "id": "pref:US:BAC-L",
    "label": "Bank of America Preferred (BAC-L)",
    "type": "preferred",
    "ticker": "BAC-L",
    "exchange": "NYSE",
    "country": "US",
    "flag": "🇺🇸",
    "url": "/preferred/bac-l.html"
  },
  {
    "id": "bond:US:UST10Y",
    "label": "US Treasury 10Y Note",
    "type": "gov_bond",
    "ticker": "UST10Y",
    "country": "US",
    "flag": "🇺🇸",
    "url": "/bonds/us-treasury-10y.html"
  },
  {
    "id": "cmdty:XX:WTI",
    "label": "Crude Oil WTI (Front Month)",
    "type": "commodity",
    "ticker": "WTI",
    "country": "US",
    "flag": "🇺🇸",
    "url": "/commodities/wti.html"
  },
  {
    "id": "fx:XX:EURUSD",
    "label": "EUR/USD Spot",
    "type": "fx",
    "ticker": "EURUSD",
    "url": "/fx/eurusd.html"
  }
];

// Middleware
app.use(cors());
app.use(express.json());

// GET /api/search endpoint
app.get('/api/search', (req, res) => {
  res.json(mockData);
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Static Terminal API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
