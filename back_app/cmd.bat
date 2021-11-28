docker build -t image_auth_back_app:v1.0.0 .
docker run -t -i -p 443:443 image_auth_back_app:v1.0.0