# dockerNodejs

running docker
sudo docker build -t dockernodejsapp .
sudo docker run -it -p 9000:3000 dockernodejsapp

to run docker container in the background
sudo docker run -d -p 9000:3000 dockernodejsapp

to list background docker containers
docker ps

