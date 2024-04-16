FROM node:20.11.1-alpine AS build

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npm run lint

RUN npm run build