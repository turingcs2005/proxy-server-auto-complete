ARG CONFIG

FROM node:latest as BUILD
ARG CONFIG $CONFIG

ARG CONFIG=dev


COPY client /app/client/
COPY backend /app/backend/

WORKDIR /app/client
RUN echo $CONFIG
RUN npm install --legacy-peer-deps

RUN npx ng build --configuration $CONFIG

FROM node:latest
ARG CONFIG $CONFIG
ENV CONFIG $CONFIG

COPY --from=BUILD /app/backend /app/backend/
COPY --from=BUILD /app/client/dist /app/backend/dist/

WORKDIR /app/backend

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
