FROM node:10.24.1-alpine3.11
WORKDIR /site

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY pages/ pages/
COPY components/ components/
COPY .babelrc .babelrc
COPY next.config.js next.config.js

CMD ["npm", "run", "start"]
