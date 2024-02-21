FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY app/index.js .

CMD ["npm", "start"]
