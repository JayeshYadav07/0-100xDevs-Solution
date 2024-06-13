# Multi container application using docker.

```bash
docker volume create mongo_data

docker network create todo_ntw

docker pull alpine

docker pull node

docker pull mongo

docker run -d -it --name react_container -p 8000:3000 --network todo_ntw node:18-alpine

docker run -d -it --name node_container --network todo_ntw node:latest

docker run -d -it --name mongo_container -p 27017:27017 -v mongo_data:/data/db --network todo_ntw mongo:latest
```

In this multi-container application we have use the volume and network to communicate with each other.

This is the very naive approach of doing multi-container application.
