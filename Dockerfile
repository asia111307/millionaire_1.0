FROM node:12.2.0

COPY ./package.json /app/package.json

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN npm install && npm install -g @angular/cli@7.3.9

COPY . /app


