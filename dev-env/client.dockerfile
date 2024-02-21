FROM node:20

WORKDIR /usr/src/vuuri

COPY ./package.json ./
COPY ./yarn.lock ./

# RUN yarn

COPY . .