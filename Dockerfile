FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY package.json /usr/src/app

RUN npm install

RUN npm i esbuild

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm","run","start"] 

