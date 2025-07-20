# McEwan_Cera_ui_garden - Component Library

This repository contains a React UI component library built with Vite and Storybook, with production-ready Docker deployment and automated quality checks.

---

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- Node.js and npm
- Git

---

## Running the Application with Docker

### 1. Clone this repository

Open a terminal in your preferred directory and run:

```bash
git clone https://github.com/Cera-creator/McEwan_Cera_ui_garden.git
cd McEwan_Cera_ui_garden/component_library
```

### 2. Build the Docker image

```bash
docker build -t mcewan_cera_coding_assignment13 .
```

### 3. Run the Docker container

```bash
docker run -d -p 8018:8018 --name mcewan_cera_coding_assignment13 mcewan_cera_coding_assignment13
```

### 4. Access the application

Open your web browser and navigate to:  
**http://localhost:8018**

The application will be served from the working directory `/mcewan_cera_ui_garden_build_checks` inside the container.

---

## Development Setup

### Pre-commit Hooks

This project uses Husky and lint-staged to ensure code quality. The following checks run automatically before each commit:

- **Prettier**: Code formatting
- **ESLint**: Code linting
- **Tests**: Unit tests with Vitest

If any of these checks fail, the commit will be blocked.

### Manual Quality Checks

You can run the quality checks manually:

```bash
# Format code
npx prettier --write .

# Lint code
npm run lint

# Run tests
npm test

# Build for production
npm run build
```

---

## Continuous Integration

This project uses GitHub Actions for continuous integration. The following checks run on every push and pull request:

- Build verification
- Prettier formatting check
- ESLint code quality check
- Unit test execution

If any CI checks fail, the build will be marked as failed and you will be notified.

---

## Project Structure

- `src/components/`: React components
- `src/components/*/`: Individual component folders with stories and tests
- `.husky/`: Pre-commit hook configuration
- `.github/workflows/`: GitHub Actions CI/CD configuration
- `nginx.conf`: Nginx configuration for production serving
- `Dockerfile`: Production container configuration

---

## Troubleshooting

### Docker Issues
- If port 8018 is already in use, stop the existing container:
  ```bash
  docker stop mcewan_cameron_coding_assignment13
  docker rm mcewan_cameron_coding_assignment13
  ```

### Pre-commit Hook Issues
- If hooks aren't running, ensure you're in a git repository:
  ```bash
  git init
  ```
- Make sure the pre-commit file is executable (Unix/Mac):
  ```bash
  chmod +x .husky/pre-commit
  ```

### Build Issues
- Clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
