FROM node:14.17-alpine

WORKDIR /app

ADD ./src/package.json /app
ADD ./src/package-lock.json /app

RUN npm install

ADD ./src /app

EXPOSE 8080
CMD ["npm", "run", "serve"]
