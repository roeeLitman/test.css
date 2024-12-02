FROM node:20 AS builder

WORKDIR /app

COPY  . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json .

RUN npm install

EXPOSE 3031

CMD ["npm", "start"]
