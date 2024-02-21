FROM mcr.microsoft.com/playwright:v1.41.2-focal

WORKDIR /usr/src/vuuri

COPY ./package.json ./
COPY ./yarn.lock ./

COPY . .