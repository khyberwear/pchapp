# Use Node.js as the base image
FROM node:20-slim AS base
WORKDIR /app

# Install dependencies separately to leverage Docker cache
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install

# Build the app
FROM deps AS build
COPY . .
RUN npm run build

# Run the app
FROM node:20-slim AS runtime
WORKDIR /app

# Copy built assets and dependencies
# Taking node_modules and package.json from deps to ensure they are available
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=build /app/dist ./dist

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

EXPOSE 4321

# Use the correct entry point for Astro Node adapter
CMD ["node", "./dist/server/entry.mjs"]
