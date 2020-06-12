FROM node:10-alpine

RUN apk add --no-cache bash

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json ./

# caching the npm install layer and pointing npm to a registry && install
RUN npm config set registry http://registry.npmjs.org/ && npm install

# install Preact cli
RUN npm install -g preact-cli

COPY . ./

EXPOSE 8080

RUN npm run build
#CMD tail -f /dev/null