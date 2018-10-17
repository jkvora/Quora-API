FROM node:8.10
ENV NODE_ENV production

RUN mkdir /app

WORKDIR /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 5000

CMD ['node','server/app.js']