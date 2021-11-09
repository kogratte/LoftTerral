# build stage
FROM node:14 as build-stage
WORKDIR /app
COPY . .
RUN npm install --registry=https://registry.npmjs.org/ 
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
