# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the project files to the container
COPY . .

# Expose the port on which the application will run
EXPOSE 9000

# Start the application
CMD [ "node", "server.js" ]
