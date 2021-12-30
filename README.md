# r-social

This is a **on-going** project that aims to create a basic social media app (r-social) using the MERN stack (MongoDB, Express, React and NodeJS).

More will be added as the project grows.

# Docker

Each main part of this app runs inside it's own container:

- **react-app** is the client, runs on port 3000
- **api-server** is the server api, runs on port 5000
- **mongo** is the database manager, runs on port 27017
- **mongo-express** is an admin tool for mongodb, runs on port 8081

# Instalation / Usage

Clone this repo, then from the root directory:

Run `make build` to build the docker containers.
Run `make run` to run the containers with docker-compose.
Run `make stop` to stop the containers.

# When developing

Use `make run`, then stop the **react-app** and / or **api-server**, in order to run it locally with `npm start`.
