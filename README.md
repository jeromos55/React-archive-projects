# React-archive-projects

Welcome

I created this repository in order to put projects here that I no longer use, but I can retrieve them later if I don't remember something or if I need it quickly. I created a Docker image that you can find on hub.docker.com under the name jeromos55/node18-reactjs-app-alpine. I used this for the projects, if you download the image and connect the 'public' and 'src' directories of the projects downloaded here as volumes, you can use exactly the same environment that I used.

In the image, there is a **'server/my-app'** directory, inside this are the project files, the **'public'** and **'src'** directories must be connected here using the volume.

Dockerfile - I created the image with this file and wrote into how you can start the container from your own directory.

If you managed to start the container and react projected started, you can watch it at **http://localhost:3000**.

I like to use docker images, because in this case you don't have to download and configure the node-js libraries for each project, you just have to turn on a container and run the entire development environment on it.
