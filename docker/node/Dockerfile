FROM node:19-bullseye

WORKDIR /apps

COPY ./package*.json /apps

RUN echo y | npm install

EXPOSE 4200

COPY . .
