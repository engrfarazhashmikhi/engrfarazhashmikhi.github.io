FROM ubuntu:latest AS build
RUN apt clean \
&& apt-get autoremove \
&& apt-get update \
&& apt-get upgrade -y \
&& apt-get install apache2 apache2-* -y;
WORKDIR /var/www/html/
COPY . .
CMD ["apache2ctl", "-D", "FOREGROUND"]
