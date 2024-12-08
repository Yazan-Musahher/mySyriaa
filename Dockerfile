# Use lightweight Node.js base image
FROM node:lts-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Build Next.js app
RUN npm run build

# Start with a minimal production image
FROM node:lts-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the build output and package.json for runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Install only production dependencies
RUN npm ci --only=production

# Expose the port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
