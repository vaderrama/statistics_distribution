# statistics_distribution

Project created with ReactJs front and Django REST API for backend. Both individualized servers.



## For run Frontend ( React server ) 

Go to "Frontdistributions" directory and do 
### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## For run Backend ( Django Rest server ) 

Go to "Backend" and do 
### python3 manage.py runserver 8000


## For run it on DOCKER

Go to root of project and do 

### sudo docker-compose up 

The two servers will start, but the front server cannot find the backend server due to a problem probably with the incoming connections from Django rest that I have not been able to solve yet


## For visualice it on Heroku 

### https://distributions-statistics.herokuapp.com/

Still in development, the project is deployed, but there is an error in the central deployment of the back service with gunicorn that has not yet been solved
