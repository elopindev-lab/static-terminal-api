# static-terminal-api

A Node.js backend API built with Express.js that provides mock financial data.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## Endpoints

### GET /api/search
Returns mock financial instrument data (stocks, REITs, ADRs, preferred shares, bonds, commodities, and FX).

**Example:**
```bash
curl http://localhost:3000/api/search
```

**Response:**
Returns a JSON array of financial instruments with details like id, label, type, ticker, exchange, country, flag, and url.