# Kubernetes Node.js App

A simple Hello World Node.js app deployed with Kubernetes.

## Getting started

### Prerequisites

1. [minikube](https://minikube.sigs.k8s.io/docs/)
2. [kubectl](https://kubernetes.io/docs/reference/kubectl/)

### Setup

1. Start minikube

```sh
minikube start
```

2. Point shell to minikube's Docker daemon

```sh
eval $(minikube docker-env)
```

3. Build Docker image

```sh
docker build -t node-app .
```

### Start deployment

1. Create deployment

```sh
kubectl apply -f deployments/deployment.yaml
```

2. Verify that two replica pods have been created

```sh
kubectl get pod

# should return something similar to:
#
# NAME                                   READY   STATUS    RESTARTS   AGE
# node-app-deployment-799f65478b-9drrm   1/1     Running   0          7s
# node-app-deployment-799f65478b-j4vwb   1/1     Running   0          7s
```

### Start service

1. Create service

```sh
kubectl apply -f deployments/service.yaml
```

2. Verify that service has been created

```sh
kubectl get service

# should return something similar to:
#
# NAME               TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
# kubernetes         ClusterIP      <ip>           <none>        443/TCP          65m
# node-app-service   LoadBalancer   <ip>           <pending>     3000:31000/TCP   33m
```

3. Test service

```sh
minikube service node-app-service --url

# using a seperate terminal instance
curl http://<external_service_ip>:31000 # returns "Hello world!"
```
