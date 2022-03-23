# Stage 1
FROM node:alpine as build-stage
WORKDIR /home/client
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i
CMD ["npm", "run", "start"]

# Stage 2
# FROM nginx:1.17.0-alpine
# COPY --from=build-stage /home/client/build /usr/share/nginx/html
# EXPOSE 80
# CMD nginx -g 'daemon off;'