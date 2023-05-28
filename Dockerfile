# Uses the official PHP image as the base image
FROM php:apache

# Copies the app source code to the appropriate directory in the image
COPY . /var/www/html/

# Exposes the port that the Apache server will listen to
EXPOSE 80