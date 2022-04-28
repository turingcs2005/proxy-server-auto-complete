# build front end
FROM node:16-alpine AS client_build

WORKDIR /app 

COPY ./client /app/

RUN npm install 
RUN node_modules/.bin/ng build

# build back end
FROM node:16-alpine AS server_build

WORKDIR /app

COPY ./server /app/
COPY --from=client_build /app/dist/client /app/dist

RUN npm install --production 

# build docker
FROM alpine 

WORKDIR /app

RUN apk add --no-cache nodejs

COPY --from=server_build /app ./

CMD ["node", "./bin/www"]