FROM mhart/alpine-node:12

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "prod"]
