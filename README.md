# Go Deploy

A minimal Express.js server built as a deployment test project.

## Features

- Simple RESTful routes built with Express
- Environment variable configuration via `dotenv`
- Lightweight — no database or extra dependencies

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Returns a welcome message |
| GET | `/login` | Playful placeholder login route |
| GET | `/instagram` | Returns an Instagram handle shoutout |

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

- Node.js installed (v16+ recommended)
- npm

### Installation

```bash
git clone https://github.com/ShantanuRaoo/go_deploy_backend.git
cd go_deploy_backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=3000
```

### Running the Server

```bash
node index.js
```

The server will start at:

```
http://localhost:3000
```

## Project Structure

```
go_deploy/
├── index.js          # Main server file
├── package.json
├── package-lock.json
├── .gitignore
└── .env              # Not committed (see .gitignore)
```

## Deployment

This project is deployment-ready — make sure to set the `PORT` environment variable on your hosting platform (e.g. Render, Railway, Vercel) since it's read from `process.env.PORT`.

## Author

**Shantanu Rao**
GitHub: [@ShantanuRaoo](https://github.com/ShantanuRaoo)

## License

This project is open source and available under the [MIT License](LICENSE).
