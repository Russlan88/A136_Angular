FROM node:10-alpine
WORKDIR /app
COPY ./package.json /app
COPY ./dist/server.js /app
COPY ./dist/browser/ /app/dist/browser
COPY ./dist/server/ /app/server

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD [  "node", "server.js" ]