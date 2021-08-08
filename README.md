# coderatbest.com
## start backend with shell
```bash
# is required install nodemon in your PC
# install with $ npm i -g nodemon
$ cd backend/ && \
  env $(cat ../.env) nodemon server.js
```
## start backend with Docker-compose
```bash
#--build for complile
#-d for created process backgrond
$ docker-compose up --build -d
```