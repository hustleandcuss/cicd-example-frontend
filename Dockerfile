FROM node:20.11.1-alpine

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npm run lint

RUN npm run build

EXPOSE 3000

CMD npm run start