FROM node:20-alpine

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npm run lint

RUN npm run build

EXPOSE 3000

USER node

CMD ['npm', 'run', 'start]