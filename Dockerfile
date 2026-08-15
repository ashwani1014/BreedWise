# Base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from BACKEND folder
COPY BACKEND/package*.json ./

# Install dependencies
RUN npm install

# Copy all other backend files
COPY BACKEND/ .

# Expose the port your backend runs on (usually 8000)
EXPOSE 8000

# Start the server
CMD ["node", "server.js"]
