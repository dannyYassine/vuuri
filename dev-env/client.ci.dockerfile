FROM node:20

WORKDIR /usr/src/vuuri

# install packages
RUN apt-get update
RUN apt-get install -y git

COPY ./package.json ./
COPY ./yarn.lock ./

# RUN yarn

COPY . .