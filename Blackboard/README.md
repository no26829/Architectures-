# Project 3 – Blackboard Architecture

This version uses blackboard architecture. Each service sends updates to a shared-state-service.  
The shared-state-service stores data like hunger, mood, and XP. Services do not talk to each other directly.

## How to Run

1. Open a terminal in each service folder:
   - `blackboard-service`
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

- Services only send to the shared-state-service.
- Shared state gets updated with each event.
