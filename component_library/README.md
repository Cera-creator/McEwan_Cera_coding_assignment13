# McEwan_Cera_ui_garden - Component Library

This repository contains a React UI component library built with Vite and Storybook.

---

## What you need installed before starting:

- [Docker](https://www.docker.com/get-started) installed on your machine
- Node.js and npm

---

## Running the Storybook UI with Docker

###
1. Build the Docker image

Open a terminal in the `component_library` folder and run:

```
docker build -t cera_mcewan_ui_garden .
```

2. Run the Docker container

```
docker run -d -p 8083:80 --name cera_mcewan_coding_assignment12 cera_mcewan_ui_garden
```

3. Access the Storybook UI
Open your web browser and navigate to:
http://localhost:8083

4. Explore! This component library contains 13 customizable components for you to interact with.
