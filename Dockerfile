# 1️⃣ Étape 1 : Build du frontend avec Node.js et Vite
FROM node:18 AS build
WORKDIR /app

# Copier uniquement les fichiers essentiels pour l'installation
COPY package.json package-lock.json .  
RUN npm install

# Copier tout le projet après l'installation des dépendances
COPY . .  

# Construire le projet avec Vite
RUN npm run build

# 2️⃣ Étape 2 : Vérification et copie dans Nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html

# On vérifie si le build a bien été généré avant de copier
RUN ls -lah /app/dist || echo "⚠️ Le dossier dist n'existe pas, vérifie le build !"

# Copier le build final de l'étape précédente
COPY --from=build /app/dist .  

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
