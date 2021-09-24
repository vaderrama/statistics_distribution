#! /bin/bash


# Nos colocamos en el directorio de backend
cd backend

#instalar requeriments.txt
pip3 install -r requirements.txt

# ejecutamos backend
python3 manage.py runserver 8000

