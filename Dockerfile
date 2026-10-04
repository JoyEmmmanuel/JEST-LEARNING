# syntax=docker/dockerfile:1
FROM node:22-alpine

WORKDIR /app

# Install deps first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json jest.config.js ./
COPY src ./src
COPY tests ./tests

ENV CI=true
# Running the container runs the test suite
CMD ["npm", "test"]