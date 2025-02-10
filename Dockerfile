# Image de base
FROM node:20-alpine AS build

# Répertoire de travail
WORKDIR /app

# Copier tout le projet
COPY . .  

# Installer les dépendance
RUN npm install

# Compiler le projet avec Vite
RUN npm run build

# Configuration du server web
FROM caddy:2.9.1-alpine AS server
# Ne garder que le dossier /dist
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]