# Project 3 – Zero Trust Architecture

This version adds token security.  
Each request to shared-state-service must include a token in the header.  
The service checks the token before allowing updates or access.

## How to Run

1. Open a terminal in each service folder:
   - `shared-state-service`
   - `access-gatekeeper`
   - `critter-core`
   - `xp-tracker`
   - `command-router`
2. In each one, run:

```bash
npm install
node index.js
```

## How to Test

Use Postman or curl. Add this header:

```http
Authorization: Bearer securetoken123
```

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

- The shared-state-service blocks any request without the correct token.
