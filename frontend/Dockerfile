FROM node:14.17-alpine

WORKDIR /app

ADD ./src/package.json /app
ADD ./src/package-lock.json /app

RUN npm install

ADD ./src /app

CMD ["npm", "run", "serve"]
