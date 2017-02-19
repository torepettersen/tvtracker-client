FROM nginx:1.11
COPY nginx.conf /etc/nginx
COPY dist /usr/share/nginx/html
