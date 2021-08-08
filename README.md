# coderatbest.com
## start mongodb
```bash
$ source .env &&\
  docker volume create mongo-data &&\
  docker run -d -v "mongo-data:/data/db" -p "27017:27017" -e "MONGO_U=$MONGO_U" -e "MONGO_P=$MONGO_P" mongo
```
