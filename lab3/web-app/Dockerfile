FROM node:12.14.0-alpine

ARG PORT
ENV PORT=$PORT

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

CMD [ "node", "server" ]

EXPOSE $PORT