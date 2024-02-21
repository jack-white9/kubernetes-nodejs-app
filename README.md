# Kubernetes Node.js App

A simple Hello World Node.js app deployed with Kubernetes.

## Getting started

### Docker image

1. Build the Docker image

```sh
docker build -t node-app .
```

2. Run the Docker image

```sh
docker run -d -p 3000:3000 node-app
```

3. Verify Docker container is running

```sh
curl http://localhost:3000 # returns "Hello world!"
```
