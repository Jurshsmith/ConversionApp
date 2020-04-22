FROM node:12

WORKDIR /conversion-app/app/frontend

COPY /frontend/package.json ./

RUN npm install

COPY /frontend/. .

RUN npm i @angular/cli -g

RUN npm run build:prod

WORKDIR /conversion-app/app/api

COPY /server/package.json ./

RUN npm install

COPY server/. .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]