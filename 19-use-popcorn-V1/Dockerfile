FROM node:18-alpine
WORKDIR /server
RUN npx create-react-app my-app
WORKDIR /server/my-app

# NODE MODULES
RUN npm install axios
RUN npm install react-router-dom
RUN npm install @tanstack/react-query

# DELETE SRC AND PUBLIC DIRECTORY FOR THE VOLUMES
RUN rm -r src
RUN rm -r public
ENTRYPOINT [ "npm", "start" ]


# BUILD IMAGE
# ----------------
# docker image build . -t node18-reactjs-app-alpine


# RUN CONTAINER
# ------------------

# FOR LINUX
# docker container run -p 3000:3000 -v "$PWD/public":/server/my-app/public -v "$PWD/src":/server/my-app/src node18-reactjs-app-alpine

# FOR WINDOWS
# docker container run -p 3000:3000 -v ${PWD}/public:/server/my-app/public -v ${PWD}/src:/server/my-app/src jeromos55/node18-reactjs-app-alpine
