# Use NodeJS base image
FROM node:13 AS build

# Create app directory in Docker
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies in Docker
RUN npm ci

# Install Ionic
RUN npm install -g ionic

# Copy app from local environment into the Docker image
COPY . .

# Build the Ionic application
RUN ionic build

# Set the application's port number
EXPOSE 80

# Use Nginx base image
FROM nginx:alpine

# Copy build artifacts to Nginx folder for static hosting
COPY --from=build /usr/src/app/www /usr/share/nginx/html

# Copy custom Nginx config, to fix an annoying bug :(
COPY nginx.conf /etc/nginx/nginx.conf