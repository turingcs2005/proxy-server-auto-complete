ARG CONFIG

FROM node:latest as BUILD
ARG CONFIG $CONFIG

ARG CONFIG=dev

WORKDIR /app

COPY client /app/client/
COPY backend /app/backend/


RUN cd client
RUN echo $CONFIG
RUN npm install --legacy-peer-deps

RUN npx ng build --configuration $CONFIG

FROM node:latest
ARG CONFIG $CONFIG
ENV CONFIG $CONFIG

WORKDIR /app

COPY --from=BUILD /app/server /app/server/
COPY --from=BUILD /app/dist /app/server/dist/

RUN cd server && npm install

EXPOSE 3012

CMD ["node", "/app/server/server.js"]
