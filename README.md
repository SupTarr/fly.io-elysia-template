# Fly.io Elysia Template with Bun

This is a template project for deploying an ElysiaJS application using Bun to Fly.io.

## Prerequisites

Ensure you have the following installed:

- [Bun](https://bun.sh/)
- [Fly CLI](https://fly.io/docs/hands-on/install-flyctl/)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd fly-io-elysia-template
    ```

2. **Install dependencies:**

    ```bash
    bun install
    ```

## Development

To start the development server with hot-reloading:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

The Dockerfile handles the build process. When deploying to Fly.io, the `bun install --ci` command will be executed within the Docker container.

## Deployment to Fly.io

1. **Login to Fly.io (if you haven't already):**

    ```bash
    fly auth login
    ```

2. **Launch the app (if it's the first time):**

    ```bash
    fly launch
    ```

    This will detect your `fly.toml` and `Dockerfile` and guide you through the initial deployment setup.

3. **Deploy changes:**
    After making changes, deploy them with:

    ```bash
    fly deploy
    ```

## Project Structure

```txt
.
├── .dockerignore       # Specifies intentionally untracked files that Docker should ignore
├── .gitignore          # Specifies intentionally untracked files that Git should ignore
├── Dockerfile          # Defines the Docker image for deployment
├── bun.lockb           # Bun lockfile
├── fly.toml            # Fly.io configuration file
├── package.json        # Project metadata and dependencies
├── README.md           # This file
├── tsconfig.json       # TypeScript configuration
└── src/
    └── index.ts        # Main application entry point
```

## Key Technologies

- **ElysiaJS:** A fast, and ergonomic web framework for Bun and Node.js.
- **Bun:** A fast JavaScript all-in-one toolkit.
- **TypeScript:** Superset of JavaScript that adds static types.
- **Fly.io:** Platform for deploying applications close to users.
