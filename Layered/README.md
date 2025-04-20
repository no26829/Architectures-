# Project 3 – Layered Architecture

This version uses four layers: presentation, application, domain, and data.  
Each layer does one job. It keeps the system organized and easy to manage.

## How to Run

1. Open a terminal in the `presentation/` folder
2. Run:

```bash
npm install
node index.js
```

## How to Test

Use Postman or curl.

### Feed Pet

```http
POST /feed
Content-Type: application/json

{
  "userId": "user123",
  "newHungerLevel": 30
}
```

### Earn XP

```http
POST /earn-xp
Content-Type: application/json

{
  "userId": "user123",
  "amount": 40
}
```

## Notes

- Each route goes through all four layers.
- Console shows output from the data layer.
