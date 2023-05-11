# gorest-microservices

This project is made for testing the assessment in which i have made:
1. gorest-backend
2. gorest-frontend

1. gorest-backend is the backend services made using nodejs, expressjs, mongoose(mongodb). It has basically three services which are setup in microservices architecture:
a. users-list(this folder contains the service for fetching data from the gorest get api, here the data is inserted in your mongodb collection users if it already not exist otherwise it will be updated in the collection)
b. particular-user(this folder contains the service for fetching the data of a particular user from our database collection users)
c. update-particular-user(this folder contains the service for updating any particular user in the collection users)
d. api-gateway(this folder is the microservices folder where all the above three services are given their own configurations)

Firstly install dependencies using npm install then npm start will be the command to start the services in all 4 backend modules.

2. gorest-frontend is the frontend made on reactjs where home page lists all the users then on click of any user you can get the details of that user, if you want to update any information then you can perform that action also. I have used react-router-dom for this purpose.

Firstly install dependencies using npm install then npm start will be the command to start the services in frontend.