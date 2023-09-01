FROM node:19.2-alpine3.15 AS build

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --only=production

COPY ./ ./ 

RUN npm run build

FROM node:lts AS runtime

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["node", "dist/server/entry.mjs"]