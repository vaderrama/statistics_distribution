#! /bin/bash


# Nos colocamos en el directorio de backend
cd backend

#actualizamos
sudo apt-get update

# instalamos python
sudo apt-get install python3.7

#instalamos pip
sudo apt install python3-pip

#instalamos libreria Postgre
sudo apt-get install libpq-dev

#instalar requeriments.txt
pip3 install -r requirements.txt

# ejecutamos backend
python3 manage.py runserver 8000

