# Uses the official httpd image as the base image
FROM httpd

# Copies the app source code to the appropriate directory in the image
COPY . /usr/local/apache2/htdocs/

# Removes the copied .git folder
RUN rm -rf /usr/local/apache2/htdocs/.git