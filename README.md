# Kubernetes Node.js App

A simple Hello World Node.js app deployed with Kubernetes.

## Getting started

### Kubernetes

1. Start minikube

```sh
minikube start
```

2. Create deployment

```sh
kubectl apply -f deployments/deployment.yaml
```

3. Verify that two replica pods have been created

```sh
kubectl get pod

# should return something similar to:
: '
NAME                                   READY   STATUS              RESTARTS   AGE
node-app-deployment-68f6d975d5-n303d   0/1     ContainerCreating   0          5s
node-app-deployment-68f6d975d5-w984a   0/1     ContainerCreating   0          5s
'
```

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
