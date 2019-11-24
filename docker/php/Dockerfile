FROM php:7.3.12-fpm-alpine

RUN apk add --no-cache composer
RUN apk add --no-cache yarn

RUN apk --no-cache add shadow \
    && usermod -u 1000 www-data
