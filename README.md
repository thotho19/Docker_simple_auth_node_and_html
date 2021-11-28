# Docker_simple_auth_node_and_html
simple auth project using node + html 

# Project Documentation

## Back-End Nodejs

- <details><summary>login :white_check_mark: </summary>

  Request `http://127.0.0.1:443/login` `POST`

  ```json
  {
    "user": "",
    "password": ""
  }
  ```
  

## Front-End Nodejs + EJS 

- <details><summary>Home :white_check_mark: </summary>

   Request `http://127.0.0.1:300/home` `GET`

  `Home page will Return to the visitor`

  
  # Docker usefull CMDs
**docker build -t image_auth_front_app:v1.0.0 .**
  - build: convert Dockerfile -> docker image
  - -t: set a name tag to to the image
  
**docker run -t -i -p 300:300 image_auth_front_app:v1.0.0**
  - -t:  Allocate a pseudo-TTY
  - -i: Keep STDIN open even if not attached 
  - -p: Publish a container's port(s) to the host
  
 **How to see docker flags ?** <br>
answer: ` docker run --help ` this will show all run flags <br>
answer: ` docker build --help ` this will show all build flags <br>
