FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=build --chown=node:node /app /app
# UID numérique : requis pour que Pod Security "restricted" (runAsNonRoot) puisse vérifier
USER 1000
EXPOSE 3000
CMD ["node", "server.js"]
