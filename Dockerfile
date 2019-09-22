FROM node:12.2.0

COPY ./package.json /app/package.json

WORKDIR /app

ENV NODE_ENV=development

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app


