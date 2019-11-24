# File upload project

For the first project build, run following commands from the root path
```sh
# daemonized nginx and php-fpm containers
docker-compose up -d
# install vendor and run flex scripts
docker-compose exec php composer update
# install js packages
docker-compose exec php yarn install
# running encode compiler watching for file changes
docker-compose exec php yarn encore dev --watch
```
then you can visit http://localhost

For checking/fixing the standards in src path following command should be launched
```sh
# standards fixer (checker without --fix argument)
docker-compose exec vendor/bin/ecs check --fix src
```
