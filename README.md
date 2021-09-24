# statistics_distribution

Project created with ReactJs front and Django REST API for backend. Both individualized servers.



## For run Frontend ( React server ) 

In root directory do  
### $ ./runFront.sh
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## For run Backend ( Django Rest server ) 

In root directory do  
### $ ./runBackend.sh

#### If u get this error on console : "TypeError: 'sslmode' is an invalid keyword argument for this function"
#### Only remove the last line in settings.py : "del DATABASES['default']['OPTIONS']['sslmode'] "

The cause of this, is a bad connection with Postgre database for heroku deploy


## For run it on DOCKER

Go to root of project and do 

### sudo docker-compose up 

The two servers will start, but the front server cannot find the backend server due to a problem probably with the incoming connections from Django rest that I have not been able to solve yet


## For visualice it on Heroku 

### https://distributions-statistics.herokuapp.com/

Still in development, the project is deployed, but there is an error in the central deployment of the back service with gunicorn that has not yet been solved


