#################
# Builder image #
#################
FROM node:20-alpine AS build

ENV NEXT_PUBLIC_BACKEND_URL="https://s3p2bvwfei.eu-west-1.awsapprunner.com"

WORKDIR /src

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npm run lint

RUN npm run build

####################
# Production image #
####################
FROM node:20-alpine AS production

RUN apk add dumb-init python3

WORKDIR /server

COPY --chown=node:node --from=build ./src ./

EXPOSE 3000

USER node

CMD ["dumb-init", "npm", "run", "start"]
