FROM node:18-alpine AS build
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Build the React app (using the production build created earlier)
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:alpine

# Copy the production build from the previous build stage to the Nginx web server's default folder
COPY --from=build /app/dist /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration file to the Nginx configuration directory
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80 (default for HTTP)
EXPOSE 4004

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
