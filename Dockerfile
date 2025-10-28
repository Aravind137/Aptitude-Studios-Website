# Use Node 18 (Debian base)
FROM node:18

WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build Angular app for production using low-memory Node heap
RUN node --max-old-space-size=512 ./node_modules/@angular/cli/bin/ng build --configuration production --optimization=true --source-map=false --named-chunks=false --build-optimizer=true

# Expose app port
EXPOSE 8081

# Start Express server (same as npm start behaviour)
CMD ["npm", "start"]
