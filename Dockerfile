FROM node:20.14.0-alpine3.20
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV API_URL=http://localhost:3001
EXPOSE 3004
CMD ["npm", "run", "dev"]
