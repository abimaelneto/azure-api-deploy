# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]
