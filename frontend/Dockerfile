# Stage 1: Build
FROM node:20-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production (使用 Nginx 服務前端)
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
# 這裡我們會透過 docker-compose 掛載 Nginx 設定