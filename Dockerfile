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
FROM base AS runtime
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Export local environment variables for the container
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
