FROM node:14-alpine

MAINTAINER Bharath Naik "bharath.vadithya@gmail.com"

ENV REFRESHED_AT 2021-03-23

#create app working directory
WORKDIR /speakerSocket

#Install app dependencies
# A wildcard is used to ensure both package.json
COPY ["package.json", "webSockerServer.js", "./"]

RUN npm install && npm install pm2 -g

# If you are building your code for production
# RUN npm ci --only=production

CMD ["pm2-runtime", "webSockerServer.js"] 

EXPOSE 8081