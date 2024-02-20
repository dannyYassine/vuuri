FROM mcr.microsoft.com/playwright:v1.31.0-focal

WORKDIR /usr/src/vuuri

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .