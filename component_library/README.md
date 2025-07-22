# McEwan_Cera_ui_garden - Component Library

This repository contains a React UI component library built with Vite and Storybook, with automated quality checks. It is built on the structure of my previous storybook application.

---

## What you need installed before starting:

- [Docker](https://www.docker.com/get-started) installed on your machine
- Node.js and npm
- Git

---

## For Local Development

### 1. Clone this repository

Open a terminal in your preferred directory and run:

```
git clone https://github.com/Cera-creator/McEwan_Cera_coding_assignment13.git
cd McEwan_Cera_ui_garden/component_library
```

### 2. Install dependencies

```
npm install
```

### 3. Start developing!

Pre-commit hooks will run automatically on commit.
There is also the option of running quality checks manually:

```
# Prettier
npx prettier --write .

# ESLint
npm run lint

# Tests
npm test

# Production build
npm run build
```

---

## Running with Docker
For running the app in a containerized environment:

### 1. Build the Docker image

```
docker build -t mcewan_cera_coding_assignment13 .
```

### 2. Run the Docker Container

```
docker run -d -p 8018:8018 --name mcewan_cera_coding_assignment13 mcewan_cera_coding_assignment13
```

### 3. Access the application

Open your web browser and navigate to:
**http://localhost:8018**

---

### Info on Continuous Integration (CI)

This repository uses **GitHub Actions** to enforce code quality on every push and pull request to the `main` branch. The workflow will:

- Check code formatting with Prettier
- Lint code with ESLint
- Run all unit tests

If any of these checks fail, the build will be marked as failed in the GitHub Actions tab, and the code will not be merged.

---
