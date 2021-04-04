FROM node:14-alpine

MAINTAINER Bharath Naik "bharath.vadithya@gmail.com"

ENV REFRESHED_AT 2021-03-23

#create app working directory
WORKDIR /audioStreamer

#Install app dependencies
# A wildcard is used to ensure both package.json
COPY ["package.json", "abc.webm", "backend.js", "./"]

RUN npm install && npm install pm2 -g

# If you are building your code for production
# RUN npm ci --only=production

CMD ["pm2-runtime", "backend.js"] 

EXPOSE 8000